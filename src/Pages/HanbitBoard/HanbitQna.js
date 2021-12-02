import React, { Component } from "react";

import "./style/Hanbit.scss";
import { Route } from "react-router-dom";

import BoardBanner from "./function/BoardBanner";
import HanbitBox from "../../Components/MenuBox/HanbitBox";
import QnaLists from "./function/QnaLists";
import WriteBoard from "./WriteHanbit";
import QnaDetail from "./function/QnaDetail";
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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-board.jpg"
            data-react-helmet="true"
          />
          <meta property="og:url" content="http://hanbitlogis.co.kr"></meta>

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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-board.jpg"
            data-react-helmet="true"
          />
        </Helmet>
        <div className="Hanbit_Contatiner">
          <div className="TopBanner">
            <BoardBanner {...this.props}></BoardBanner>
          </div>
          <div className="Hanbit_Contents">
            <HanbitBox {...this.props}></HanbitBox>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={QnaLists}
            ></Route>
            <Route
              path={`${this.props.match.path}/InBoard`}
              component={QnaDetail}
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
