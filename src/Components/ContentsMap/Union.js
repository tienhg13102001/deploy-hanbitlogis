import React, { Component } from "react";
import "./style/Union.scss";

class Union extends Component {
  render() {
    return (
      <div className="UnionContainer">
        <div className="TextBox">
          <div className="Title_union">
            명함제작
            <br />
            신청
          </div>
          <div className="Text">명함제작이 필요할 땐</div>
        </div>
      </div>
    );
  }
}

export default Union;
