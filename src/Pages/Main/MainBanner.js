import React, { Component } from 'react';
import './style/MainBanner.scss';
import Swiper from 'react-id-swiper';

import swiper01 from '../../_asset/image/main/mine-banner.png'


class MainBanner extends Component {
    list = [
        { swiperimg: swiper01},
    ]
    render() {
        const params = {
            slidesPerView:'1',
            spaceBetween: 30,
            pagination: {
                el: 'swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        }
        return (
            <div className="BannerContainer">
                <div className='MainSwiperBox'>
                    <Swiper {...params}>
                        {this.list.map((item, index) => {
                            return (
                                <div key={index} className='MainSwiperImgBox'>
                                    <img className='MainSwiperImg' src={item.swiperimg} alt='이미지 슬라이드'></img>
                                </div>
                            )
                        })}
                    </Swiper>
                    <div className="TextBox">
                        <div className="NewText">
                            한빛로지스 홈페이지가 <br/>
                            새롭게 바뀌었습니다!
                        </div>
                        <div className="Text">
                            앞으로도 더욱 정진하는 한빛로지스가 되겠습니다.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;