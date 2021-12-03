import React, { Component } from "react";
import "./style/BoardPrewView.scss";
import { Badge } from "antd";
class BoardPreview extends Component {
  state = {};

  componentDidMount = () => {};

  onClickData = (url) => {
    this.props.history.push(url);
  };

  render() {
    const prevData = this.props.list[this.props.dataIndex - 1];
    const nextData = this.props.list[this.props.dataIndex + 1];
    return (
      <div className="BoardPreviewContainer">
        <div style={({ height: "152px" }, { paddingBottom: "80px" })}>
          {prevData ? (
            <div
              className="BoardPreviewBox"
              onClick={() => this.props.getAllList(prevData.name)}
            >
              <div className="BoardPreviewContents">
                <div className="BoardPreviewBtn">∧</div>
                <div className="BoardPreviewNext">PREV</div>
                <div
                  style={{ marginRight: "10px" }}
                  className="BoardPreviewTitle"
                >
                  {prevData.simple_resources.title}
                </div>
                <Badge
                  className="site-badge-count-109"
                  count={prevData.simple_resources.replyAt ? "답변 등록" : null}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </div>
            </div>
          ) : null}
          {nextData ? (
            <div
              className="BoardNextBox"
              onClick={() => this.props.getAllList(nextData.name)}
            >
              <div className="BoardNextContents">
                <div className="BoardNextBtn">∨</div>
                <div className="BoardNextNext">NEXT</div>
                <div className="BoardNextTitle" style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>
                    {nextData.simple_resources.title}
                  </div>
                  <Badge
                    className="site-badge-count-109"
                    count={
                      nextData.simple_resources.replyAt ? "답변 등록" : null
                    }
                    style={{ backgroundColor: "#52c41a" }}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default BoardPreview;
