import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = (props) => {
  const [cards,] = useState([
    { id: 1, title: 'Energy Accounting' },
    { id: 2, title: 'DISCOM Consumer Service Rating' },
    { id: 3, title: 'DISCOM Integrated Rating' },
    { id: 4, title: 'Power Utilities Performance' },
    { id: 5, title: 'Key Regulatory Parameters' },
    { id: 6, title: 'Overview of SERC' },
  ]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  useEffect(() => {
    // Dynamically load Swiper JS
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    swiperScript.async = true;
    document.head.appendChild(swiperScript);

    // Dynamically load Magnific Popup JS
    const magnificPopupScript = document.createElement('script');
    magnificPopupScript.src = 'https://dimsemenov.com/plugins/magnific-popup/dist/jquery.magnific-popup.min.js';
    magnificPopupScript.async = true;
    document.head.appendChild(magnificPopupScript);

    // Execute initialization scripts when the scripts are loaded
    Promise.all([loadScript(swiperScript), loadScript(magnificPopupScript)]).then(() => {
      // Initialize Swiper
      new window.Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // Initialize Magnific Popup
      $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
          verticalFit: true,
        },
      });
    });

    // Cleanup function
    return () => {
      document.head.removeChild(swiperScript);
      document.head.removeChild(magnificPopupScript);
    };
  }, []); // Run the effect only once on component mount
  useEffect(() => {
    document.title = `${!(props.category === "home")
      ? `${capitalize(props.category)}- MOP`
      : "Ministry of Power"
      }`;
  })
  // Helper function to load scripts
  const loadScript = (script) => {
    return new Promise((resolve) => {
      script.onload = resolve;
    });
  };


  const renderModuleCards = () => {
    return (
      <div className="module_cards">
        {cards.map((card) => (
          <div key={card.id} className="card module_global" id={`module-card${card.id}`}>
            <div className="card-body" id={`module-body${card.id}`}>
              <p className="card-title">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderModuleCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={`slide-${card.id}`} className="module_card_slide ">
            <div className="card module_global" id={`module-card${card.id}`}>
              <div className="card-body" id={`module-body${card.id}`}>
                <p className="card-title">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  return (
    <>
      <div className='containter'>
        <div className="main">
          {/* Swiper */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="img/MaskGroup138.png" alt="power" />
              </div>
              <div className="swiper-slide">
                <img src="img/MaskGroup138.png" alt="power" />
              </div>
              <div className="swiper-slide">
                <img src="img/MaskGroup138.png" alt="power" />
              </div>
              <div className="swiper-slide">
                <img src="img/MaskGroup138.png" alt="power" />
              </div>
              <div className="swiper-slide">
                <img src="img/MaskGroup138.png" alt="power" />
              </div>
            </div>
          </div>
          <div className="maintext">
            <p id="ftext">Integrated <br />Platform for <strong>Power Sector Schemes</strong></p>
          </div>
          <div className="pm">
            <img id="modi" src="img/narendra_modi_left.png" alt="pm sir" />
            <p id="quote">
              <i className="fa-solid fa-quote-left fa-lg" id="quotation"></i>
              Energy sector plays a big role in the progress of the country and <br />
              &nbsp;&nbsp;&nbsp;contributes to both ease of living and ease of doing business
              <i className="fa-solid fa-quote-right fa-lg" id="quotation"></i>
              <span id="author">-Shri Narendra Modi</span>
              <span id="des">Hon'ble Prime Minister of India</span>
            </p>
            <img src="img/back_quotation.png" alt="quote" id="back_quote" />
          </div>
        </div>

        {/* Schemes */}
        <div className="schemes">
          <p id="schemes_text">Schemes</p>
          <div className='schemes_cards'>
            <div className="card card--1 card_global">
              <div className="card__img--hover"></div>
              <div className='card__info' id="card-body1">
                <Link to="/rdss" id="card-body">Revamped Distribution Sector</Link>
              </div>
            </div>
            <div className="card card--2 card_global">
              <div className="card__img--hover"></div>
              <div className='card__info' id="card-body2">
                <Link to="/" id="card-body" aria-label="Link to GSDP">Additional GSDP Borrowing Space</Link>
              </div>
            </div>
            <div className="card card--3 card_global">
              <div className="card__img--hover"></div>
              <div className='card__info' id="card-body3">
                <Link to="/" id="card-body" aria-label="Link to PRAAPTI">PRAAPTI</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Reporting Module */}
        <div className="module">
          <p id="module_text">Reporting Module</p>
          {isMobile ? renderModuleCarousel() : renderModuleCards()}
        </div>

        {/* Press Release */}
        <div className='press_des'>
          <div className="press">
            <div id="press_content">
              <div className="press_top">
                <p className="press_text">Press Release </p>
                <span className="view">
                  <p>View All</p>
                  <i className="fa-solid fa-arrow-left fa-lg arrow"></i>
                  <i className="fa-solid fa-arrow-right fa-lg arrow"></i>
                </span>
              </div>
              <div className="dates">
                <div className="d d1">
                  <div className="dec29">
                    <i className="fa-solid fa-calendar-days cal"></i>
                    <p className="dec">29 December, 2022</p>
                  </div>
                  <div className="energy_cons">
                    <p>The Energy Conservation (Amendment) Act, 2022 (472.71 KB, pdf)</p>
                    <i className="fa-solid fa-file-pdf fa-2xl" id="pdf"></i>
                  </div>
                  <hr />
                </div>
                <div className="d d2 ">
                  <div className="dec29">
                    <i className="fa-solid fa-calendar-days cal"></i>
                    <p className="dec">15 December, 2022</p>
                  </div>
                  <div className="energy_cons">
                    <p>Supply of Fly ash to the end users by Power Plants to increase ash utilization (440.89 KB, pdf)</p>
                    <i className="fa-solid fa-file-pdf fa-2xl" id="pdf1"></i>
                  </div>
                  <hr />
                </div>
                <div className="d d3">
                  <div className="dec29">
                    <i className="fa-solid fa-calendar-days cal"></i>
                    <p className="dec">7 December, 2022</p>
                  </div>
                  <div className="energy_cons">
                    <p>Assigning additional charge in CCIE-3 to Smt. Rashmi Verma (CCIE-2) (174.51 KB, pdf)</p>
                    <i className="fa-solid fa-file-pdf fa-2xl" id="pdf2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div id='media_content'>
              <div className="media_top">
                <p className="press_text">Media Release </p>
                <span className="view">
                  <p>View All</p>
                  <i className="fa-solid fa-arrow-left fa-lg arrow"></i>
                  <i className="fa-solid fa-arrow-right fa-lg arrow"></i>
                </span>
              </div>
              <div className="img_video">
                <span>
                  <Link className="image-popup-vertical-fit" to="img/MaskGroup31.png">
                    <img id="hydro" src="img/MaskGroup31.png" alt="hydro" />
                  </Link>
                  <i className="fa-solid fa-magnifying-glass-plus fa-2xl" id="zoom"></i>
                </span>
                <span>
                  <img id="nec" src="img/MaskGroup32.png" alt="NEC Awards" />
                  <i className="fa-brands fa-youtube fa-2xl" id="yt"></i>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
