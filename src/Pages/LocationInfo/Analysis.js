import React, { Component } from "react";

import InfoBox from "../../Components/MenuBox/InfoBox";
import AnalysisBanner from "./function/AnalysisBanner";
import AnalyText from "./function/AnalyText";

import "./style/Analysis.scss";
import { Route } from "react-router-dom";
import Operaiton from "./function/Operaiton";
import TestGuide from "./function/TestGuide";
import { Helmet } from "react-helmet";
class Analysis extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>지입정보 | 한빛 로지스 | Hanbit Logis</title>
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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-img.jpg"
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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-img.jpg"
            data-react-helmet="true"
          />
        </Helmet>
        <div className="Analysis_Contatiner">
          <div className="TopBanner">
            <AnalysisBanner></AnalysisBanner>
          </div>
          <div className="Analy_Contents">
            <InfoBox {...this.props}></InfoBox>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={AnalyText}
            ></Route>
            <Route
              path={`${this.props.match.path}/analysis`}
              component={AnalyText}
            ></Route>
            <Route
              path={`${this.props.match.path}/operation`}
              component={Operaiton}
            ></Route>
            <Route
              path={`${this.props.match.path}/testguide`}
              component={TestGuide}
            ></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Analysis;
