import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">


                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Menu">Menu</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                            {/* <li><NavLink to="/Register">Register</NavLink></li> */}
                            {/* <li><NavLink to="/Login">Login</NavLink></li> */}

                        </ul>

                        <NavLink to="/" className="logo d-flex align-items-center me-auto me-lg-0">
                            <h1>Cheesy Pizza<span>.</span></h1>
                        </NavLink>
                        
                        <ul>
                            {/* <li><NavLink to="/Home">Home</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Menu">Menu</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li> */}
                            <li><NavLink to="/Register">Register</NavLink></li>
                            <li><NavLink to="/Login">Login</NavLink></li>

                        </ul>
                    </nav>
                    {/* <!-- .navbar --> */}

                    {/* <NavLink className="btn-book-a-table" to="#book-a-table">Book a Table</NavLink> */}
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}
export default Navbar;