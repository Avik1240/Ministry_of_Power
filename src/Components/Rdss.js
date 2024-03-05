import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Rdss = (props) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        document.title = `${!(props.category === "home")
            ? `${capitalize(props.category)}- MOP`
            : "Ministry of Power"
            }`;
    })
    return (
        <>
            <div className="topdiv">
                <div className="gradient">
                    <p id="rdss">Revamped Distribution Sector Scheme (RDSS)</p>
                    <div className="homenav">
                        <Link to="/" id="home_text">Home</Link>
                        <i className="fa-solid fa-greater-than fa-2xs" id="greater"></i>
                        <Link to="/rdss" id="rdssnav">RDSS</Link>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div className="vbar">
                    <div className="d-flex flex-column flex-shrink-0 p-3 ">
                        <ul className="nav flex-column mb-auto sidebar_content">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link link-dark" aria-current="page">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Office Memorandum
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Scheme Overview
                                </Link>
                            </li>
                            <li>
                                <Link to="7/" className="nav-link link-dark">
                                    Action Centre
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    TPQMA
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Document Centre
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Audit History
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link link-dark">
                                    Notifications
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main_content">
                    <div className="main_row">
                        <div className="service serviceip ">
                            <i className="fa-brands fa-wpforms fa-3x"></i>
                            <p>Input Forms</p>
                        </div>
                        {/* <p className="vdiv"></p> */}
                        <div className="service">
                            <i className="fa-solid fa-tachograph-digital fa-3x"></i>
                            <p>Monitoring</p>
                        </div>
                        {/* <p className="vdiv1"></p> */}
                        <div className="service serviceev">
                            <i className="fa-solid fa-file-circle-check fa-3x"></i>
                            <p>Evaluation</p>
                        </div>
                        {/* <p className="hdiv"></p> */}
                        <div className="service servicefu">
                            <i className="fa-solid fa-money-bill-transfer fa-3x"></i>
                            <p>Fund Disbursal</p>
                        </div>
                        <div className="service">
                            <i className="fa-solid fa-chart-line fa-3x"></i>
                            <p>Capacity Building</p>
                        </div>
                        <div className="service servicesc">
                            <i className="fa-solid fa-hand-holding-dollar fa-3x"></i>
                            <p>Scheme Closure</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rdss
