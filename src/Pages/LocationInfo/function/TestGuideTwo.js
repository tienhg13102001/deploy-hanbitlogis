import React, { Component } from "react";

import "./style/TestGuideTwo.scss";
import { Divider } from "antd";
import image from "../../../_asset/image/locationInfo/informaion-img.png";

class TestGuideTwo extends Component {
  render() {
    return (
      <div className="TestInfoContainer">
        <div className="TestInfo_TitleBox">
          <div className="TestInfo_Title">
            자격 <span>시험 정보</span>
          </div>
        </div>
        <div className="TestInfo_Banner">
          <img src={image} className="BannerImg" alt="시험정보"></img>
        </div>
        <Divider />
        <div className="Test_list_divider_box">
          <div className="Test_list_box">
            <div className="Test_list_number">01</div>
            <div className="Test_lsit_Name">화물운송종사 자격시험이란</div>
          </div>
          <div className="Text_Content">
            <div className="Content_One">
              · 화물자동차 운전자의 전문성 확보를 통해 운송서비스 개선, 안전운행
              및 화물운송업의 건전한 육성을 도모하기 위해 4.7.21부터
              교통안전공단이 건설교통부로부터 사업을 위탁받아 화물운송종사
              자격시험을 시행.
            </div>
            <div className="Content_One">
              · 고객사 요구에 미흡할시 기업 이미지 및 신뢰도 상실
            </div>
          </div>
        </div>
        <Divider />
        <div className="Test_list_divider_box">
          <div className="Test_list_box">
            <div className="Test_list_number">02</div>
            <div className="Test_lsit_Name">화물운송종사자격 취득 대상자</div>
          </div>
          <div className="Text_Content">
            <div className="Content_One">
              · 사업용(영업용) 화물자동차(용달·개별·일반화물) 운전자는 반드시
              화물운송종사자격을 취득하신 후 운전하여야 합니다.
            </div>
            <div className="Content_Two">※ 사업용(영업용) 화물자동차란?</div>
            <div className="Content_Three">
              1. 타인의 운송수요에 부응하여 운송서비스를 제공하고 그에 대한
              대가를 받는 “유상운송”을 목적으로 등록하는 화물자동차를 말함
            </div>
            <div className="Content_Three">
              2. 화물자동차에 사업용 노란색 차량번호판을 장착한 차량을 말함
            </div>
          </div>
        </div>
        <Divider />
        <div className="Test_list_divider_box">
          <div className="Test_list_box">
            <div className="Test_list_number">03</div>
            <div className="Test_lsit_Name">화물운송종사 자격시험 근거자료</div>
          </div>
          <div className="Text_Content">
            <div className="Content_One">
              · 화물자동차 운수사업법 제 9 조 (화물자동차운수사업의 운전업무
              종사자격) 제 1 항
            </div>
            <div className="Content_Three">
              - 화물운송종사 자격시험, 교육 및 자격증 교부 등 화물자동차
              운전자격 요건 명시
            </div>
            <div className="Content_One">
              ㆍ화물자동차 운수사업법 시행령 제 15조 (권한의 위탁) 제 3 항
            </div>
            <div className="Content_Three">
              - 화물운송종사 자격시험, 교육 및 자격증 교부 등 화물자동차
              운전자격 요건 명시
            </div>
            <div className="Content_One">
              ㆍ화물자동차 운수사업법 제 9 조 (화물자동차운수사업의 운전업무
              종사자격) 제 1 항
            </div>
            <div className="Content_Three">
              - 화물운송종사 자격시험, 교육 및 자격증 교부 등 화물자동차
              운전자격 요건 명시
            </div>
            <div className="Content_One">
              ㆍ화물자동차 운수사업법 시행령 제 18조 (화물자동차운전자의
              연령·운전경력 등의 요건) ~ 시행규칙 제 18조의 9 (화물운송
              종사자격증 등의 재교부)
            </div>
            <div className="Content_Three">
              - 화물운송자격시험의 실시ㆍ관리ㆍ교육 및 자격증 교부에 관한 사항을
              구체적으로 명시
            </div>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

export default TestGuideTwo;
