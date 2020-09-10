import React, { Component } from "react";
import "./style/BoardPrewView.scss";

class BoardPreview extends Component {
  render() {
    return (
      <div className="BoardPreviewContainer">
        <div style={({ height: "152px" }, { paddingBottom: "80px" })}>
          {this.props.prevData ? (
            <div
              className="BoardPreviewBox"
              onClick={() => this.props.onChangeIndex(this.props.prevData.id)}
            >
              <div className="BoardPreviewContents">
                <div className="BoardPreviewBtn">∧</div>
                <div className="BoardPreviewNext">PREV</div>
                <div className="BoardPreviewTitle">
                  {this.props.prevData.content}
                </div>
              </div>
            </div>
          ) : null}
          {this.props.nextData ? (
            <div
              className="BoardNextBox"
              onClick={() => this.props.onChangeIndex(this.props.nextData.id)}
            >
              <div className="BoardNextContents">
                <div className="BoardNextBtn">∨</div>
                <div className="BoardNextNext">NEXT</div>
                <div className="BoardNextTitle">
                  {this.props.nextData.content}
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
