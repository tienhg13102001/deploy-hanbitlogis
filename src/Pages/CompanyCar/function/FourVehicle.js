import React, { Component } from "react";
import "./style/ThreeVehicle.scss";
import { data3 } from "./BoardDb";
import noicon from "../../../_asset/image/vehicle/no-writing-icon.png";
import { Pagination } from "../../../Common/Pagination/Pagination";
class FourVehcle extends Component {
  state = {
    currentPage: 0,
    cardsPerPage: 7,
    currentPageM: 0,
    cardsPerPageM: 6,
    list: [],

    // cardsperpage -> 보여주고 싶은 박스 개수
  };
  onPageNumberClicked = (newPage) => (event) => {
    // console.log(newPage);
    this.handlePageNumberClicked(newPage);
  };
  onPreviousPageClicked = (newPage) => (event) => {
    // console.log(newPage);
    this.handlePreviousPageClicked(newPage);
  };
  onNextPageClicked = (newPage) => (event) => {
    // console.log(newPage);
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
    let getData = data3;
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
  render() {
    return (
      <div className="Vehicle_Container">
        <div className="Vehicle_TitleBox">
          <div className="Vehicle_Title">당사차량 [5톤]</div>
          <div className="Vehicle_TopLine">
            <div className="Top_Line_1">번호</div>
            <div className="Top_Line_2">종류</div>
            <div className="Top_Line_3">내용</div>
            <div className="Top_Line_4">작성날</div>
          </div>
          <div className="Vehicle_Board1">
            <img src={noicon} alt="아이콘"></img>
            <div className="Vehicle_No">게시물이 없습니다.</div>
          </div>
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          cardsPerPage={this.state.cardsPerPage}
          itemCount={data3.length}
          onPageNumberClicked={this.onPageNumberClicked}
          onPreviousPageClicked={this.onPreviousPageClicked}
          onNextPageClicked={this.onNextPageClicked}
        />
      </div>
    );
  }
}

export default FourVehcle;
