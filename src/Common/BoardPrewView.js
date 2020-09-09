import React, { Component } from "react";
import "./style/BoardPrewView.scss";

class BoardPreview extends Component {
  render() {
    return (
      <div className="BoardPreviewContainer">
        <div>
          <div className="BoardPreviewBox">
            <div className="BoardPreviewContents">
              <div className="BoardPreviewBtn">∧</div>
              <div className="BoardPreviewNext">PREV</div>
              <div className="BoardPreviewTitle"></div>
            </div>
          </div>

          <div className="BoardNextBox">
            <div className="BoardNextContents">
              <div className="BoardNextBtn">∨</div>
              <div className="BoardNextNext">NEXT</div>
              <div className="BoardNextTitle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardPreview;
