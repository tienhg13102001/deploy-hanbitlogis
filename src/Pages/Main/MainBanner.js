import React, { Component } from "react";
import "./style/MainBanner.scss";

import swiper01 from "../../_asset/image/main/mine-banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MainBanner extends Component {
  list = [
    { swiperimg: swiper01 },
    { swiperimg: swiper01 },
    { swiperimg: swiper01 },
  ];
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className="BannerContainer">
        <div className="BannerBox">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.list.map((item, index) => {
              return (
                <div className="Slick_box" key={index}>
                  <img src={item.swiperimg} alt="slick"></img>
                  <div className="slick-prev"></div>
                  <div className="slick-next"></div>
                </div>
              );
            })}
          </Slider>
          <div className="Banner_TextBox">
            <div className="Banner_Title">
              한빛로지스 홈페이지가
              <br />
              새롭게 바뀌었습니다!
            </div>
            <div className="Banner_Subtitle">
              앞으로도 더욱 정진하는 한빛로지스가 되겠습니다.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
