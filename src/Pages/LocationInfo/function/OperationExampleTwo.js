import React, { Component } from "react";
import "./style/OperationEampleTwo.scss";

class OperationExample extends Component {
  list = [
    {
      text: "인건비",
      text2: "1,560,00 원",
      text3: "1,381,250 원",
      text4: "기본금, 상여금, 퇴직적립금, 월차수당포함",
    },
    {
      text: "복리후생비",
      text2: "240,200 원",
      text3: "200,175 원",
      text4: "고용, 의료, 국민, 산재보험",
    },
    {
      text: "보험료",
      text2: "209,600 원",
      text3: "146,200 원",
      text4: "직영 : 업무용 (책임, 종합)\n 위탁 : 영업용 (책임, 종합)",
    },
    {
      text: "공과금",
      text2: "18,000 원",
      text3: "8,500 원",
      text4:
        "자동차, 환경개선부담금, 검사비, 면허세\n 직영 (업무용), 위탁 (영업용)",
    },
    {
      text: "정기보수비",
      text2: "196,000 원",
      text3: "196,000 원",
      text4: "전국 동종 업계 비교",
    },
    {
      text: "감가상각·금융비",
      text2: "768,500 원",
      text3: "768,500 원",
      text4: "차량가기준",
    },
    { text: "식대", text2: "100,000 원", text3: "-", text4: "-" },
    {
      text: "용역관리비",
      text2: "-",
      text3: "100,000 원",
      text4: "전국 동종 업계 비교",
    },
    { text: "합계", text2: "3,391,225 원", text3: "2,800,125 원", text4: "-" },
  ];
  render() {
    return (
      <div className="Chart_Container">
        <div className="Chart_TitleBox">
          <div className="Example_5t">· 5t 일반탑 기준 (견본)</div>
          <div className="Chart_Box2">
            <div className="Chart_Type2">
              <div className="Type_Text">항목</div>
              <div className="Type_Text2">직영</div>
              <div className="Type_Text3">위탁</div>
              <div className="Type_Text4">비고</div>
            </div>
            <div className="Chart_ListBox2">
              {this.list.map((item, index) => {
                return (
                  <div className="Text_List2" key={index}>
                    <div className="One_Text2">{item.text}</div>
                    <div className="Two_Text2">{item.text2}</div>
                    <div className="Three_Text2">{item.text3}</div>
                    <div className="Three_Text3">
                      {item.text4.split("\n").map((e) => (
                        <span>
                          {e}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Chart_TimeBox">
              <div className="TimeBox_wrap">
                <div className="Time">
                  <span>근무시간</span> 08:30 - 19:00 기준 (회사 여건에 따라
                  조정가능)
                </div>
                <div className="Holiday">
                  <span>휴무</span> 일요일, 국경일 휴무 (회사 여건에 따라
                  조정가능)
                </div>
              </div>
              <div className="TimeBox_wrap_two">
                <div className="Distance">
                  <span>운행거리</span> 100km 기준 (운행 거리에 따라 견적조건
                  조정)
                </div>
                <div className="Exception">*유류, 도로비 비교표 내용 제외</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OperationExample;
