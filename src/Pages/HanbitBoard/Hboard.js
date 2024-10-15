import React, { Component } from "react";
import { data } from "./HanDb";
import BoardText from "./function/BoardText";

import { Pagination } from "../../Common/Pagination/Pagination";
import "./style/Hboard.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Table } from "antd";
import NoticeService from "../../Modules/API/Notice.service";

const columns = [
  {
    title: "번호",
    dataIndex: "index",
    key: 1,
    width: "30%",
  },
  {
    title: "종류",
    dataIndex: "type",
    key: 2,
    width: "30%",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: 3,
    width: "15%",
  },
  {
    title: "작성일",
    key: 4,
    dataIndex: "date",
    width: "15%",
  },
];
class Hboard extends Component {
  state = {
    currentPage: 0,
    cardsPerPage: 7,
    currentPageM: 0,
    cardsPerPageM: 6,
    list: [],
    dataTable: []
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
    let getData = data;
    let startIndex = this.state.currentPage * this.state.cardsPerPage;
    let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;

    return getData.slice(startIndex, endIndex);
  };

  componentDidMount = () => {
    this.getAllList();
    this.getNotices()
  };
  getAllList = async () => {
    const rID = "hanbit_notice";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
        console.log(response)
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

          this.setState({
            ...this.state,
            list: response.data.data.rows,
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };
  getNotices = async () => {
    const notice = await NoticeService.getNotices()
    const mappedData = notice.data.items.map((item, index) => {
      let newRow = {}
      newRow.index = index + 1
      newRow.type = item.fields.detail.nodeType
      newRow.title = item.fields.title
      newRow.date = item.fields.date
      return newRow
    })
    this.setState({
      ...this.state,
      dataTable: mappedData,
    })
  }

  renderList = () => {
    const list = this.state.list;
    let startIndex = this.state.currentPage * this.state.cardsPerPage;
    let endIndex = (this.state.cardsPerPage + 1) * this.state.cardsPerPage;

    return list.slice(startIndex, endIndex);
  };

  render() {
    const { list, dataTable } = this.state;
    return (
      <div className="Hboard_Contaier">
        <Table
          className="custom-table"
          columns={columns}
          dataSource={dataTable}
          pagination={false}
        />
        {/* <div className="Hboard_TopLine">
          <div className="Hboard_Number">번호</div>
          <div className="Hboard_Title">제목</div>
          <div className="Hboard_People">작성자</div>
          <div className="Hboard_Date">작성날</div>
        </div>
        <div>
          {this.state.list.map((item, index) => {
            return (
              <NavLink
                className="Link"
                data={item}
                to={`/HanbitBoard/InBoard?name=${item.name}`}
              >
                <BoardText
                  key={index}
                  number={this.state.list.length - index}
                  date={item.simple_resources.createdAt}

                  title={item.resources[0].data[0]}
                  people={item.simple_resources.name}
                />
              </NavLink>
            );
          })}
        </div> */}
        <Pagination
          currentPage={this.state.currentPage}
          cardsPerPage={this.state.cardsPerPage}
          itemCount={data.length}
          onPageNumberClicked={this.onPageNumberClicked}
          onPreviousPageClicked={this.onPreviousPageClicked}
          onNextPageClicked={this.onNextPageClicked}
        />
      </div>
    );
  }
}

export default Hboard;
