import React, { Component } from "react";

import "./style/TestGuideOne.scss";

class TestGuideOne extends Component {
  render() {
    return (
      <div className="TestGuideOneContainer">
        <div className="Test_TitleBox">
          <div className="Test_Title">
            화물운송사 <span>자격시험</span>
          </div>
          <div className="Test_Text">
            효율적인 물류서비스를 제공하는 종합 물류회사
          </div>
          <div className="Test_Example">
            사업용 화물자동차를 운전하고자 하는 사람은 새로이 개정/공포된 화물
            자동차 운수 사업법령에 따라 화물운송종사 자격증을
            <br />
            취득하여야 사업용 화물자동차를 운전할 수 있습니다.
            <br />
            <br />
            <span>
              (화물운수사업법 : 04.01.20. 공포, 시행령 시행규칙 : 04.04.21.
              공포)
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TestGuideOne;
