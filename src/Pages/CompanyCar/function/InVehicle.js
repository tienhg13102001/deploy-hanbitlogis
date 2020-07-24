import React, { Component } from 'react';

import './style/InVehicle.scss'
import { NavLink } from 'react-router-dom';

class InVehicle extends Component {
    list = [
        { menu:'급수', content:'1톤 내장탑 공산품 배송' },
        { menu:'매물번호', content:'201703' },
        { menu:'분양상태', content:'차주 매매' },
        { menu:'연식', content:'2007' },
        { menu:'품목', content:'상온 / 공산품' },
        { menu:'출근지', content:'양주복지리 (bgf 리테일 양주센터)' },
        { menu:'배송지', content:'의정부 - 서울 관내' },
        { menu:'근무시간', content:'08:00 - 16:00' },
        { menu:'휴무', content:'월 4회(일요일)' },
        { menu:'월급료', content:'320만원 + 유가 보조금 (월 15만원)' },
        { menu:'제공사항', content:'유류대, 주차료, 통행료' },
        { menu:'지입료', content:'21만원' },
        { menu:'보험료', content:'서울화물공제조합' },
        { menu:'할부금', content:'무' },
        { menu:'차량인수금', content:'1,800만원' },
        { menu:'연령 / 기타', content:'무' },
        { menu:'시간', content:'주간' },

    ]
    
    render() {
        return (
            <div className="In_Container">
                <div className="In_TitleBox">
                    <div className="In_Title">
                        당사차량 [1톤]
                    </div>
                </div>
                <div className="In_SubTitle">
                    <div className="In_SubText">
                        · bgf리테일cu편의점 상온배송차량
                    </div>
                    
                </div>
                <div className="In_Contents">
                    {this.list.map((item, index) => {
                        return(
                            <div className="In_Box" kye={index}>
                                <div className="In_Menu">{item.menu}</div>
                                <div className="In_Content">{item.content}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="BottomText">
                    매매 문의 : 1599 - 9964
                </div>
                <div className="Go_Button">
                        <NavLink to="/Vehicle">
                            목록으로
                        </NavLink>
                    </div>
            </div>
        );
    }
}

export default InVehicle;