import React, { Component } from "react";
import HboardQnaList from "../HboardQnaList";
import "./style/TitleBox.scss";

class TItleBox extends Component {
  render() {
    return (
      <div className="Hanbit_Contents_Area">
        <div className="Title_One">자유게시판</div>
        <div>
          <HboardQnaList {...this.props}></HboardQnaList>
        </div>
      </div>
    );
  }
}

export default TItleBox;
