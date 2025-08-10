import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex flex-col md:flex-row justify-around items-center h-[25rem] bg-gradient-to-t md:from-blue-300 md:via-gray-950 md:to-black border-t md:border-blue-200/30 border-amber-200/30 from-amber-300 via-amber-800 to-black rounded-t-[4rem]">
                <div>
                    <img src="pfp.webp" alt="" className="h-32 w-32 md:h-60 md:w-60 rounded-full border-4 border-amber-300 md:border-gray-400"/>
                </div>

                <div className="flex flex-col gap-4 text-center">
                    <h2 className="opacity-80 text-amber-200 md:text-blue-200">Socials</h2>
                    <ul className="space-y-2">
                        <li><a href="https://github.com/ZahaSanko001" className="flex gap-2 hover:text-blue-200"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/raiyan-karim-226254296" className="flex gap-2 hover:text-blue-200"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>LinkedIn</a></li>      
                        <li><a href="https://x.com/raiyan_k" className="flex gap-2 hover:text-blue-200"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>Twitter</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="opacity-80 text-amber-200 md:text-blue-200">Contacts</h2>
                    <ul className="space-y-2">
                        <li className="flex gap-2"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>Zgyro905@gmail.com</li>
                    </ul>
                </div>
            </div>
        </section> 
    )
}

export default Contact;