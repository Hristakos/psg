import React, { useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";

import './NavBar.css';

function NavBar() {

    return (
        // <div>
        <nav className="navbar">
            <NavLink to="/#home"><img className="logo" src="../assets/logo.png" /></NavLink>
            <ul>

                <NavLink to="/#ourstory"><li>About</li></NavLink>
                <NavLink to="/#ourrange"><li>Range</li></NavLink>
                <NavLink to="/#projects"><li>Projects</li></NavLink>
                <NavLink to="/#contact"><li>Contact</li></NavLink>
            </ul>
        </nav>
        //</div> 
    );
}
export default NavBar;