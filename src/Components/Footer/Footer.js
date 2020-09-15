import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../_asset/image/common/logo_icon.svg";

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="Box">
          <div className="Footer_wrap">
            <Link to="/">
              <div className="LogoBox">
                <img src={logo} alt="배너 로고"></img>
              </div>
            </Link>
            <div className="Info">
              <div className="Top_Wrap">
                <div className="Ceo">한빛로지스 (주) 대표이사 : 이정화</div>{" "}
                <div className="Tell">
                  사업자번호 : 120-86-31723 TEL : 1599-9954 FAX : 02-517-1493
                </div>
              </div>
              <div className="Middle_Wrap">
                <div className="address">
                  주소 : 서울특별시 강남구 학동로 56길 8, 301 (삼성동, 한양빌딩)
                </div>
                <div className="E-mail">e-mail : hanbitlogis@naver.com</div>
              </div>
              <div className="copy">
                copyright (c) hanbitlogis. all rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
