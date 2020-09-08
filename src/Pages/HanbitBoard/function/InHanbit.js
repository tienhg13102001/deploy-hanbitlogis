import React, { Component } from "react";
import "./style/InHanbit.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";

class InHanbit extends Component {
  state = {
    list: [],
    data: null,
  };

  componentDidMount = () => {
    this.getAllList();
  };
  getAllList = async () => {
    this.getAllList();
  };
  getAllList = async () => {
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
          const id = this.props.location.search.slice(6);
          const data = response.data.data.rows.filter(
            (item) => item.name === id
          )[0];
          this.setState({
            ...this.state,
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
    console.log(data);
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
      </div>
    ) : (
      <div></div>
    );
  }
}

export default InHanbit;
