import React, { Component } from "react";

import "./style/OperationProsAndCons.scss";
import icon from "../../../_asset/image/locationInfo/information-icon-4.png";

class OperationProsAndCons extends Component {
  list = [
    {
      two: "운전자에 대한 통제력, 관리력의 범위가 높다.",
      three: "차량구입 및 감가상각비, 유지관리비가 전혀 없다.",
    },
    {
      two: "운전자의 충성도가 높다.",
      three: "차량 및 기사에 대한 별도의 관리 인력이 필요 없다.",
    },
    { two: "-", three: "차량의 사고시 고객사의 책임이 전혀 없다." },
    {
      one: "장점",
      two: "-",
      three:
        "운전자는 고객사의 직원이 아니므로 급여인상, 퇴직금 (누진) 등 각종 보상 문제에 대한 부담이 전혀 없다.",
    },
    {
      two: "-",
      three:
        "운전자는 수·배송 등의 물류업무에 경험이 있거나 교육 훈련을 필한 후 배치되므로 수·배송 시간의 단축, 신속한 업무처리능력 등 물류업무 개선에 기여한다.",
    },
    {
      two: "-",
      three:
        "운전자는 운송용역계약 등의 계약에 의거 법적으로 신분을 보장 받는 한편 의무를 부담하므로 고객사의 통제, 관리가 쉽다.",
    },
    {
      two: "차량 구입 가격, 유지 관리비, 감가상각비 등 고정 비용이 많이 든다.",
      three: "운전 기사에 대한 통제나 관리력이 약화될 수 있다.",
    },
    {
      two:
        "차량관리 전반에 걸쳐 별도의 인력이 필요하다. (관리 및 경비요원, 배차요원 등)",
      three:
        "운전자가 처음 업무에 적응하기 위한 별도의 교육과 시간이 필요하다.",
    },
    {
      one: "단점",
      two: "차량의 사고 시 별도의 비용 지출이 불가피하다.",
      three: "운전 기사의 소속감 부족으로 회사에 대한 충성심이 약할 수 있다.",
    },
    {
      two:
        "운송 품목의 분실, 파손 등의 사유로 손실 발생 시 배상 책임에 대한 사후 조치가 어렵다.",
      three: "-",
    },
    {
      two:
        "차량 운전자는 근로기준법 등의 법률에 의거 신분 보장을 받으므로 급여 인상, 퇴직금 (누진) 등 직원 보상 문제가 따른다.",
      three: "-",
    },
  ];
  render() {
    return (
      <div className="ProsAndConsContainer">
        <div className="Pros_TitleBox">
          <div className="Pros_icon_area">
            <img className="Pros_Icon" src={icon} alt="아이콘"></img>
          </div>
          <div className="Pros_Title">장단점 분석</div>
        </div>
        <div className="Pros_Chart">
          <div className="Pros_Type">
            <div className="Pros_Type_One">구분</div>
            <div className="Pros_Type_Two">기업체 운영</div>
            <div className="Pros_Type_Three">차량 관리사</div>
          </div>
          {this.list.map((item, index) => {
            return (
              <div className="Pros_ChatBox" key={index}>
                <div className="Pros_One">{item.one}</div>
                <div className="Pros_Two">{item.two}</div>
                <div className="Pros_Three">{item.three}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OperationProsAndCons;
