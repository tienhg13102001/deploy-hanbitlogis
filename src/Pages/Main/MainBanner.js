import React, { Component } from "react";
import "./style/MainBanner.scss";

import swiper01 from "../../_asset/image/main/mine-banner.png";
import swiper02 from "../../_asset/image/main/mine-banner-02.png";
import swiper03 from "../../_asset/image/main/mine-banner-03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MainBanner extends Component {
  list = [
    {
      swiperimg: swiper01,
      title: "한빛로지스 홈페이지가\n 새롭게 바뀌었습니다!",
      text: "앞으로도 더욱 정진하는 한빛로지스가 되겠습니다.",
    },
    {
      swiperimg: swiper03,
      title: "더 나은, 더 좋은\n 한빛로지스가 되겠습니다.",
      text: "앞으로도 더욱 정진하는 한빛로지스가 되겠습니다.",
    },
    {
      swiperimg: swiper02,
      title: "믿을 수 있는 물류배송의\n 선두주자 한빛로지스",
      text: "앞으로도 더욱 정진하는 한빛로지스가 되겠습니다.",
    },
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
              if (index === 1) {
                return (
                  <div className="Slick_box" key={index}>
                    <img src={item.swiperimg} alt="slick"></img>
                    <div className="Banner_TextBox_right">
                      <div className="Banner_Title_right">
                        {item.title.split("\n").map((e) => (
                          <span>
                            {e}
                            <br />
                          </span>
                        ))}
                      </div>
                      <div className="Banner_Subtitle_right">{item.text}</div>
                    </div>
                    <div className="slick-prev">
                      {/* <img src={prev} alt="button_prev" /> */}
                    </div>
                    <div className="slick-next"></div>
                  </div>
                );
              } else {
                return (
                  <div className="Slick_box" key={index}>
                    <img src={item.swiperimg} alt="slick"></img>
                    <div className="Banner_TextBox">
                      <div className="Banner_Title">
                        {item.title.split("\n").map((e) => (
                          <span>
                            {e}
                            <br />
                          </span>
                        ))}
                      </div>
                      <div className="Banner_Subtitle">{item.text}</div>
                    </div>
                    <div className="slick-prev">
                      {/* <img src={prev} alt="button_prev" /> */}
                    </div>
                    <div className="slick-next"></div>
                  </div>
                );
              }
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MainBanner;
