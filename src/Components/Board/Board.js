import React, { Component } from "react";
import "./Board.scss";
import axios from "axios";
import icon from "../../_asset/image/common/add-icon.png";
import { NavLink, Link } from "react-router-dom";

class Board extends Component {
  state = {
    list: [],
  };

  componentDidMount = () => {
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
          // console.log(response.data.data.rows);
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.lastUpdateDate);
            item.lastUpdateDate = `${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`;
            return item;
          });
          // console.log(response.data.data.rows);
          this.setState({
            ...this.state,
            list: response.data.data.rows,
          });
          // console.log(response.data.data.rows);
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className="Notice">
        <div className="TitleBox">
          <div className="Title">공지사항</div>
          <NavLink to="/HanbitBoard">
            <img className="Icon" src={icon} alt="plus icon"></img>
          </NavLink>
        </div>
        <div className="TextBox">
          {this.state.list
            .filter((data, index) => index < 4)
            .map((item, index) => {
              return (
                <div className="Box" key={index}>
                  <Link to="/HanbitBoard">
                    <div className="Text">{item.resources[0].data[0]}</div>
                  </Link>
                  <Link to="/HanbitBoard">
                    <div className="Date">{item.lastUpdateDate}</div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Board;
