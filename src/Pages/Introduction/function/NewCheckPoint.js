import React, { Component } from "react";
import "./style/NewCheckPoint.scss";
import pointIcon04 from "../../../_asset/image/Introduction/point-icon-4.png";

class NewCheckPoint extends Component {
  render() {
    return (
      <div className="Check_Point_Container">
        <div className="New_Check_Title">Check point</div>
        <div className="New_Check_img_Wrap">
          <img src={pointIcon04} alt="Check point" />
        </div>
        <div className="Point_Text_Box">
          <div className="Point_Text_title">Point</div>
          <div className="Point_Text_text">
            전 배송처의 지리 (위치)를 확보합니다.
          </div>
        </div>
      </div>
    );
  }
}

export default NewCheckPoint;
