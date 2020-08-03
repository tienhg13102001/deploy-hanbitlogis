import React, { Component } from "react";
import { Route } from "react-router-dom";
import CarMenuBox from "../../Components/MenuBox/CarMenu";
import OneCarBanner from "./function/OneCarBanner";
import "./style/OneCar.scss";
import OneVehicle from "./function/OneVehicle";
import TwoVehicle from "./function/TwoVehicle";
import ThreeVehicle from "./function/ThreeVehicle";
import FourVehicle from "./function/FourVehicle";
import { Helmet } from "react-helmet";
class OneCar extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>당사차량 | 한빛 로지스 | Hanbit Logis</title>
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
        <div className="Vehicle_Contatiner">
          <div className="TopBanner">
            <OneCarBanner></OneCarBanner>
          </div>
          <div className="Vehicle_Contents">
            <CarMenuBox isMobile={this.props} {...this.props}></CarMenuBox>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={OneVehicle}
            ></Route>
            <Route
              path={`${this.props.match.path}/onevehicle`}
              component={OneVehicle}
            ></Route>
            <Route
              path={`${this.props.match.path}/twovehicle`}
              component={TwoVehicle}
            ></Route>
            <Route
              path={`${this.props.match.path}/threevehicle`}
              component={ThreeVehicle}
            ></Route>
            <Route
              path={`${this.props.match.path}/fourvehicle`}
              component={FourVehicle}
            ></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OneCar;
