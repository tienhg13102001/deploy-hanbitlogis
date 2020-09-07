import React, { Component } from "react";
import "./style/AnalysisChart.scss";

class AnalysisChart extends Component {
  list = [
    { text: "카고", text2: "전자제품, 의약품 일부, 플라스틱, 목재류" },
    {
      text: "내장탑",
      text2:
        "유제품, 의약품, 냉동, 냉장식품, 채소, 과일 등 일정 온도 유지가 필요한 제품",
    },
    { text: "냉장탑", text2: "화학물질, 의류, 유리, 제품 등" },
    {
      text: "윙바디",
      text2:
        "차량 화물칸이 양 쪽으로 개폐 가능하여 지게차를 이용 상, 하차 작업이 가능하며, 보통 5톤 이상 화물차 물류센터 ~센터, 물류창고 ~중간 집하장에 주로 이용",
    },
    {
      text: "리프트탑",
      text2:
        "차종은 내장탑과 카고와 동일하며 단지 무거운 단일 제품의 상, 하차에 사용하기 위해 부가적으로 탑재한 화물차",
    },
    {
      text: "탱크로리",
      text2:
        "유조차, LPG 운반차, 화학물 운반차 등 유류나 가스 등 특수 화물 운반에 사용되는 특수목적차량",
    },
    {
      text: "VAN",
      text2:
        "승합체와 승용차에서 뒷칸 부분을 짐칸 전용으로 만든 차량으로 현금 수송, 유가증권수송, 택배, 퀵서비스 의학품 배송 등에 주로 사용",
    },
  ];
  render() {
    return (
      <div className="Chart_Container">
        <div className="Chart_TitleBox">
          <div className="Chart_Title_title">· 차량 형태에 따른 분류</div>
        </div>
        <div className="Chart">
          <div className="Chart_Type">
            <div className="Type_One">차량 형태</div>
            <div className="Type_Two">설명</div>
          </div>
          <div className="Chart_map_text_box">
            {this.list.map((item, index) => {
              return (
                <div className="Text_List" key={index}>
                  <div className="One">{item.text}</div>
                  <div className="Two">{item.text2}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AnalysisChart;
