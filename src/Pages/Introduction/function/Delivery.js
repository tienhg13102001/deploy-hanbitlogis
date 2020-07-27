import React, { Component } from "react";
import "./style/Delivery.scss";
import icon01 from "../../../_asset/image/Introduction/point-icon-1.png";
import icon02 from "../../../_asset/image/Introduction/point-icon-2.png";
import icon03 from "../../../_asset/image/Introduction/point-icon-3.png";
import arrowicon from "../../../_asset/image/locationInfo/arrow-icon.png";
import { Steps, Divider } from "antd";

const { Step } = Steps;

class Delivery extends Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log("onChange:", current);
    this.setState({ current });
  };
  list = [
    {
      id: 0,
      principleNumber: "제 1 원칙",
      text: "배송도착시간 예고제를 실시합니다.",
    },
    {
      id: 1,
      principleNumber: "제 2 원칙",
      text: "각 배송원의 인성 및 service-mind 정기교육 (3개월 단위)",
    },
    {
      id: 2,
      principleNumber: "제 3 원칙",
      text: "배송 복장의 통일 (유니폼 및 모자 착용)",
    },
    {
      id: 3,
      principleNumber: "제 4 원칙",
      text: "차량의 청결 상태 점검 (월 1회)",
    },
    {
      id: 4,
      principleNumber: "제 5 원칙",
      text: "배송 일정 점검에 의한 기사 평가제 실시",
    },
    { id: 5, principleNumber: "제 6 원칙", text: "배송 도착시간 예고제 실시" },
    {
      id: 6,
      principleNumber: "제 7 원칙",
      text: "전 차량 Real-Time 상품 추적과 System 장비 구비 및 관찰",
    },
    {
      id: 7,
      principleNumber: "제 8 원칙",
      text: "투입 인원에 대한 밀착형 인원관리 (mind-upgrade)",
    },
    {
      id: 8,
      principleNumber: "제 9 원칙",
      text: "배송 차량 사고에 대비한 비상 연락체계 확립",
    },
  ];
  checklist = [
    {
      icon: icon01,
      title: "1 Point",
      text: "배송도착시간 예고제를\n 실시합니다.",
      arrow: arrowicon,
    },
    {
      icon: icon02,
      title: "2 Point",
      text: "차량의 청결 상태를\n 월 1회 점검합니다.",
      arrow: arrowicon,
    },
    {
      icon: icon03,
      title: "3 Point",
      text: "배송 도착시간\n 예고제를 실시합니다.",
      arrow: arrowicon,
    },
  ];
  followlist = [
    { text: "전 배송처의 지리 (위치) 확보" },
    { text: "점착 시간의 준수 여부 확인" },
    { text: "하차 시 배송원의 서비스 확인" },
    { text: "하차 시 상품의 보존 상태 확인" },
    { text: "고객의 요구에 대응하는 접객 태도 확인" },
    { text: "차량의 사양에 대한 만족도 확인" },
  ];
  render() {
    // const { current } = this.state;

    return (
      <div className="DeliContainer">
        <div className="Wrap_Line">
          <div className="Title">
            <span>경영</span> 방침
          </div>
          <div className="VisitText">
            글로벌 종합물류산업의 리더로서
            <br />
            한걸음 한걸음 고객의 행복을 채우는 발자취를
            <br />
            새롭게 만들어 가겠습니다.
          </div>
          <Divider />
          <div className="DeliTitle">
            <div className="Text">Delivery luck</div>
            <div className="Operation">운영 방침</div>
          </div>
          {/* <Steps current={current} onChange={this.onChange}>
                        <Step title="원칙 1" description="배송 도착시간 예고제 실시" />
                        <Step title="원칙 2" description="각 배송원의 인성 및 service-mind 정기교육 (3개월 단위)" />
                        <Step title="원칙 3" description="배송 복장의 통일 (유니폼 및 모자 착용)" />
                    </Steps> */}

          <Steps current={9} onChange={this.onChange} direction="vertical">
            {this.list.map((item, index) => {
              return (
                <Step
                  key={index}
                  title={item.principleNumber}
                  description={item.text}
                />
              );
            })}
          </Steps>
          <Divider />

          {/* <div className="Table">
                        <div className="Table_Box">
                            {this.list.map((item, index) => {
                                return (
                                    <div className="Table_Text" key={index}>{item.text}</div>
                                )
                            })}
                        </div>
                    </div> */}

          <div className="CheckPoint">
            <div className="Check_TitleBox">
              <div className="Check_Text">Check Points</div>
            </div>
            <div className="Check_List">
              {this.checklist.map((item, index) => {
                if (index === this.checklist.length - 1) {
                  return (
                    <>
                      <div className="Check_Box" key={index}>
                        <img
                          className="Check_Icon"
                          src={item.icon}
                          alt="아이콘"
                        ></img>
                        <div className="Check_Title">{item.title}</div>
                        <div className="Check_Text_map">
                          {item.text.split("\n").map((e) => (
                            <span>
                              {e}
                              <br />
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="Check_Box" key={index}>
                        <img
                          className="Check_Icon"
                          src={item.icon}
                          alt="아이콘"
                        ></img>
                        <div className="Check_Title">{item.title}</div>
                        <div className="Check_Text_map">
                          {item.text.split("\n").map((e) => (
                            <span>
                              {e}
                              <br />
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="check_arrow_map">
                        <img
                          className="arrow_map"
                          src={item.arrow}
                          alt="화살표 이미지"
                        ></img>
                      </div>
                    </>
                  );
                }
              })}
            </div>
            <Divider />
            <div className="DeliTitle">
              <div className="Text">Follow-up management</div>
              <div className="Operation">사후 관리</div>
            </div>
            <div className="Management">
              <div className="Table_Box">
                {this.followlist.map((item, index) => {
                  return (
                    <div className="Table_Text" key={index}>
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="CheckPoint">
                        <div className="Check_TitleBox">
                            <div className="Check_Point">
                                CheckPoint
                            </div>
                            <div className="Check_Icon">
                                <img src={icon} alt='아이콘'></img>
                            </div>
                            <div className="Check_Title">전 배송처의 지리 (위치) 를 확보합니다.</div>
                        </div>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Delivery;
