import React, { Component } from "react";

import "./style/Hanbit.scss";
import { Route } from "react-router-dom";

import BoardBanner from "./function/BoardBanner";
import HanbitBox from "../../Components/MenuBox/HanbitBox";
import TitleBox from "./function/TitleBox";
import WriteBoard from "./WriteHanbit";
import InHanbit from "./function/InHanbit";
import { Helmet } from "react-helmet";

class Hanbit extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>공지사항 | 한빛 로지스 | Hanbit Logis</title>
          <meta
            name="description"
            content="한빛로지스, HanbitLogis, Hanbit, logis, 물류회사, 최고의 물류회사"
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="한빛로지스, HanbitLogis, Hanbit, logis, 물류회사, 최고의 물류회사"
            data-react-helmet="true"
          />
          <link
            rel="canonical"
            href="http://hanbitlogis.co.kr/"
            data-react-helmet="true"
          />

          <meta property="og:type" content="website" data-react-helmet="true" />
          <meta
            property="og:title"
            content="HANBIT LOGIS | 한빛로지스"
            data-react-helmet="true"
          />
          <meta
            property="og:description"
            content="한빛로지스, HanbitLogis, Hanbit, logis, 물류회사, 최고의 물류회사"
            data-react-helmet="true"
          />
          <meta
            property="og:image"
            content="https://drive.google.com/uc?export=download&id=1M08_nZzipZnl73h_RH3kVrZV1Zlxf9WA"
            data-react-helmet="true"
          />
          <meta property="og:url" content="http://lennon.co.kr"></meta>

          <meta
            name="twitter:title"
            content="HANBIT LOGIS | 한빛로지스"
            data-react-helmet="true"
          />
          <meta
            name="twitter:description"
            content="한빛로지스, HanbitLogis, Hanbit, logis, 물류회사, 최고의 물류회사"
            data-react-helmet="true"
          />
          <meta
            name="twitter:image"
            content="https://drive.google.com/uc?export=download&id=1M08_nZzipZnl73h_RH3kVrZV1Zlxf9WA"
            data-react-helmet="true"
          />
        </Helmet>
        <div className="Hanbit_Contatiner">
          <div className="TopBanner">
            <BoardBanner></BoardBanner>
          </div>
          <div className="Hanbit_Contents">
            <HanbitBox {...this.props}></HanbitBox>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={TitleBox}
            ></Route>
            <Route
              path={`${this.props.match.path}/InBoard`}
              component={InHanbit}
            ></Route>
            <Route
              path={`${this.props.match.path}/WriteBoard`}
              component={WriteBoard}
            ></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hanbit;
