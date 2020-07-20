import React, { Component } from 'react';
import './style/MainSlick.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner01 from "../../_asset/image/main/cooperativelogo-01.png";
import banner02 from "../../_asset/image/main/cooperativelogo-02.png";
import banner03 from "../../_asset/image/main/cooperativelogo-03.png";
import Slider from 'react-slick';

class MainSlick extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 1000,
            cssEase: "linear"
          };
        return (
            <div className="SlickContainer">
                <Slider  {...settings}>
                    <div className="Slick_Img">
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner02} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner03} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner02} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner03} className="Banner" alt="강릉센터"></img>
                    </div>
                    <div>
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                    </div>
                    
                </Slider>
            </div>
        );
    }
}

export default MainSlick;