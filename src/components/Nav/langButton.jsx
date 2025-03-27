import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";

export default function LangButton (){

    const currentPage = useLocation().pathname;
    const [redirectPage, setRedirectPage] = useState(''); 

    useEffect(() => {
        if (currentPage.includes('/es')) {
            setRedirectPage(currentPage.replace('/es', ''));
        } else {
            setRedirectPage('es' + currentPage);
        }

    }, [currentPage]);

    return (
        <div className='block md:inline-flex text-center items-center text-red-main max-md:my-1.5'>
            <Link to={`/${redirectPage}`} className={`block hover:text-red-dark font-bold text-lg nav-link md:py-2 md:px-4`}><PiGlobeHemisphereWestDuotone /></Link>
        </div>
    )
}