import React, { Component } from "react";
import { data } from "./HanDb";
import QnaText from "./function/QnaText";
// import { Pagination } from "antd";
import { Pagination } from "../../Common/Pagination/Pagination";
import "./style/Hboard.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { findByLabelText } from "@testing-library/dom";
import moment from "moment";
class HboardQnaList extends Component {
  state = {
    currentPage: 0,
    cardsPerPage: 10,
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
    let getData = [...this.state.list];
    console.log("getdata : ", getData);
    let startIndex = this.state.currentPage * this.state.cardsPerPage;
    let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;
    console.log("return data : ", getData.slice(startIndex, endIndex));
    return getData.slice(startIndex, endIndex);
  };

  componentDidMount = () => {
    this.getAllList();
  };
  getAllList = async () => {
    const rID = "hanbit_qna";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.createdAt);
            item.simple_resources.createdAt = `${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`;
            return item;
          });

          this.setState(
            {
              ...this.state,
              list: response.data.data.rows,
            },
            () => console.log(this.state.list)
          );
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };

  // renderList = () => {
  //   const list = this.state.list;
  //   let startIndex = this.state.currentPage * this.state.cardsPerPage;
  //   let endIndex = (this.state.cardsPerPage + 1) * this.state.cardsPerPage;

  //   return list.slice(startIndex, endIndex);
  // };

  render() {
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(nowTime);
    // 출력 결과: 2020-08-23 12:54:30
    return (
      <div className="Hboard_Contaier">
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <NavLink
            className="Mobile_link"
            to={`${this.props.match.path}/WriteBoard`}
          >
            <button
              type="button"
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                // borderRadius: "4px",
                padding: "6px 10px",
              }}
            >
              게시글 작성
            </button>
          </NavLink>
        </div>

        <div className="Hboard_TopLine">
          <div className="Hboard_Number">번호</div>
          <div className="Hboard_Title">제목</div>
          <div className="Hboard_People">작성자</div>
          <div className="Hboard_CreatedDate">최초 작성일</div>
          <div className="Hboard_LastDate">마지막 수정일시</div>
        </div>
        <div>
          {this.filterData().map((item, index) => {
            console.log("test", item);
            return (
              <NavLink
                className="Link"
                data={item}
                to={`/HanbitQna/InBoard?name=${item.name}`}
              >
                <QnaText
                  key={index}
                  number={this.state.list.length - index}
                  createdDate={moment(item.simple_resources.createdAt).format(
                    "YYYY-M-D"
                  )}
                  date={moment(item.lastUpdateDate).format("YYYY-M-D HH:MM:SS")}
                  title={item.resources[0].data[0]}
                  people={item.simple_resources.uploaderName}
                  reply={item.simple_resources.replyAt}
                />
              </NavLink>
            );
          })}
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          cardsPerPage={this.state.cardsPerPage}
          itemCount={data.length - 1}
          onPageNumberClicked={this.onPageNumberClicked}
          onPreviousPageClicked={this.onPreviousPageClicked}
          onNextPageClicked={this.onNextPageClicked}
        />
      </div>
    );
  }
}

export default HboardQnaList;
