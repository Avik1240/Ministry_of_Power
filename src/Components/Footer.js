import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer >
                <div className="topfoot">
                    <div className="slider">
                        <div className="slide-track sli">
                            <div className="slide">
                                <Link to="https://www.india.gov.in/" target="_blank">
                                    <img className="logo" src="img/Image26.png" alt="india.gov.in" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.mygov.in/" target="_blank">
                                    <img className="logo" src="img/mygov.png" alt="mygov" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://amritmahotsav.nic.in/" target="_blank">
                                    <img className="logo" src="img/Azadi_Ka_Amrit_Mahotsav_(English)_logo.svg.png" alt="75azadi" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.g20.in/en/" target="_blank">
                                    <img className="logo" src="img/g20-logo-200-x-150.png" alt="G20" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.pmindia.gov.in/en/" target="_blank">
                                    <img className="logo" src="img/pmindia-logo(2).png" alt="PM India" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://powermin.gov.in/" target="_blank">
                                    <img className="logo" src="img/5-4.png" alt="Ministry of Power" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.makeinindia.com/home" target="_blank">
                                    <img className="logo" src="img/makeinindia.png" alt="Make in India" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.india.gov.in/" target="_blank">
                                    <img className="logo" src="img/Image26.png" alt="india.gov.in" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.mygov.in/" target="_blank">
                                    <img className="logo" src="img/mygov.png" alt="mygov" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://amritmahotsav.nic.in/" target="_blank">
                                    <img className="logo" src="img/Azadi_Ka_Amrit_Mahotsav_(English)_logo.svg.png" alt="75azadi" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.g20.in/en/" target="_blank">
                                    <img className="logo" src="img/g20-logo-200-x-150.png" alt="G20" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.pmindia.gov.in/en/" target="_blank">
                                    <img className="logo" src="img/pmindia-logo(2).png" alt="PM India" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://powermin.gov.in/" target="_blank">
                                    <img className="logo" src="img/5-4.png" alt="Ministry of Power" />
                                </Link>
                            </div>
                            <div className="slide">
                                <Link to="https://www.makeinindia.com/home" target="_blank">
                                    <img className="logo" src="img/makeinindia.png" alt="Make in India" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                <div className="bottomfoot">
                        <nav className="navbar-expand-lg policy_main ">
                            <div className=" container-fluid navbar">
                                <ul className="navbar-nav me-auto ">
                                    <li className="nav-item ">
                                        <Link className="nav-link " to="#">Terms & Conditions</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Website Policy</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Copyright Policy</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Disclaimer</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Accessiblity Statement</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Help</Link>
                                    </li>
                                    <li className="nav-item vrb">
                                        <Link className="nav-link" to="#">Important Links</Link>
                                    </li>
                                </ul>
                            </div>
                                <p>Copyright © 2023 Rural Electrification Corporation Limited, Ministry of Power, Government
                            of India. All rights reserved</p>
                        </nav>
                    <nav className="  navbar navbar-expand-lg navbar-dark icons ">
                        <div className=" container-fluid">
                            <div className="navbar-collapse ">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item ">
                                        <Link className="nav-link" id="icon" to="#" aria-label="Link to Facebook">
                                            <i className="fa-brands fa-facebook-f fa-lg"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item vri">
                                        <Link className="nav-link" id="icon1" to="#" aria-label="Link to X">
                                            <i className="fa-brands fa-x-twitter fa-lg"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item vri">
                                        <Link className="nav-link" id="icon2" to="#" aria-label="Link to YouTube">
                                            <i className="fa-brands fa-youtube fa-lg"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item vri">
                                        <Link className="nav-link" id="icon3" to="#" aria-label="Link to Instagram">
                                            <i className="fa-brands fa-instagram fa-lg"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="last ">
                        <p id="last_up">Last Updated: 30 December 2022 <br />Visitors: 10,06,258</p>
                    </div>
                </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
