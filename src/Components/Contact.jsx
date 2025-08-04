import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex flex-col md:flex-row justify-around items-center h-[25rem] bg-gradient-to-b from-blue-400 via-gray-950 to-blue-400 rounded-t-4xl">
                <div>
                    <img src="pfp.jpg" alt="" className="h-32 w-32 md:h-60 md:w-60 rounded-full border-4 border-amber-300 md:border-gray-400"/>
                </div>

                <div className="flex flex-col gap-4 text-center">
                    <h2 className="opacity-80 text-blue-200">Socials</h2>
                    <ul className="space-y-2">
                        <li><a href="https://github.com/ZahaSanko001" className="hover:text-blue-200">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/raiyan-karim-226254296" className="hover:text-blue-200">LinkedIn</a></li>      
                        <li><a href="https://x.com/raiyan_k" className="hover:text-blue-200">Twitter</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="opacity-80 text-blue-200">Contacts</h2>
                    <ul className="space-y-2">
                        <li>Zgyro905@gmail.com</li>
                        <li>+880-1624782439</li>
                    </ul>
                </div>
            </div>
        </section> 
    )
}

export default Contact;