import React, { Component } from "react";

import "./style/AnalysisType.scss";
import "./style/AnalysisChart.scss";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

class AnalysisType extends Component {
  list1 = [
    {
      text: "DRY (건조화물)",
      text2: "전자제품, 의약품 일부, 플라스틱, 목재류",
      text3: "카고, 탑차, 윙바디 등",
    },
    {
      text: "WET (습기화물)",
      text2:
        "유제품, 의약품, 냉동, 냉동식품, 채소, 과일 등 일정 온도 유지가 필요한 제품",
      text3: "냉동 탑차",
    },
    {
      text: "특수보존화물",
      text2: "화학물질, 의류, 유리 제품 등",
      text3: "해당 규모 특장차",
    },
  ];

  list2 = [
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

  list3 = [
    {
      text: "자가용 차량",
      text2:
        "개인이나 법인에 소속된 녹색넘버 차량으로, 허가된 범위내의 물품만 배송 (타 물품 배송불허)",
    },
    {
      text: "영업용 차량",
      text2:
        "운송 사업자 등록을 필한 운수 회사 차량을 개인이 구매하여 운송을 담당하는 차량",
    },
  ];

  list4 = [
    {
      text: "직영 차량",
      text2:
        "화주인 업체에서 차를 직접 구입해 운전기사를 채용하여 관리하는 차량",
    },
    {
      text: "지입 차량",
      text2:
        "운송회사 명의로 되어 있는 고객업체 (화주) 에게 계약기간 동안 투입되는 차량 (회사직영차, 개인위탁차의 형태)",
    },
    { text: "용차", text2: "필요시에 따라 그때 그때 쓰여지는 영업용 차량" },
  ];

  render() {
    return (
      <div className="Analysis_Container">
        <div className="Type_Container">
          <div className="Type_TextBox">
            <div className="Type_Text">Car type</div>
            <div className="Type_Title">
              지입 차량의 <span>종류</span>
            </div>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="Chart_TitleBox">
                <div className="Chart_Title">적재 화물에 따른 분류</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {/* <div className="Chart"> */}
              <div className="Chart_Box">
                <div className="TypeBox">
                  <div className="Type">화물 / 구분</div>
                  <div className="Type">직영</div>
                  <div className="Type">공급차량</div>
                </div>
                {this.list1.map((item, index) => {
                  return (
                    <div className="Text_List">
                      <div className="One">{item.text}</div>
                      <div className="One">{item.text2}</div>
                      <div className="One">{item.text3}</div>
                    </div>
                  );
                })}
              </div>
              {/* </div> */}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="Chart_TitleBox">
                <div className="Chart_Title">형태의 따른 분류</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="Chart_Box">
                <div className="Chart">
                  <div className="Chart_Type">
                    <div className="Type_One">차량 형태</div>
                    <div className="Type_Two">설명</div>
                  </div>
                  <div className="Chart_map_text_box">
                    {this.list2.map((item, index) => {
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="Chart_TitleBox">
                <div className="Chart_Title">용도의 따른 분류</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="Chart_Box">
                <div className="Chart">
                  <div className="Chart_Type">
                    <div className="Type_One">차량 형태</div>
                    <div className="Type_Two">설명</div>
                  </div>
                  <div className="Chart_map_text_box">
                    {this.list3.map((item, index) => {
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="Chart_TitleBox">
                <div className="Chart_Title">운영 주체에 따른 분류</div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="Chart_Box">
                <div className="Chart">
                  <div className="Chart_Type">
                    <div className="Type_One">차량 형태</div>
                    <div className="Type_Two">설명</div>
                  </div>
                  <div className="Chart_map_text_box">
                    {this.list4.map((item, index) => {
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
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default AnalysisType;
