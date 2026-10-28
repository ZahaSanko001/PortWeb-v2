import { useEffect, useMemo, useState } from "react";

const REPO = "ZahaSanko001/Daily-Practice";
const REPO_URL = `https://github.com/${REPO}`;
const TZ = "Asia/Dhaka"; // same timezone your update_stats.py uses
const WEEKS = 26;
const DAY = 86400000;
const CACHE_KEY = "dp:v3";
const CACHE_TTL = 15 * 60 * 1000;
const STATS_BOT_PREFIX = "chore: update stats";

const CATEGORIES = [
  "Algorithms",
  "SQL",
  "Concurrency & LLD",
  "Builds",
  "System design",
];

// Mirrors the weekly plan in the repo README.
const PLAN = [
  { day: "mon, tue", focus: "Algorithms: 1 medium (NeetCode 150)" },
  { day: "wed", focus: "SQL" },
  { day: "thu", focus: "Concurrency and low-level design" },
  { day: "fri", focus: "Algorithms: 1 medium or hard" },
  { day: "sat", focus: "Build project (CodeCrafters / Coding Challenges)" },
  { day: "sun", focus: "System design and review" },
];

const LEVELS = [
  "bg-gruvbox-bg3",
  "bg-gruvbox-red/70",
  "bg-gruvbox-orange/70",
  "bg-gruvbox-yellow/80",
  "bg-gruvbox-green",
];
const levelOf = (n) => (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n <= 4 ? 3 : 4);

/* ---------- date helpers (pure) ---------- */
// HELPERS:START
const dayKey = (d) =>
  new Date(d).toLocaleDateString("en-CA", { timeZone: TZ }); // YYYY-MM-DD
const keyToUtc = (k) => Date.parse(`${k}T00:00:00Z`);
const utcToKey = (ms) => new Date(ms).toISOString().slice(0, 10);

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / DAY);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

function prettyKey(key) {
  return new Date(keyToUtc(key)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Columns are weeks (Sunday first), rows are days. Future days are null.
function buildCalendar(todayKey, counts, weeks = WEEKS) {
  const today = keyToUtc(todayKey);
  const dow = new Date(today).getUTCDay();
  const start = today - (dow + (weeks - 1) * 7) * DAY;
  const cols = [];
  for (let w = 0; w < weeks; w++) {
    const col = [];
    for (let d = 0; d < 7; d++) {
      const ms = start + (w * 7 + d) * DAY;
      col.push(ms > today ? null : { key: utcToKey(ms), count: counts[utcToKey(ms)] || 0 });
    }
    cols.push(col);
  }
  return { cols, startKey: utcToKey(start) };
}

// A streak is not broken until a full day passes with no commit.
function computeStreaks(counts, todayKey, startKey) {
  const today = keyToUtc(todayKey);
  let longest = 0;
  let run = 0;
  for (let ms = keyToUtc(startKey); ms <= today; ms += DAY) {
    run = counts[utcToKey(ms)] ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let current = 0;
  let ms = counts[todayKey] ? today : today - DAY;
  while (counts[utcToKey(ms)]) {
    current++;
    ms -= DAY;
  }
  return { current, longest };
}

function monthLabels(cols) {
  const month = (i) =>
    new Date(keyToUtc(cols[i][0].key)).toLocaleDateString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
  return cols.map((_, i) =>
    i === 0
      ? month(0) === month(1)
        ? month(0)
        : ""
      : month(i) !== month(i - 1)
        ? month(i)
        : ""
  );
}
// HELPERS:END

/* ---------- data loading ---------- */
function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(value) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable: skip caching */
  }
}

async function fetchCommits(sinceIso) {
  const out = [];
  for (let page = 1; page <= 5; page++) {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/commits?per_page=100&page=${page}&since=${sinceIso}`
    );
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const batch = await res.json();
    for (const c of batch) {
      // Match scripts/update_stats.py: generated stats commits do not count
      // toward activity, and activity is grouped by the author timestamp.
      if (c.commit.message.startsWith(STATS_BOT_PREFIX)) continue;
      out.push({
        sha: c.sha.slice(0, 7),
        msg: c.commit.message.split("\n")[0],
        date: c.commit.author.date,
        url: c.html_url,
      });
    }
    if (batch.length < 100) break;
  }
  return out;
}

// Reads the per-category counts your update_stats.py writes into the README.
// Never throws: the progress block simply stays hidden if this fails.
async function fetchCategories() {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${REPO}/main/README.md`
    );
    if (!res.ok) return null;
    const text = await res.text();
    const found = {};
    for (const line of text.split("\n")) {
      const m = line.match(/^\|\s*(.+?)\s*\|\s*(\d+)\s*\|/);
      if (m && CATEGORIES.includes(m[1])) found[m[1]] = Number(m[2]);
    }
    return Object.keys(found).length ? found : null;
  } catch {
    return null;
  }
}

/* ---------- component ---------- */
export default function DailyPractice() {
  const [commits, setCommits] = useState(null);
  const [categories, setCategories] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = readCache();
      const apply = (data) => {
        setCommits(data.commits);
        setCategories(data.categories);
        setStatus("ready");
      };

      if (cached && Date.now() - cached.at < CACHE_TTL) return apply(cached.data);

      try {
        const { startKey } = buildCalendar(dayKey(Date.now()), {});
        const since = new Date(keyToUtc(startKey) - DAY).toISOString();
        const [list, cats] = await Promise.all([
          fetchCommits(since),
          fetchCategories(),
        ]);
        if (cancelled) return;
        const data = { commits: list, categories: cats };
        apply(data);
        writeCache({ at: Date.now(), data });
      } catch {
        if (cancelled) return;
        if (cached) apply(cached.data);
        else setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const view = useMemo(() => {
    if (!commits) return null;
    const todayKey = dayKey(Date.now());
    const counts = {};
    for (const c of commits) {
      const k = dayKey(c.date);
      counts[k] = (counts[k] || 0) + 1;
    }
    const { cols, startKey } = buildCalendar(todayKey, counts);
    const cells = cols.flat().filter(Boolean);
    return {
      cols,
      labels: monthLabels(cols),
      total: cells.reduce((sum, c) => sum + c.count, 0),
      activeDays: cells.filter((c) => c.count > 0).length,
      ...computeStreaks(counts, todayKey, startKey),
    };
  }, [commits]);

  const maxCategory = categories ? Math.max(...Object.values(categories), 0) : 0;
  const prompt = <span className="text-gruvbox-orange">$</span>;

  return (
    <section
      id="daily-practice"
      aria-labelledby="daily-practice-title"
      className="mx-auto w-full max-w-3xl px-4 py-16 font-mono"
    >
      <h2
        id="daily-practice-title"
        className="mb-6 text-2xl font-semibold text-gruvbox-fg1"
      >
        Currently practicing
      </h2>

      <div className="overflow-hidden rounded-lg border border-gruvbox-bg3/70 bg-gruvbox-bg0 shadow-lg">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-gruvbox-bg3/70 bg-gruvbox-bg1 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-gruvbox-red/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-gruvbox-yellow/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-gruvbox-green/80" aria-hidden="true" />
          <span className="ml-3 truncate text-xs text-gruvbox-gray">~/daily-practice</span>
        </div>

        <div className="space-y-7 p-5 text-sm leading-relaxed text-gruvbox-fg1">
          {/* description */}
          <div>
            <p className="text-gruvbox-gray">{prompt} cat README.md</p>
            <p className="mt-2 max-w-prose">
              Daily practice toward becoming a stronger backend software
              engineer. Mostly C#, with Java now and then.
            </p>
          </div>

          {status === "loading" && (
            <p className="text-gruvbox-gray" aria-live="polite">
              loading activity from GitHub...
            </p>
          )}

          {status === "error" && (
            <p className="text-gruvbox-fg4" aria-live="polite">
              Could not load activity from GitHub right now. The full history
              is in the repo.
            </p>
          )}

          {view && (
            <>
              {/* summary numbers */}
              <div>
                <p className="text-gruvbox-gray">{prompt} ./progress</p>
                <dl className="mt-2 grid grid-cols-[10rem_1fr] gap-x-4 gap-y-1">
                  <dt className="text-gruvbox-orange">current streak</dt>
                  <dd>{view.current} {view.current === 1 ? "day" : "days"}</dd>
                  <dt className="text-gruvbox-orange">longest streak</dt>
                  <dd>{view.longest} {view.longest === 1 ? "day" : "days"}</dd>
                  <dt className="text-gruvbox-orange">active days</dt>
                  <dd>{view.activeDays}</dd>
                  <dt className="text-gruvbox-orange">commits, 26 weeks</dt>
                  <dd>{view.total}</dd>
                </dl>

                {categories && (
                  <ul className="mt-4 space-y-1.5" aria-label="Solved by category">
                    {CATEGORIES.map((name) => {
                      const n = categories[name] ?? 0;
                      const pct = maxCategory ? (n / maxCategory) * 100 : 0;
                      return (
                        <li
                          key={name}
                          className="grid grid-cols-[10rem_1fr_2rem] items-center gap-x-4"
                        >
                          <span className="truncate text-gruvbox-fg4">{name}</span>
                          <span className="h-1.5 rounded-full bg-gruvbox-bg3" aria-hidden="true">
                            <span
                              className="block h-full rounded-full bg-gruvbox-orange"
                              style={{ width: `${pct}%` }}
                            />
                          </span>
                          <span className="text-right text-gruvbox-fg4">{n}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* commit graph */}
              <div>
                <p className="text-gruvbox-gray">{prompt} git log --graph</p>
                <div className="mt-3 overflow-x-auto pb-1">
                  <div className="inline-flex gap-2">
                    <div
                      className="mt-5 flex flex-col gap-[3px] text-[10px] leading-3 text-gruvbox-gray"
                      aria-hidden="true"
                    >
                      {["", "mon", "", "wed", "", "fri", ""].map((d, i) => (
                        <span key={i} className="h-3">{d}</span>
                      ))}
                    </div>
                    <div>
                      <div
                        className="mb-1 flex h-4 gap-[3px] text-[10px] text-gruvbox-gray"
                        aria-hidden="true"
                      >
                        {view.labels.map((l, i) => (
                          <span key={i} className="w-3 whitespace-nowrap">{l}</span>
                        ))}
                      </div>
                      <div
                        className="flex gap-[3px]"
                        role="img"
                        aria-label={`${view.total} commits on ${view.activeDays} days over the last 26 weeks`}
                      >
                        {view.cols.map((col, ci) => (
                          <div key={ci} className="flex flex-col gap-[3px]">
                            {col.map((cell, di) =>
                              cell ? (
                                <div
                                  key={cell.key}
                                  title={`${cell.count} ${cell.count === 1 ? "commit" : "commits"} on ${prettyKey(cell.key)}`}
                                  className={`h-3 w-3 rounded-[2px] ${LEVELS[levelOf(cell.count)]}`}
                                />
                              ) : (
                                <div key={di} className="h-3 w-3" />
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gruvbox-gray">
                  <span>less</span>
                  {LEVELS.map((cls) => (
                    <span key={cls} className={`h-3 w-3 rounded-[2px] ${cls}`} aria-hidden="true" />
                  ))}
                  <span>more</span>
                </div>
              </div>

              {/* recent commits */}
              <div>
                <p className="text-gruvbox-gray">{prompt} git log --oneline -n 5</p>
                <ul className="mt-2 space-y-1">
                  {commits.slice(0, 5).map((c) => (
                    <li
                      key={c.sha}
                      className="grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-3"
                    >
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gruvbox-orange hover:underline focus-visible:outline-2 focus-visible:outline-gruvbox-orange"
                      >
                        {c.sha}
                      </a>
                      <span className="truncate">{c.msg}</span>
                      <span className="text-xs text-gruvbox-gray">{timeAgo(c.date)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* weekly plan, collapsed */}
          <details>
            <summary className="cursor-pointer text-gruvbox-gray hover:text-gruvbox-fg1 focus-visible:outline-2 focus-visible:outline-gruvbox-orange">
              {prompt} cat weekly-plan
            </summary>
            <dl className="mt-2 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1">
              {PLAN.map(({ day, focus }) => (
                <div key={day} className="contents">
                  <dt className="text-gruvbox-orange">{day}</dt>
                  <dd>{focus}</dd>
                </div>
              ))}
            </dl>
          </details>

          {/* reference link */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gruvbox-bg3/70 pt-4">
            <p className="text-gruvbox-gray">
              {commits && commits[0] ? `last commit: ${timeAgo(commits[0].date)}` : "\u00A0"}
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-gruvbox-orange/60 px-3 py-1.5 text-gruvbox-orange transition-colors hover:bg-gruvbox-orange hover:text-gruvbox-bg0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gruvbox-orange"
            >
              open repo on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
