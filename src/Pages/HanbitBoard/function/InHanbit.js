import React, { Component } from "react";
import "./style/InHanbit.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import BoardPreview from "../../../Common/BoardPrewView";

class InHanbit extends Component {
  state = {
    list: [],
    data: null,
    dataIndex: -1,
  };

  componentDidMount = () => {
    this.getAllList();
  };
  // getAllList = async () => {
  //   this.getAllList();
  // };
  getAllList = async (id) => {
    const rID = "hanbit_notice";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          if (!id) id = this.props.location.search.slice(6);
          else {
            this.props.history.push(`/HanbitBoard/InBoard?name=${id}`);
          }
          let dataIndex = 0;
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.createdAt);
            item.simple_resources.createdAt = `${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`;
            return item;
          });
          response.data.data.rows.map((item, ind) => {
            if (item.name === id) {
              dataIndex = ind;
            }
          });

          const data = response.data.data.rows.filter(
            (item) => item.name === id
          )[0];
          console.log(dataIndex);
          this.setState({
            dataIndex,
            list: response.data.data.rows,
            data,
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };
  render() {
    const data = this.state.data;
    const dataIndex = this.state.dataIndex;
    console.log(dataIndex);

    return this.state.data ? (
      <div className="InHanbit_Container">
        <div className="InHanbit_TitleBox">
          <div className="InHanbit_Title">공지사항</div>
          <NavLink to="/HanbitBoard">
            <div className="InHanbit_Btn">목록으로</div>
          </NavLink>
        </div>
        <div className="InHanbit_Board">
          <div className="In_TitleBox">
            <div className="In_Title">{data.simple_resources.title}</div>
          </div>
          <div className="In_Menu">
            <div className="In_Menu_People">{data.simple_resources.name} </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "15px",
              }}
            >
              |
            </div>
            <div className="In_Menu_Date">
              {data.simple_resources.createdAt}
            </div>
          </div>
          <div className="In_Menu_Text">{data.simple_resources.content}</div>
        </div>
        {dataIndex !== -1 ? (
          <BoardPreview
            list={this.state.list}
            dataIndex={this.state.dataIndex}
            getAllList={this.getAllList}
          ></BoardPreview>
        ) : null}
      </div>
    ) : (
      <div></div>
    );
  }
}

export default InHanbit;
