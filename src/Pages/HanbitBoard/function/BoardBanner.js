import React, { Component } from "react";

import "./style/BoardBanner.scss";

class BoardBanner extends Component {
  render() {
    return (
      <div className="Board_Container">
        <div className="TextBox">
          <div className="Text">
            {`${this.props.location.pathname}`.includes("HanbitBoard")
              ? "Notice"
              : "General Discussion"}
          </div>
          <div className="Title">
            {`${this.props.location.pathname}`.includes("HanbitBoard")
              ? "공지사항"
              : "자유게시판"}
          </div>
        </div>
      </div>
    );
  }
}

export default BoardBanner;
