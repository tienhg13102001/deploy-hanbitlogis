import React, { Component } from 'react';

import CarMenuBox from '../../Components/MenuBox/CarMenu';
import OneCarBanner from './function/OneCarBanner';
import './style/TwoCar.scss'
import TwoVehicle from './function/TwoVehicle';

class OneCar extends Component {
    render() {
        return (
            <div className="Vehicle_Contatiner">
                <div className="TopBanner">
                    <OneCarBanner></OneCarBanner>
                </div>
                <div className="CeoContents">
                    <CarMenuBox></CarMenuBox>
                    <TwoVehicle></TwoVehicle>
                </div>
            </div>
        );
    }
}

export default OneCar;