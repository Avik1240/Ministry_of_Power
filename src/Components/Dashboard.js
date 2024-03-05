import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';

const Dashboard = (props) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        document.title = `${!(props.category === "home")
            ? `${capitalize(props.category)}- MOP`
            : "Ministry of Power"
            }`;
    })

    const drawCharts = () => {
        const barData = [
            ['DISC', 'Loss (%)', { role: "style" }],
            ['DISC 1', 37.7, "#d83039"],
            ['DISC 2', 37, "#d25816"],
            ['DISC 3', 36.6, "#ffb433"],
            ['DISC 4', 36.1, "#ffb433"],
            ['DISC 5', 35.7, "#04a559"],
        ];

        const barOptions = {
            focusTarget: 'category',
            backgroundColor: 'transparent',
            chartArea: {
                left: 50,
                top: 10,
                width: '100%',
                height: '250px'
            },
            bar: {
                groupWidth: '40%'
            },
            vAxis: {
                minValue: 34,
                maxValue: 38,
                format: '#\' %\'',
                gridlines: {
                    color: '#DDD',
                    count: 4
                },
            },
            animation: {
                duration: 1500,
                easing: 'out',
                startup: true
            }
        };

        return (
            <Chart
                chartType="ColumnChart"
                data={barData}
                options={barOptions}
                graph_id="bar-chart"
                width={'100%'}
                height={'250px'}
            />
        );
    };
    return (
        <>
            <div className="important">
                <div className="main_menu">
                    <div className="sidebar">
                        <div className="d-flex flex-column ">
                            <ul className="nav flex-column text-center">
                                <li>
                                    <Link to="/rdss" className="nav-link py-3 border-bottom" title="Previous"
                                        data-bs-toggle="tooltip" data-bs-placement="right">
                                        <i className="fa-solid fa-arrow-left fa-xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Dashboard" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-solid fa-square-poll-vertical fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Guidelines" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-solid fa-file-circle-exclamation fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Office Memorandum" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-solid fa-building-shield fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Scheme Overview" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-regular fa-keyboard fa-rotate-270 fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Action Centre" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-regular fa-newspaper fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Document Centre" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-solid fa-rectangle-list fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Document Centre" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-regular fa-file-image fa-2xl"></i>
                                    </Link>
                                </li>
                                <li className="sidebar_icon">
                                    <Link to="#" className="nav-link py-3 " title="Audit History" data-bs-toggle="tooltip"
                                        data-bs-placement="right">
                                        <i className="fa-solid fa-sliders fa-2xl"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="map_content">
                        <div className="rdss_heading">
                            <p>Dashboard - Revamped Distribution Sector Scheme (RDSS)</p>
                            <Link to="/detail" className="nav-link" title="Audit History" data-bs-toggle="tooltip" data-bs-placement="right">
                                <button type="button">View Detailed Dashboard</button>
                            </Link>
                        </div>
                        <div className="atc">
                            <span className="border-left">ATC Loss
                                <p className="one"></p>
                                <p className="vline"></p>
                            </span>
                            <span>ACS - ARR Gap
                                <p className="two"></p>
                                <p className="vline"></p>
                            </span>
                            <span>Smart Meter Installed
                                <p className="three"></p>
                            </span>
                        </div>
                        <div className="downmap">
                            <div className="map">
                                <div className="state">
                                    <nav className="navbar ulone navbar-expand-lg border-bottom">
                                        <div className="container-fluid">
                                            <p className="discom">DISCOM - State wise</p>
                                            <div>
                                                <ul className="navbar-nav mb-lg-0">
                                                    <li className="nav-item">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-input yellow" type="radio"
                                                                name="inlineRadioOptions" id="yellow" value="option1" />
                                                            <label className="form-check-label" htmlFor="yellow">REC
                                                                states/UTs</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-input yellow" type="radio"
                                                                name="inlineRadioOptions" id="yellow" value="option2" />
                                                            <label className="form-check-label" htmlFor="pfc">PFC
                                                                states/UTs</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-input yellow" type="radio"
                                                                name="inlineRadioOptions" id="yellow" value="option2" />
                                                            <label className="form-check-label" htmlFor="both">Both</label>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <button className="btn dropdown-toggle year" type="button"
                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                            2022
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="container-fluid">
                                            <div className=' ms-auto'>
                                                <ul className="navbar-nav ms-auto mb-lg-0">
                                                    <li className="nav-item dropdown selectdp">
                                                        <button className="btn" type="button" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            Select KBQ
                                                            <i className="fa-solid fa-angle-down ms-auto"></i>
                                                        </button>
                                                        <ul className="dropdown-menu ">
                                                            <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <button className="searchbtn" type="button" aria-label="Search button" title="Search button">
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="mapdiag">
                                    <img src="../img/Group5244.png" alt="India Map" />
                                </div>
                            </div>
                            <div className="sidecontent">
                                <div className="summary">
                                    <p>DISCOM-wise Summary(FY 2022)</p>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="container-fluid">
                                            <div className="collapse navbar-collapse">
                                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                                    <li className="nav-item dropdown selectdp">
                                                        <button className="btn" type="button" data-bs-toggle="dropdown"
                                                            aria-expanded="false">
                                                            Select KBQ
                                                            <i className="fa-solid fa-angle-down ms-auto"></i>
                                                        </button>
                                                        <ul className="dropdown-menu ">
                                                            <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                            <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="single">
                                        <figure className="chart donut_one" data-percent="100">
                                            <svg >
                                                <circle className="outer" cx="80" cy="80" r="150" transform="rotate(-180, 127, 125)" />
                                            </svg>
                                        </figure>
                                        <figure className="chart donut_two" data-percent="50">
                                            <svg >
                                                <circle className="outer" cx="83" cy="51" r="130" transform="rotate(-180, 110, 110)" />
                                            </svg>
                                        </figure>
                                        <figure className="chart donut_three" data-percent="25">
                                            <svg >
                                                <circle className="outer" cx="90" cy="51" r="110" transform="rotate(-180, 110, 110)" />
                                            </svg>
                                        </figure>
                                    </div>
                                    <p>ATC Loss</p>
                                    <div className="scale">
                                        <i className="fa-solid fa-circle fa-sm"><span>10-20%</span></i>
                                        <i className="fa-solid fa-circle fa-sm"><span>&gt;20%</span></i>
                                        <i className="fa-solid fa-circle fa-sm"><span>&lt;10%</span></i>
                                    </div>
                                </div>
                                <div className="loss">
                                    <p>ATC Loss by DISCOMs</p>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="container-fluid">
                                            <div className="collapse navbar-collapse">
                                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                                    <li className="nav-item">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-input yellow" type="radio"
                                                                name="inlineRadioOptions" id="yellow" value="option2" />
                                                            <label className="form-check-label" htmlFor="best">Best
                                                                Performing</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-input yellow" type="radio"
                                                                name="inlineRadioOptions" id="yellow" value="option2" />
                                                            <label className="form-check-label" htmlFor="least">Least
                                                                Performing</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <div id="bar-chart">{drawCharts()}</div>
                                </div>
                            </div>
                        </div>
                        <div className="grants">
                            <div>
                                <div className="grantheading border-bottom">
                                    <p>Grants Sanctioned & Utilized</p>
                                    <span>View All
                                        <i className="fa-solid fa-chevron-right fa-xs"></i>
                                    </span>
                                </div>
                                <div className="grantitems">
                                    <span>
                                        <img src="../img/Union49.png" alt="Meter icon" />
                                        <span>
                                            <p>Gol grant sanctioned for Smart Metering Works</p>
                                            <span className="amount">₹ 11,293 cr.</span>
                                        </span>
                                        <span className="vline1"></span>

                                    </span>
                                    <span>
                                        <img src="../img/Union50.png" alt="Transformer icon" />
                                        <span>
                                            <p>Gol grant sanctioned for Loss Reduction Works</p>
                                            <span className="amount">₹ 56,575 cr.</span>
                                        </span>
                                        <span className="vline1"></span>
                                    </span>
                                    <span>
                                        <img src="../img/Path46288.png" alt="Tower icon" />
                                        <span>
                                            <p>Gol grant sanctioned for Loss Reduction Works</p>
                                            <span className="amount">₹ 96,653 cr.</span>
                                        </span>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_main">
                    <div className='onediv'>
                        <span className="low">
                            <img src="../img/g6249.png" alt="Graph icon" />
                            <span>
                                <span>ATC Loss</span>
                                2021 - 17%
                            </span>
                        </span>
                        <span className="arr">
                            <img src="../img/Group5352.png" alt="Rupee icon" />
                            <span>
                                <span>ACS-ARR Gap</span>
                                2021 - INR 0.22/kWh
                            </span>
                        </span>
                    </div>
                    <div className='seconddiv'>
                        <div className="curvegraph">
                            <div className="double">
                                <figure className="chart donut_one oo" data-percent="100">
                                    <svg >
                                        <circle className="outer" cx="80" cy="80" r="150" transform="rotate(-180, 127, 125)" />
                                    </svg>
                                </figure>
                                <figure className="chart donut_two jj" data-percent="50">
                                    <svg >
                                        <circle className="outer" cx="83" cy="51" r="130" transform="rotate(-180, 110, 110)" />
                                    </svg>
                                </figure>
                                <figure className="chart donut_three kk" data-percent="25">
                                    <svg >
                                        <circle className="outer" cx="90" cy="51" r="110" transform="rotate(-180, 110, 110)" />
                                    </svg>
                                </figure>
                            </div>
                            <p>&nbsp;&nbsp;&nbsp;PQ/SOP<br />Compliance</p>
                            <div className="bottom_scale">
                                <i className="fa-solid fa-circle fa-sm"><span>Compliant</span></i>
                                <i className="fa-solid fa-circle fa-sm"><span>Partially Compliant</span></i>
                                <i className="fa-solid fa-circle fa-sm"><span>Non-Compliant</span></i>
                            </div>
                        </div>
                        <div className="curvegraph">
                            <div className="triple">
                                <figure className="chart donut_one ooo" data-percent="100">
                                    <svg >
                                        <circle className="outer" cx="80" cy="80" r="150" transform="rotate(-180, 127, 125)" />
                                    </svg>
                                </figure>
                                <figure className="chart donut_two jjj" data-percent="50">
                                    <svg >
                                        <circle className="outer" cx="83" cy="51" r="130" transform="rotate(-180, 110, 110)" />
                                    </svg>
                                </figure>
                                <figure className="chart donut_three kkk" data-percent="25">
                                    <svg >
                                        <circle className="outer" cx="90" cy="51" r="110" transform="rotate(-180, 110, 110)" />
                                    </svg>
                                </figure>
                            </div>
                            <p>&nbsp;&nbsp;REF<br />Score</p>
                            <div className="bottom_scale1">
                                <i className="fa-solid fa-circle fa-sm"><span>&gt;75</span></i>
                                <i className="fa-solid fa-circle fa-sm"><span>&gt;=60</span></i>
                                <i className="fa-solid fa-circle fa-sm"><span>&lt;60</span></i>
                                <i className="fa-solid fa-circle fa-sm"><span>&lt;60</span></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
