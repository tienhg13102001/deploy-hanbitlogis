import React, { Component } from "react";
import "./style/Introduction.scss";
import { Route } from "react-router-dom";
import IntoBanner from "./function/IntroductionBanner";
import IntoMenuBox from "../../Components/MenuBox/IntroductionBox";
import IntroText from "./function/IntroText";
import Delivery from "./function/Delivery";
import HistoryContent from "./function/HistoryContents";
import Come from "./function/Come.js";
import { Helmet } from "react-helmet";
class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>회사소개 | 한빛 로지스 | Hanbit Logis</title>
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

        <div className="IntroContatiner">
          <div className="TopBanner">
            <IntoBanner></IntoBanner>
          </div>
          <div className="Intro_Contents">
            <IntoMenuBox isMobile={this.props} {...this.props}></IntoMenuBox>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={IntroText}
            ></Route>
            <Route
              path={`${this.props.match.path}/ceo`}
              component={IntroText}
            ></Route>
            <Route
              path={`${this.props.match.path}/policy`}
              component={Delivery}
            ></Route>
            <Route
              path={`${this.props.match.path}/history`}
              component={HistoryContent}
            ></Route>
            <Route
              path={`${this.props.match.path}/come`}
              component={Come}
            ></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Introduction;
