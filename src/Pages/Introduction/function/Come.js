import React, { Component } from "react";
import "./style/Come.scss";

class Come extends Component {
  render() {
    return (
      <div className="ComeContainer">
        <div className="Come_TextBox">
          <div className="Come_Title">오시는 길</div>
          <div className="Come_Box">
            <div className="Come_One">주소</div>
            <div className="Come_Two">
              서울 중구 동호로11길 93 1층 101호
            </div>
          </div>
          <div className="Come_Box">
            <div className="Come_One">전화</div>
            <div className="Come_Two">1599-9964</div>
          </div>
          <div className="Come_Box">
            <div className="Come_One">팩스</div>
            <div className="Come_Two">02-517-1493</div>
          </div>
          <div className="Come_Box">
            <div className="Come_One">이메일</div>
            <div className="Come_Two">hanbitlogis@naver.com</div>
          </div>
        </div>
        <div className="Hanbit_Map" style={{ paddingTop: "30px" }}>
          <iframe
            title="HanbitLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.15593894257!2d127.00526381620972!3d37.551389679800714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca305fc07896b%3A0x69fdf1cada7e2fd2!2z7ISc7Jq47Yq567OE7IucIOykkeq1rCDsi6Dri7ky64-ZIOuPme2YuOuhnDEx6ri4IDkzIDHsuLUgMTAx7Zi4!5e0!3m2!1sko!2skr!4v1611045877483!5m2!1sko!2skr"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Come;
