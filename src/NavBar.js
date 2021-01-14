import React, { useEffect } from 'react';


import './NavBar.css';

function NavBar() {
    useEffect(() => {
        const img = new Image();
        img.src = "../assets/logo.png"
    }, []);
    return (
        // <div>
        <nav className="navbar">
            <a href="#home"><img className="logo" src="../assets/logo.png" /></a>
            <ul>

                <a href="#ourstory"><li>About</li></a>
                <a href="#ourrange"><li>Range</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
        //</div> 
    );
}
export default NavBar;