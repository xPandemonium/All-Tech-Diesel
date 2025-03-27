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
        <li className='block md:inline-flex text-center max-md:my-1.5'>
            <Link to={`/${location}`} className={`block hover:text-red-dark font-bold text-lg nav-link md:py-2 md:px-4
                ${active? 'bg-red-main rounded-lg' : ''}`}>{name}</Link>
        </li>
    )
}

