import React, { Component } from "react";

import "./style/InVehicle.scss";
import BoardPreview from "../../../Common/BoardPrewView";
import { NavLink } from "react-router-dom";

class InVehicle extends Component {
  list = [
    { menu: "급수", content: "저온 2편 냉동 탑차" },
    { menu: "매물번호", content: "20170324" },
    { menu: "분양상태", content: "차주 매매" },
    { menu: "연식", content: "2012" },
    { menu: "품목", content: "냉동식품" },
    { menu: "출근지", content: "경기도 일산 동봉동" },
    { menu: "배송지", content: "은평구" },
    { menu: "근무시간", content: "06:00 - 11:00" },
    { menu: "휴무", content: "월 4회(예비기사있음)" },
    { menu: "월급료", content: "315만원 + 유가 보조금 + 지원특배" },
    { menu: "제공사항", content: "유류대, 주차료, 통행료" },
    { menu: "지입료", content: "21만원" },
    { menu: "보험료", content: "서울화물공제조합" },
    { menu: "할부금", content: "무" },
    { menu: "차량인수금", content: "차주와 통화 후 결정" },
    { menu: "연령 / 기타", content: "50세 이하" },
    { menu: "시간", content: "주간" },
  ];

  render() {
    return (
      <div className="In_Container">
        <div className="In_TitleBox">
          <div className="In_Title">2.5톤</div>
        </div>
        <div className="In_SubTitle">
          <div className="In_SubText">· 리테일cu편의점 냉동 차량</div>
          <NavLink to="/Vehicle/twovehicle">
            <div className="Go_Button">목록으로</div>
          </NavLink>
        </div>
        <div className="In_Contents">
          {this.list.map((item, index) => {
            return (
              <div className="In_Box" kye={index}>
                <div className="In_Menu">{item.menu}</div>
                <div className="In_Content">{item.content}</div>
              </div>
            );
          })}
        </div>
        <div className="BottomText">매매 문의 : 1599 - 9964</div>
        <BoardPreview></BoardPreview>
      </div>
    );
  }
}

export default InVehicle;
