import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Location.scss";

class Location extends Component {
  render() {
    return (
      <div className="Container">
        <NavLink className="Link" to="/Intro/come">
          <div className="TextBox">
            <div className="Title">오시는길</div>
            <div className="Location">위치 안내</div>
            <div className="Adress">
              서울특별시 강남구 학동로 56길 <br />
              8, 301 (삼성동, 한양빌딩)
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Location;
