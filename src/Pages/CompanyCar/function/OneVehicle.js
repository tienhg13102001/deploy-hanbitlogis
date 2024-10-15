import React, { Component } from "react";
import "./style/OneVehicle.scss";
import { data, vehicleType } from "./BoardDb";
import { Link } from "react-router-dom";
import { Pagination } from "../../../Common/Pagination/Pagination";
import axios from "axios";
import noicon from "../../../_asset/image/vehicle/no-writing-icon.png";
import { Table } from "antd";
import NoticeService from "../../../Modules/API/Notice.service";

const VEHICLE_TYPE = "001";

const columns = [
  {
    title: "번호",
    dataIndex: "index",
    key: 1,
    width: "15%",
  },
  {
    title: "종류",
    dataIndex: "type",
    key: 2,
    width: "25%",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: 3,
    width: "25%",
  },
  {
    title: "작성일",
    key: 4,
    dataIndex: "date",
    width: "25%",
  },
];
class OneVehicle extends Component {
  state = {
    currentPage: 0,
    cardsPerPage: 7,
    currentPageM: 0,
    cardsPerPageM: 6,
    list: [],
    dataTable: []
    // cardsperpage -> 보여주고 싶은 박스 개수
  };

  componentDidMount() {
    this.getAllList();
    this.getNotices();
  }

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
    let getData = data;
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

  getAllList = async () => {
    const rID = "hanbit_vehicle";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          // console.log(response);

          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.registDt);
            item.simple_resources.registDt = `${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`;
            return item;
          });

          response.data.data.rows = response.data.data.rows.filter((item) => {
            return item.simple_resources.type === VEHICLE_TYPE;
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


  render() {
    const { list, dataTable } = this.state;

    console.log(dataTable)
    return (
      <div className="Vehicle_Container">
        <div className="Vehicle_TitleBox">
          <div className="Vehicle_Title">당사차량 [1톤]</div>
          {/* <div className="Vehicle_TopLine">
					<div className="Top_Line_1">번호</div>
					<div className="Top_Line_2">종류</div>
					<div className="Top_Line_3">제목</div>
					<div className="Top_Line_4">작성일</div>
				</div> */}

          <Table
            className="custom-table"
            columns={columns}
            dataSource={dataTable}
            pagination={false}
          />
          {/* {list.length > 0 ? (
            <div className="Vehicle_Board">
              {list
                .slice(
                  (this.state.currentPage + 1) * 5 - 5,
                  (this.state.currentPage + 1) * 5
                )
                .map((item, index) => {
                  console.log(item);
                  const data = item.simple_resources;
                  return (
                    <div className="Board_List" key={index}>
                      <Link
                        className="List_One"
                        to={`/InVehicle?id=${item.name}`}
                      >
                        {this.state.currentPage * 5 + index + 1}
                      </Link>
                      <Link
                        to={`/InVehicle?id=${item.name}`}
                        className="List_Two"
                      >
                        {vehicleType[data.type]}
                      </Link>
                      <Link
                        to={`/InVehicle?id=${item.name}`}
                        className="List_Three"
                      >
                        {data.title}
                      </Link>
                      <Link
                        to={`/InVehicle?id=${item.name}`}
                        className="List_Four"
                      >
                        {data.registDt}
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="Vehicle_Board1">
              <img src={noicon} alt="아이콘"></img>
              <div className="Vehicle_No">게시물이 없습니다.</div>
            </div>
          )} */}
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          cardsPerPage={this.state.cardsPerPage}
          itemCount={list.length}
          onPageNumberClicked={this.onPageNumberClicked}
          onPreviousPageClicked={this.onPreviousPageClicked}
          onNextPageClicked={this.onNextPageClicked}
        />
      </div>
    );
  }
}

export default OneVehicle;
