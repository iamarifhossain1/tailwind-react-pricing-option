import { Menu, X } from 'lucide-react';
import Link from '../Link/Link'
import React, { useState } from 'react';


const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex gap-2' onClick={() => setOpen(!open)}> 
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute bg-indigo-600 ${open ? 'top-6 ': '-top-36'} duration-1000`}>
                    {links}
                </ul>
                <h3>My Navbar</h3>
            </span>
                
            <ul className='md:flex hidden gap-5 list-none no-underline'>
                {
                    links
                }
            </ul>
                <h3>Sign In</h3>
            </nav>
    );
};

export default NavBar;