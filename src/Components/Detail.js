import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Script from 'react-script-loader-hoc';
const Detail = () => {
    // useEffect(() => {
    //     // Draw charts when Google Visualization API is loaded
    //     if (window.google) {
    //       drawCharts();
    //     }
    //   }, []); // Empty dependency array to run the effect only once
    
    //   const drawCharts = () => {
    //     // BEGIN PIE CHART
    //     // pie chart data
    //     var pieData = window.google.visualization.arrayToDataTable([
    //       ['Funds', 'Amount'],
    //       ['Funds Utilized', 13534400],
    //       ['Funds Pending', 36626400],
    //     ]);
    
    //     // pie chart options
    //     var pieOptions = {
    //       pieHole: 0.4,
    //       colors: ['#10AA90', '#2D52BB'],
    //       chartArea: {
    //         width: '100%',
    //         height: '94%',
    //       },
    //       legend: {
    //         position: 'none', // Set legend position to 'none' to remove it
    //       },
    //     };
    
    //     // draw pie chart
    //     var pieChart = new window.google.visualization.PieChart(document.getElementById('pie-chart'));
    //     pieChart.draw(pieData, pieOptions);
    //   };
    
    const startDatepickerRef = useRef(null);
    const endDatepickerRef = useRef(null);

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const openStartDatepicker = () => {
        startDatepickerRef.current.setOpen(true);
    };

    const openEndDatepicker = () => {
        endDatepickerRef.current.setOpen(true);
    };

    const handleStartDateChange = (date) => {
        const isStartDateReset = selectedStartDate && date && selectedStartDate.getTime() === date.getTime();
        setSelectedStartDate(date);
        if (isStartDateReset) {
            setSelectedEndDate(null);
        }
        endDatepickerRef.current.setOpen(true);
    };

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };
    return (
        <>
         {/* <Script url="https://www.google.com/jsapi" /> */}
            <div className="detail">
                <div className="detail_main_menu">
                    <div className="detail_sidebar">
                        <div className="d-flex flex-column ">
                            <ul className="nav flex-column text-center">
                                <li>
                                    <Link to="/dashboard" className="nav-link py-3 border-bottom" title="Previous"
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
                    <div className="line_chart_content">
                        <div className="detail_heading">
                            <p>Detailed Dashboard</p>
                            <Link to="/dashboard">Back to Main Dashboard</Link>
                        </div>
                        <div className="discom_search">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <div>
                                        <ul className="navbar-nav ms-auto mb-lg-0 fin_nav">
                                            <li className="nav-item dropdown discom_nav">
                                                <button className="btn" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    DISCOM 1
                                                    <i className="fa-solid fa-angle-down ms-auto"></i>
                                                </button>
                                                <ul className="dropdown-menu ">
                                                    <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown discom_nav finance">
                                                <button className="btn" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Financial
                                                    <i className="fa-solid fa-angle-down ms-auto"></i>
                                                </button>
                                                <ul className="dropdown-menu ">
                                                    <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                </ul>
                                            </li>
                                            <li className='date_block'>
                                                <div className="form-group">
                                                    <div className='input-group date'>
                                                        <DatePicker
                                                            className="form-control"
                                                            name="startDate"
                                                            placeholderText="From"
                                                            dateFormat="dd/MM/yyyy"
                                                            ref={startDatepickerRef}
                                                            selected={selectedStartDate}
                                                            onChange={handleStartDateChange}
                                                        />
                                                        <span
                                                            className="calendar-icon"
                                                            onClick={openStartDatepicker}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <span className="fa-regular fa-calendar"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='date_block'>
                                                <div className="form-group">
                                                    <div className='input-group date'>
                                                        <DatePicker
                                                            className="form-control"
                                                            name="endDate"
                                                            placeholderText="To"
                                                            dateFormat="dd/MM/yyyy"
                                                            ref={endDatepickerRef}
                                                            selected={selectedEndDate}
                                                            onChange={handleEndDateChange}
                                                            minDate={selectedStartDate}
                                                            disabled={!selectedStartDate}
                                                        />
                                                        <span
                                                            className="calendar-icon"
                                                            onClick={openEndDatepicker}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <span className="fa-regular fa-calendar"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>



                                </div>
                            </nav>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <div className=' ms-auto'>
                                        <ul className="navbar-nav ms-auto mb-lg-0">
                                            <li className="nav-item dropdown frequency">
                                                <button className="btn" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Select Frequency
                                                    <i className="fa-solid fa-angle-down ms-auto"></i>
                                                </button>
                                                <ul className="dropdown-menu ">
                                                    <li><Link className="dropdown-item" to="#">2021</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2020</Link></li>
                                                    <li><Link className="dropdown-item" to="#">2019</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <button className="search" type="button" aria-label="Search button" title="Search button">
                                                    Search
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="graphs">
                            <div className="line_graphs">
                                <div className="rowI">
                                    <div className="lineI">AT&C Loss (%)</div>
                                    <div className="lineI">PPC/Revenue (INR Cr)</div>
                                </div>
                                <div className="rowII">
                                    <div className="lineI">AT&C Loss (%)</div>
                                    <div className="lineI">PPC/Revenue (INR Cr)</div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="smart_meters">
                                <span className='target'>
                                    <span>
                                    <img src='../img/Group5235.png' alt='Meter Target'/>
                                    <span></span>
                                    </span>
                                </span>
                            </div>
                            <div className="piechart">
                            {/* <div id="pie-chart"></div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
