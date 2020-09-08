import React, { Component } from "react";

import "./style/BoardText.scss";

class BoardText extends Component {
  render() {
    const { date, title, people, number } = this.props;
    return (
      <div className="Board">
        <div className="Han_Number">{number}</div>
        <div className="Han_Title">{title}</div>
        <div className="Han_People">{people}</div>
        <div className="Han_Date">{date}</div>
      </div>
    );
  }
}

export default BoardText;
