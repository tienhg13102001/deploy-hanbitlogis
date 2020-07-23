import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CarMenuBox from '../../Components/MenuBox/CarMenu';
import OneCarBanner from './function/OneCarBanner';
import './style/OneCar.scss'
import OneVehicle from './function/OneVehicle';
import TwoVehicle from './function/TwoVehicle';
import ThreeVehicle from './function/ThreeVehicle';
import FourVehicle from './function/FourVehicle';
class OneCar extends Component {
    render() {
        return (
            <div className="Vehicle_Contatiner">
                <div className="TopBanner">
                    <OneCarBanner></OneCarBanner>
                </div>
                <div className="Vehicle_Contents">
                    <CarMenuBox isMobile={this.props} {...this.props}></CarMenuBox>
                    <Route exact path={`${this.props.match.path}`} component={OneVehicle}></Route>
                    <Route path={`${this.props.match.path}/onevehicle`} component={OneVehicle}></Route>
                    <Route path={`${this.props.match.path}/twovehicle`} component={TwoVehicle}></Route>
                    <Route path={`${this.props.match.path}/threevehicle`} component={ThreeVehicle}></Route>
                    <Route path={`${this.props.match.path}/fourvehicle`} component={FourVehicle}></Route>
                </div>
            </div>
        );
    }
}

export default OneCar;