import { useState, useEffect } from 'react'
import NavLinks from "./Nav/navLinks"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="with-100% bg-black text-white">
            <header className="p-3 mx-[3rem] flex-container justify-between items-center">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/ATD-Silver-Transparent.png" alt="logo" className="h-auto max-w-[100px]"/>
                    </div>
                    <div className={`md:block md:h-full
                        ${isOpen? 'flex' : 'hidden'}
                    `}>
                        <NavLinks></NavLinks>
                    </div>
                    <div className='md:hidden'>
                        <button className="bg-red-main text-white font-bold text-lg py-2 px-4 rounded-sm cursor-pointer" onClick={toggleMenu}>NAV</button>
                    </div>
                </div>
            </header>
        </div>
    )
}