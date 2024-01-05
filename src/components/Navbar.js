import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/icon.png";
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="custom-nav">
        <nav className="navbar">
            
            <h1 className="heading"><img src={logo} className="custom-image" />
                &nbsp; Voice Controlled WebApp
            </h1>

            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home"><h2 className="head-links link-underline"><FaHome /> Home</h2></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about"><h2 className="head-links link-underline"><CgDetailsMore /> About</h2></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact"><h2 className="head-links link-underline"><IoMdContact /> Contact</h2></Link>
                    </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blog"><h2 className="head-links link-underline"><GoProjectSymlink /> Projects</h2></Link>
                </li>
            </ul>
            </nav>
            </div>
    )
}

export default Navbar;