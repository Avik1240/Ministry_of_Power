import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header>
                <div id='home'>
                    <nav className="navbar-expand-lg bg-light top">
                        <div className="navbar">
                            <div className=" navbar-collapse topbar" >
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <Link className="nav-link nav1" aria-current="page" to="#">Feedback</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">FAQ's</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">Career</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">Archives</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">SiteMap</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <Link className="nav-link nav1" aria-current="page" to="#">Skip to Main Content</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">Screen Reader Access</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link nav1" to="#">A- A A+</Link>
                                    </li>
                                    <li className="nav-item vr">
                                        <Link className="nav-link" to="#" aria-label="first link">
                                            <i className="fa-regular fa-circle fa-sm" id="circle1"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#" aria-label="second link">
                                            <i className="fa-solid fa-circle fa-sm" id="circle2"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown vr">
                                        <Link className="nav-link dropdown-toggle nav1" to="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            English
                                        </Link>
                                        <ul className="dropdown-menu ">
                                            <li><Link className="dropdown-item nav1" to="#">Hindi</Link></li>
                                            <li><Link className="dropdown-item nav1" to="#">Gujarati</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="#" aria-label="search">
                                            <i className="fa-solid fa-magnifying-glass fa-lg" id="search"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg">
                        <div className=" secondnav">
                            <span className="toplogos">
                                <Link className="navbar-brand" id="power" to="https://powermin.gov.in/" target="_blank" aria-label="power link"></Link>
                                <Link className="navbar-brand" id="rec" to="https://recindia.nic.in/" target="_blank" aria-label="rec link"></Link>
                                <Link className="navbar-brand" id="pfc" to="https://pfcindia.com/" target="_blank" aria-label="pfc link"></Link>
                            </span>
                            <div className=" navtwo" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item ">
                                        <Link className="nav-link" to="/" aria-label="Link to Home Page">
                                            <i className="fa-solid fa-house fa-lg " id="home"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link nav2" to="#">About Us</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link nav2" to="#">Quick Links</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link nav2" to="#">Grievances</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link nav2" to="#">Contact Us</Link>
                                    </li>
                                    <li>
                                        <button className="reg sign btn2 btn1" type="button">Register / Sign In</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
