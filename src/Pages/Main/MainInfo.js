import React, { Component } from 'react';
import './style/MainInfo.scss'
import { Link } from "react-router-dom";
import icon01 from '../../_asset/image/main/quicicon-01.png';
import icon02 from '../../_asset/image/main/quicicon-02.png';
import icon03 from '../../_asset/image/main/quicicon-03.png';
import icon04 from '../../_asset/image/main/quicicon-04.png';
import icon05 from '../../_asset/image/main/quicicon-05.png';
import icon06 from '../../_asset/image/main/quicicon-06.png';
import icon07 from '../../_asset/image/main/quicicon-07.png';


class MainInfo extends Component {
    list = [
        { id: 0, icon: icon01, text: '회사 소개', url:'/Intro' },
        { id: 1, icon: icon02, text: '경영 방침', url:'/Policy' },
        { id: 2, icon: icon03, text: '지입 정보', url:'/Info' },
        { id: 3, icon: icon04, text: '차량 운영 분석', url:'/Operation'  },
        { id: 4, icon: icon05, text: '1톤 차량', url:'/Vehicle' },
        { id: 5, icon: icon06, text: '2.5톤 차량', url:'/TwoVehicle' },
        { id: 6, icon: icon07, text: '질문 답변', url:'/QnA' },
    ]
    render() {
        return (
            <div className="MainInfoContainer">
                <div className="InfoTitle">
                    <span>한빛로지스</span> 빠른 안내
                </div>
                <div className="MapBox">
                    {this.list.map((item, index) => {
                        return (
                            <div className="ListBox" key={index}>
                                <Link className="Link" to={item.url}>
                                    <img className="IconBox" src={item.icon} alt="안내아이콘"></img>
                                    <div className="TextBox">{item.text}</div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default MainInfo;