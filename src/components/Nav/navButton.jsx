import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavButton( {location, name} ) {

    const currentPage = useLocation().pathname;
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (currentPage === `/${location}`) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [currentPage, location]);

    return(
        <li className='block md:inline-flex'>
            <Link to={`/${location}`} className={`text-white hover:text-red-dark font-bold text-lg nav-link py-2 px-4
                ${active? 'bg-red-main rounded-sm' : ''}`}>{name}</Link>
        </li>
    )
}

