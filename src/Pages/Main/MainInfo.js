import React, { Component } from 'react';
import './style/MainInfo.scss'

import icon01 from '../../_asset/image/main/quicicon-01.png';
import icon02 from '../../_asset/image/main/quicicon-02.png';
import icon03 from '../../_asset/image/main/quicicon-03.png';
import icon04 from '../../_asset/image/main/quicicon-04.png';
import icon05 from '../../_asset/image/main/quicicon-05.png';
import icon06 from '../../_asset/image/main/quicicon-06.png';
import icon07 from '../../_asset/image/main/quicicon-07.png';


class MainInfo extends Component {
    list = [
        { id: 0, icon: icon01, text: '회사 소개'},
        { id: 1, icon: icon02, text: '경영 방침'},
        { id: 2, icon: icon03, text: '지입 정보'},
        { id: 3, icon: icon04, text: '차량 운영 분석'},
        { id: 4, icon: icon05, text: '1톤 차량'},
        { id: 5, icon: icon06, text: '2.5톤 차량'},
        { id: 6, icon: icon07, text: '질문 답변'},
    ]
    render() {
        return (
            <div className="MainInfoContainer">
                <div className="InfoTitle">
                    <span>한빛로지스</span> 빠른 안내
                </div>
                <div className="MapBox">
                    {this.list.map((item, index) =>{
                        return(
                            <div className="ListBox" key={index}>
                                <img className="IconBox" src={item.icon} alt="안내아이콘"></img>
                                <div className="TextBox">{item.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default MainInfo;