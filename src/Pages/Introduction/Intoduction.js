import React, { Component } from "react";
import "./style/Introduction.scss";
import { Route } from "react-router-dom";
import IntoBanner from "./function/IntroductionBanner";
import IntoMenuBox from "../../Components/MenuBox/IntroductionBox";
import IntroText from "./function/IntroText";
import Delivery from "./function/Delivery";
import HistoryContent from "./function/HistoryContents";
import Come from "./function/Come.js";
class Introduction extends Component {
  render() {
    return (
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
    );
  }
}

export default Introduction;
