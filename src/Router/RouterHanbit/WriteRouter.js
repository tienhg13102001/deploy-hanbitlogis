import React, { Component } from "react";

import BoardBanner from "../../Pages/HanbitBoard/function/BoardBanner";
import HanbitBox from "../../Components/MenuBox/HanbitBox";
import WriteHanbit from "../../Pages/HanbitBoard/WriteHanbit";

class WriteRouter extends Component {
  componentWillMount = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div className="Hanbit_Contatiner">
        <div className="TopBanner">
          <BoardBanner></BoardBanner>
        </div>
        <div>
          <HanbitBox {...this.props}></HanbitBox>
          <div className="Hanbit_Board_Area">
            <WriteHanbit {...this.props}></WriteHanbit>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteRouter;
