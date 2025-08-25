import React, { useState } from 'react';
import Link from '../Link/Link';
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { GiHidden } from 'react-icons/gi';


const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" }
    ];

    return (
        <nav>
            <div className='cursor-pointer bg-amber-200 p-1 .5 md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose className='text-2xl'/> : <CiMenuBurger className='text-2xl'/>
                }
                
            </div>
            <ul className={` ${open ? 'top-6': '-top-60'}
                
                md:flex gap-2 absolute md:static bg-amber-200 p-5 duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;