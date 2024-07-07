import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <NavLink to="/" className="navbar-link">About</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/resume" className="navbar-link">Education</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/projects" className="navbar-link">Projects</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to="/contact" className="navbar-link">Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
