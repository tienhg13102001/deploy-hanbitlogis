import React, { Component } from "react";
import "./style/MainSlick.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner01 from "../../_asset/image/main/cooperativelogo-01.png";
import banner02 from "../../_asset/image/main/cooperativelogo-02.png";
import banner03 from "../../_asset/image/main/cooperativelogo-03.png";
import Slider from "react-slick";

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
      cssEase: "linear",
    };

    const bannerImgs = [
      {
        bannerimg: banner01,
      },
      {
        bannerimg: banner02,
      },
      {
        bannerimg: banner03,
      },
      {
        bannerimg: banner01,
      },
      {
        bannerimg: banner02,
      },
      {
        bannerimg: banner03,
      },
      {
        bannerimg: banner01,
      },
      {
        bannerimg: banner02,
      },
      {
        bannerimg: banner03,
      },
    ];
    // const rendering = () => {
    //   const result = [];
    //   for (let i = 0; i < bannerImgs.length * 3; i++) {
    //     result.push(
    //       <div className="Slick_Img">
    //         <img
    //           key={i}
    //           src={bannerImgs[i > bannerImgs.length].bannerimg}
    //           className="Banner"
    //           alt="강릉센터"
    //         ></img>
    //       </div>
    //     );
    //   }
    //   return result;
    // };
    return (
      <div className="Slick_Line">
        <div className="SlickContainer">
          <Slider {...settings}>
            {bannerImgs.map((el, index) => {
              return (
                <div className="Slick_Img">
                  <img
                    key={index}
                    src={el.bannerimg}
                    className="Banner"
                    alt="강릉센터"
                  ></img>
                </div>
              );
            })}
            {/* {rendering()} */}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MainSlick;
