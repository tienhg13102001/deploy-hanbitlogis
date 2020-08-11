import React, { Component } from "react";
import "./style/CallingCard.scss";

class CallingCard extends Component {
  render() {
    return (
      <div className="CallingCard_contaier">
        <div className="Calling_titlebox">
          <span>명함</span> 신청
        </div>
        <div className="Calling_subtext">
          명함 관리를 위한 서비스 입니다. 쉽게 온라인
          <br />
          으로 요청하여 정해진 규격과 포맷으로 명함 <br />
          신청이 가능하고 주문 확인이 가능합니다.
        </div>
        <div className="Calling_Linkimage"></div>
      </div>
    );
  }
}

export default CallingCard;
