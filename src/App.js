import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Pages from "./Router/index";
import Navigation from "../src/Components/Navigation/Navigation";
import MainSlick from "./Pages/Main/MainSlick";
import BackToTopComponent from "./Common/BackToTop/BackToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Navigation} path={"/"}></Route>
        {Pages().map(({ exact, component, path }) => {
          return (
            <Route
              key={path}
              exact={exact}
              component={component}
              isMobile={this.isMobile}
              path={path}
              {...this.props}
            ></Route>
          );
        })}
        <MainSlick></MainSlick>
        <BackToTopComponent></BackToTopComponent>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
