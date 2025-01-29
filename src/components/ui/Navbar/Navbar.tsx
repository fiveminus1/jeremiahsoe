import React from "react"

import { VT323 } from "next/font/google";

const vt323 = VT323({
    subsets: ["latin"],
    weight: "400",
});

export default function Navbar() {
    return (
        <nav className={`${vt323.className} bg-gray-900 text-white shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-semibold tracking-widest">jeremiah soe</div>

                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#home" className="hover:text-gray-400">About</a>
                    <a href="#home" className="hover:text-gray-400">Projects</a>
                    <a href="#home" className="hover:text-gray-400">Contact</a>

                </div>
            </div>
        </nav>
    )
};


