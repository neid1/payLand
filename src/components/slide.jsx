import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="solucion">
        <Slider {...settings}>
          <div>
            <h3 className="prueba"></h3>
          </div>
          <div>
            <h3 className="prueba"></h3>
          </div>
          <div>
            <h3 className="prueba"></h3>
          </div>
          <div>
            <h3 className="prueba"></h3>
          </div>
          <div>
            <h3 className="prueba"></h3>
          </div>
          <div>
            <h3 className="prueba"></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
