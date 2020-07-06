import React, { Component } from 'react';

import CarMenuBox from '../../Components/MenuBox/CarMenu';
import OneCarBanner from './function/OneCarBanner';
import './style/OneCar.scss'
import OneVehicle from './function/OneVehicle';

class OneCar extends Component {
    render() {
        return (
            <div className="Vehicle_Contatiner">
                <div className="TopBanner">
                    <OneCarBanner></OneCarBanner>
                </div>
                <div className="CeoContents">
                    <CarMenuBox></CarMenuBox>
                    <OneVehicle></OneVehicle>
                </div>
            </div>
        );
    }
}

export default OneCar;