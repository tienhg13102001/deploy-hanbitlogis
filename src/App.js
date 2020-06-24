import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss'
// import Footer from './components/footer/footer';
import Pages from './Router/index';
import Navigation from '../src/Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Navigation} path={"/"}></Route>
        <div className = 'PaddingTop'> </div>
      {
        Pages().map(({exact, component, path})=>{
          return <Route exact={exact} component={component} isMobile = {this.isMobile} path={path}></Route>
        })
      }
      {/* <Footer></Footer> */}
    </Router>
    );
  }
}

export default App;