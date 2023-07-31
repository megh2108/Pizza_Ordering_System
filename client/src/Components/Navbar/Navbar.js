import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>

            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <NavLink to="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
                        <h1>Yummy<span>.</span></h1>
                    </NavLink>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink to="/Home">Home</NavLink></li>
                            <li><NavLink to="#about">About</NavLink></li>
                            <li><NavLink to="#menu">Menu</NavLink></li>
                            <li><NavLink to="#events">Events</NavLink></li>
                            <li><NavLink to="#chefs">Chefs</NavLink></li>
                            <li><NavLink to="#gallery">Gallery</NavLink></li>
                            <li className="dropdown"><NavLink to="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></NavLink>
                                <ul>
                                    <li><NavLink to="#">Drop Down 1</NavLink></li>
                                    <li className="dropdown"><NavLink to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></NavLink>
                                        <ul>
                                            <li><NavLink to="#">Deep Drop Down 1</NavLink></li>
                                            <li><NavLink to="#">Deep Drop Down 2</NavLink></li>
                                            <li><NavLink to="#">Deep Drop Down 3</NavLink></li>
                                            <li><NavLink to="#">Deep Drop Down 4</NavLink></li>
                                            <li><NavLink to="#">Deep Drop Down 5</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="#">Drop Down 2</NavLink></li>
                                    <li><NavLink to="#">Drop Down 3</NavLink></li>
                                    <li><NavLink to="#">Drop Down 4</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="#contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                    {/* <!-- .navbar --> */}

                    <NavLink className="btn-book-a-table" to="#book-a-table">Book a Table</NavLink>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}
export default Navbar;