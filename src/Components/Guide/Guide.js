import React from "react";
import "./style/Guide.scss";

const Guide = ({ handleClickMenu }) => {
  return (
    <div className="GuideContainer">
      <div className="GuideTop">
        <div className="GuideAbout" onClick={() => handleClickMenu("Intro")}>
          <div to="/Intro">회사소개</div>
        </div>
        <div className="GuideInfo" onClick={() => handleClickMenu("Info")}>
          <div to="/Info">지입정보</div>
        </div>
        <div className="GuideCar" onClick={() => handleClickMenu("Vehicle")}>
          <div to="/Vehicle">당사차량</div>
        </div>
        <div
          className="GuideBoard"
          onClick={() => handleClickMenu("HanbitBoard")}
        >
          <div to="/HanbitBoard">공지사항</div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
