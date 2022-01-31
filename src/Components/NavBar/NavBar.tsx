import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return <div className='NavBar'>
        <NavLink style={{ textDecoration: "none" }} to="/CV" >CV</NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about" >About Me</NavLink>
    </div>;
}

export default NavBar;
