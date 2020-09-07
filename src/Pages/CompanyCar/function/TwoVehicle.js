import React, { Component } from "react";
import "./style/OneVehicle.scss";
import { data2 } from "./BoardDb";
import BoardButton from "../../../Common/BoardButton";

class TwoVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      visible: 7,
    };
  }

  loadmore() {
    this.setState((old) => {
      return { visible: old.visible + 1 };
    });
  }
  render() {
    return (
      <div className="Vehicle_Container">
        <div className="Vehicle_TitleBox">
          <div className="Vehicle_Title">2.5톤</div>
          <div className="Vehicle_TopLine">
            <div className="Top_Line_1">번호</div>
            <div className="Top_Line_2">작성날</div>
            <div className="Top_Line_3">내용</div>
            <div className="Top_Line_4">종류</div>
          </div>
          <div className="Vehicle_Board">
            {data2.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="Board_List" key={index}>
                  <div className="List_One">{item.number}</div>
                  <div className="List_Two">{item.date}</div>
                  <div className="List_Three">{item.content}</div>
                  <div className="List_Four">{item.kind}</div>
                </div>
              );
            })}
          </div>
        </div>
        <BoardButton></BoardButton>
      </div>
    );
  }
}

export default TwoVehicle;
