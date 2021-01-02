import React from 'react';


import './NavBar.css';

function NavBar() {
    return (
        // <div>
        <nav className="navbar">
            <a href="#home"><img className="logo" src="modulive.png" /></a>
            <ul>

                <a href="#ourstory"><li>Story</li></a>
                <a href="#ourrange"><li>Range</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
        //</div> 
    );
}
export default NavBar;