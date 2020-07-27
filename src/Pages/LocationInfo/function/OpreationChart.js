import React, { Component } from "react";
import "./style/OperationChart.scss";
import icon from "../../../_asset/image/locationInfo/information-icon-1.png";

class OpreationChart extends Component {
  list = [
    {
      text: "차량 종류",
      text2: "차량구입 경비 과다 소요 (경제성 없음)",
      text3: "차량 용도에 맞게 선택 가능",
    },
    {
      text: "노조결성여부",
      text2: "쟁의 가능성 있음",
      text3: "쟁의 가능성 없음 (영업 손실 없음)",
    },
    {
      text: "차량사고 시  대책",
      text2: "처리 시간 과다 - 사고경비 (과대소요)",
      text3: "전문 요원 가동 - 신속처리 (경비 최소화)",
    },
    {
      text: "차량 운영 실태",
      text2: "불필요 경비 발생",
      text3: "전문회사 - 원가절감",
    },
    {
      text: "기사 결근시 충원방법",
      text2: "충원 불가 (추가용역 소요발생)",
      text3: "전문 회사 충원",
    },
    {
      text: "각종 훈련시 충원방법",
      text2: "충원 불가 (추가용역 소요발생)",
      text3: "전문 회사 충원",
    },
    {
      text: "면허 정지시 충원방법",
      text2: "충원 불가 (추가용역 소요발생)",
      text3: "전문 회사 충원",
    },
    {
      text: "차량 사고시 충원방법",
      text2: "충원 불가 (추가용역 소요발생)",
      text3: "전문 회사 충원",
    },
    { text: "근무장소", text2: "불가", text3: "근무장소 변동가능" },
    {
      text: "주차장 / 차고지",
      text2: "추가용역비 소요발생",
      text3: "자체주차장 및 차고지",
    },
  ];
  render() {
    return (
      <div className="Chart_Container">
        <div className="analysis_chart_box_one">
          <div className="Chart_Title_title">차량운영분석</div>
          <div className="Chart_analysis_textbox">
            <div className="Chart_icon_area">
              <img src={icon} alt="아이콘"></img>
            </div>
            <div className="Chart_Text_Area">차량 및 인력 관리 분석</div>
          </div>
          <div className="Chart_Box">
            <div className="Chart_Type">
              <div className="Type_Text_One">구분</div>
              <div className="Type_Text_Two">기업체 운영</div>
              <div className="Type_Text_Three">차량 관리사</div>
            </div>
            <div className="Chart_ListBox">
              {this.list.map((item, index) => {
                return (
                  <div className="Text_List" key={index}>
                    <div className="analysis_chart_text_one">{item.text}</div>
                    <div className="analysis_chart_text_two">{item.text2}</div>
                    <div className="analysis_chart_text_three">
                      {item.text3}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpreationChart;
