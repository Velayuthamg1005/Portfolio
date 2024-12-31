import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return (
        <header className="flex justify-between px-5 py-2 bg-black">
            <a className="font-bold text-white text-2xl" href="/">G V</a> {/* Home link with valid href */}
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li> {/* Home link with valid href */}
                    <li><a href="/#about">About</a></li> {/* Valid anchor link */}
                    <li><a href="/#projects">Projects</a></li> {/* Valid anchor link */}
                    <li><a href="/#resume">Resume</a></li> {/* Valid anchor link */}
                    <li><a href="/#contact">Contact</a></li> {/* Valid anchor link */}
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                        <li><a href="/">Home</a></li> {/* Home link with valid href */}
                        <li><a href="#about">About</a></li> {/* Valid anchor link */}
                        <li><a href="#projects">Projects</a></li> {/* Valid anchor link */}
                        <li><a href="#contact">Contact</a></li> {/* Valid anchor link */}
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5"/>
            </button>
        </header>
    );
}
