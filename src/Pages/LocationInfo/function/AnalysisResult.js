import React, { Component } from "react";
import ResultCard from "../../../Components/Cards/ResultCard";
import ResultCardTwo from "../../../Components/Cards/ResultCardTwo";
import ResultCardThree from "../../../Components/Cards/ResultCardThree";
import "./style/AnalysisResult.scss";

class AnalysisResult extends Component {
  list = [
    {
      title: "원가절감으로 기업 경쟁력 향상",
      number: "01",
      text: "· 초기 차량 구입시 자금 압박 해소 (제세금 및 공과금)",
      text2:
        "· 고정지출비절감, 감가상각비, 유지관리비 해소 (월정 지입료만 지출)",
      text3: "· 자연 및 주변 환경에 대한 책임 해소 (화물의 파손 및 도난)",
      text4: "· 차량 및 인적 사고에 대한 책임 해소",
    },
    {
      title: "인력관리 효율화로 신뢰성 강화",
      number: "02",
      text: "· 운전자에 대하여 급여인상, 퇴직금 (누진), 기타 후생복지비 절감",
      text2: "· 노사분규등 인력관리가 다소 용이함",
      text3: "· 정규근무시간 외에도 인력 활용도 용이 (상호간 협의하여)",
    },
    {
      title: "경쟁력 강화로 기업 이미지 향상",
      number: "03",
      text: "· 경험 있는 운전자를 채용하여 물류배송업무의 능률 향상",
      text2: "· 고객사 요구에 미흡할시 기업 이미지 및 신뢰도 상실",
    },
  ];
  renderPc() {
    return (
      <div className="Result_Container">
        <div className="Result_TextBox">
          <div className="Result_Text">The result of carrying</div>
          <div className="Result_Title">
            지입 차량의 <span>효과</span>
          </div>
        </div>
        <div className="Cards_area">
          <div className="Cards_wrap">
            <ResultCard />
          </div>
          <div className="Cards_wrap">
            <ResultCardTwo />
          </div>
          <div className="Cards_wrap">
            <ResultCardThree />
          </div>
        </div>
      </div>
    );
  }

  renderMobile() {
    return (
      <div className="Result_Container">
        <div className="Result_TextBox">
          <div className="Result_Text">The result of carrying</div>
          <div className="Result_Title">
            지입 차량의 <span>효과</span>
          </div>
        </div>
        <div className="Cards_area">
          <div className="Cards_wrap">
            <ResultCard />
          </div>
          <div className="Cards_wrap">
            <ResultCardTwo />
          </div>
          <div className="Cards_wrap">
            <ResultCardThree />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { isMobile } = this.props;
    return <>{isMobile ? this.renderMobile() : this.renderPc()}</>;
  }
}

export default AnalysisResult;
