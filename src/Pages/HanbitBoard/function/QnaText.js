import React, { Component } from "react";
import { Badge } from "antd";
import "./style/BoardText.scss";

class QnaText extends Component {
  render() {
    const { createdDate, date, title, people, number, reply } = this.props;
    return (
      <div className="Board">
        <div className="Han_Number">{number}</div>
        <div className="Han_Title">
          <div style={{ marginRight: "10px" }}>{title}</div>
          <Badge
            className="site-badge-count-109"
            count={reply ? "답변 등록" : null}
            style={{ backgroundColor: "#52c41a" }}
          />
        </div>
        <div className="Han_People">{people}</div>
        <div className="Han_CreatedDate">{createdDate}</div>
        <div className="Han_LastDate">{date}</div>
      </div>
    );
  }
}

export default QnaText;
