import React, { Component } from "react";
import "./style/OneVehicle.scss";
import { data2 } from "./BoardDb";
import { Pagination } from "../../../Common/Pagination/Pagination";
import { Link } from "react-router-dom";

class TwoVehicle extends Component {
  state = {
    currentPage: 0,
    cardsPerPage: 7,
    currentPageM: 0,
    cardsPerPageM: 6,
    list: [],

    // cardsperpage -> 보여주고 싶은 박스 개수
  };
  onPageNumberClicked = (newPage) => (event) => {
    this.handlePageNumberClicked(newPage);
  };
  onPreviousPageClicked = (newPage) => (event) => {
    this.handlePreviousPageClicked(newPage);
  };
  onNextPageClicked = (newPage) => (event) => {
    this.handleNextPageClicked(newPage);
  };
  handlePageNumberClicked = (newPage) => {
    // console.log("onPageNumberClicked", newPage);
    this.setState({ currentPage: newPage });
  };
  handlePreviousPageClicked = (newPage) => {
    // console.log("onPreviousPageClicked", newPage);
    this.setState({ currentPage: newPage });
  };
  handleNextPageClicked = (newPage) => {
    //console.log("onNextPageClicked", newPage);
    this.setState({ currentPage: newPage });
  };
  filterData = () => {
    let getData = data2;
    let startIndex = this.state.currentPage * this.state.cardsPerPage;
    let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;

    return getData.slice(startIndex, endIndex);
  };
  renderList = () => {
    const list = this.state.list;
    let startIndex = this.state.currentPage * this.state.cardsPerPage;
    let endIndex = (this.state.cardsPerPage + 1) * this.state.cardsPerPage;

    return list.slice(startIndex, endIndex);
  };

  loadmore() {
    this.setState((old) => {
      return { visible: old.visible + 1 };
    });
  }
  render() {
    return (
      <div className="Vehicle_Container">
        <div className="Vehicle_TitleBox">
          <div className="Vehicle_Title">당사차량 [2.5톤]</div>
          <div className="Vehicle_TopLine">
            <div className="Top_Line_1">번호</div>
            <div className="Top_Line_2">종류</div>
            <div className="Top_Line_3">내용</div>
            <div className="Top_Line_4">작성날</div>
          </div>
          <div className="Vehicle_Board">
            {data2.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="Board_List" key={index}>
                  <Link className="List_One" to="/InVehicleTwo/twovehicle">
                    {item.number}
                  </Link>
                  <Link className="List_Two" to="/InVehicleTwo/twovehicle">
                    {item.kind}
                  </Link>
                  <Link className="List_Three" to="/InVehicleTwo/twovehicle">
                    {item.content}
                  </Link>
                  <Link className="List_Four" to="/InVehicleTwo/twovehicle">
                    {item.date}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          cardsPerPage={this.state.cardsPerPage}
          itemCount={data2.length}
          onPageNumberClicked={this.onPageNumberClicked}
          onPreviousPageClicked={this.onPreviousPageClicked}
          onNextPageClicked={this.onNextPageClicked}
        />
      </div>
    );
  }
}

export default TwoVehicle;
