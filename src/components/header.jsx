import { useState, useEffect } from 'react'
import NavLinks from "./Nav/navLinks"
import LangButton from "./Nav/langButton";
import { FaBars } from "react-icons/fa6";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="with-100% bg-black text-white">
            <header className="p-3 sm:mx-[3rem] flex max-md:flex-col justify-between items-center">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <img src="/ATD-Silver-Transparent.png" alt="logo" className="h-auto max-w-[100px]"/>
                    </div>
                    <div className='md:hidden'>
                        <button className="bg-red-main text-white font-bold text-lg py-2 px-3 rounded-sm cursor-pointer" onClick={toggleMenu}><FaBars /></button>
                    </div>
                </div>
                <div className={`md:flex md:h-full max-md:w-full max-md:border-t-2 max-md:mt-3 ${isOpen? 'block' : 'hidden'}`}>
                    <NavLinks></NavLinks>
                    <LangButton></LangButton>
                </div>
            </header>
        </div>
    )
}