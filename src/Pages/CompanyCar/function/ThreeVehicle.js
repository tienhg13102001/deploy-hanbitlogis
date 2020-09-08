import React, { Component } from "react";
import "./style/ThreeVehicle.scss";
import BoardButton from "../../../Common/BoardButton";

import noicon from "../../../_asset/image/vehicle/no-writing-icon.png";

class ThreeVehicle extends Component {
  render() {
    return (
      <div className="Vehicle_Container">
        <div className="Vehicle_TitleBox">
          <div className="Vehicle_Title">당사차량 [4.5톤]</div>
          <div className="Vehicle_TopLine">
            <div className="Top_Line_1">번호</div>
            <div className="Top_Line_2">작성날</div>
            <div className="Top_Line_3">내용</div>
            <div className="Top_Line_4">종류</div>
          </div>
          <div className="Vehicle_Board1">
            <img src={noicon} alt="아이콘"></img>
            <div className="Vehicle_No">게시물이 없습니다.</div>
          </div>
        </div>
        <BoardButton></BoardButton>
      </div>
    );
  }
}

export default ThreeVehicle;
