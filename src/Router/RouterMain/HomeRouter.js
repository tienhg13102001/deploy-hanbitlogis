import React, { Component } from "react";
import MainBanner from "../../Pages/Main/MainBanner";
import MainInfo from "../../Pages/Main/MainInfo";
import MainContents from "../../Pages/Main/MainContents";
import MainBoard from "../../Pages/Main/MainBoard";
import { Helmet } from "react-helmet";
class HomeRouter extends Component {
  componentWillMount = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>한빛 로지스 | Hanbit Logis</title>
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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-landing.jpg"
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
            content="https://s3.ap-northeast-2.amazonaws.com/hanbitlogis.test/og-landing.jpg"
            data-react-helmet="true"
          />
        </Helmet>
        <div>
          <MainBanner></MainBanner>
          <MainBoard></MainBoard>
          <MainInfo></MainInfo>
          <MainContents></MainContents>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeRouter;
