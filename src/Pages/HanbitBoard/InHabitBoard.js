import React, { Component } from "react";
import HanbitBox from "../../Components/MenuBox/HanbitBox";
import BoardBanner from "./function/BoardBanner";
import InHanbit from "./function/InHanbit";
import "./style/InHanbitBoard.scss";

class InHanbitBoard extends Component {
  render() {
    return (
      <div className="InHanbit_Contatiner">
        <div className="TopBanner">
          <BoardBanner></BoardBanner>
        </div>
        <div className="CeoContents">
          <HanbitBox></HanbitBox>
          <InHanbit></InHanbit>
        </div>
      </div>
    );
  }
}

export default InHanbitBoard;
