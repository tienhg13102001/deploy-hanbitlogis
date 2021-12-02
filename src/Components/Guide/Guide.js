import React from "react";
import "./style/Guide.scss";

const Guide = ({ handleClickMenu }) => {
  return (
    <div className="GuideContainer">
      <div className="GuideTop">
        <div
          className="GuideAbout"
          onMouseEnter={() => handleClickMenu("Intro")}
          onClick={() => handleClickMenu("Intro")}
        >
          <div to="/Intro">회사소개</div>
        </div>
        <div
          className="GuideInfo"
          onMouseEnter={() => handleClickMenu("Info")}
          onClick={() => handleClickMenu("Info")}
        >
          <div to="/Info">지입정보</div>
        </div>
        <div
          className="GuideCar"
          onMouseEnter={() => handleClickMenu("Vehicle")}
          onClick={() => handleClickMenu("Vehicle")}
        >
          <div to="/Vehicle">당사차량</div>
        </div>
        <div
          className="GuideBoard"
          onMouseEnter={() => handleClickMenu("HanbitBoard")}
          onClick={() => handleClickMenu("HanbitBoard")}
        >
          <div to="/HanbitBoard">게시판</div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
