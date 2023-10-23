import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (<nav>
        <Link to="/" className="title">WEBSITE</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
            }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>);
}

export default Navbar;