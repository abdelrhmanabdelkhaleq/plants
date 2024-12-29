import React, { useState } from "react";
import { FaArrowUp, FaLeaf } from "react-icons/fa";
import pic1 from "../Pic/slider-01-1903x855.jpg";
import pic2 from "../Pic/slider-02-1903x855.jpg";
import serviceIcon1 from "../Pic/service-icon1.png";
import serviceIcon2 from "../Pic/service-icon2.png";
import serviceIcon3 from "../Pic/service-icon3.png";
import serviceIcon4 from "../Pic/service-icon4.png";
import serviceBg from "../Pic/service-bg-1.png";
import aboutImg from "../Pic/about-img.png";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(pic1);
  const [hoverImage, setHoverImage] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeImage = (image) => {
    setCurrentImage(image);
    setHoverImage(null);
  };

  const handleMouseEnter = (image) => {
    setHoverImage(image);
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

  return (
    <>
      <div
        className="hed_back w-100"
        style={{ backgroundImage: `url(${hoverImage || currentImage})` }}
      ></div>
      <div className="dot-container">
        <div
          className="dot"
          onClick={() => changeImage(pic1)}
          onMouseEnter={() => handleMouseEnter(pic1)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="dot"
          id="dothover"
          onClick={() => changeImage(pic2)}
          onMouseEnter={() => handleMouseEnter(pic2)}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
      <button className="scroll-to-top-btn" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
      <div className="sec-2">
        <div className="hed-sec2" >
          <p className="text-white">
            Welcome to the{" "}
            <span className="pic-sec2">
              <FaLeaf className="leaf-icon" />N
            </span>
            utrients Plants
          </p>
          <p className="text-btm-sec2">
            Quis turpis et volutpat convallis, Plants Product and All
          </p>
        </div>
        <div className="container d-flex " id="contentsec-2">
          <div className="leftsec-2 col-md-8">
            <div className="d-flex align-items-center">
              <div className="contentsecsec2" style={{ direction: 'rtl' }}>
                <p>Free Shipping</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="image-container">
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${serviceBg})` }}
                ></div>
                <img src={serviceIcon1} alt="Icon" className="icon-image" />
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="contentsecsec2" style={{ direction: 'rtl' }}>
                <p>Big Saving</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="image-container">
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${serviceBg})` }}
                ></div>
                <img src={serviceIcon2} alt="Icon" className="icon-image" />
              </div>
            </div>
          </div>
          <div className="midsec-2 col-md-8" style={{ backgroundImage: `url(${aboutImg})` }}></div>
          <div className="rightsec-2 col-md-8">
            <div className="d-flex align-items-center">
            <div className="image-container">
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${serviceBg})` }}
                ></div>
                <img src={serviceIcon3} alt="Icon" className="icon-image" />
              </div>
              <div className="contentsecsec2 px-1">
                <p>Easy Returns</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
            <div className="image-container">
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${serviceBg})` }}
                ></div>
                <img src={serviceIcon4} alt="Icon" className="icon-image" />
              </div>
              <div className="contentsecsec2 px-1">
                <p>24x7 Support</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      .sec-3
    </>
  );
}
