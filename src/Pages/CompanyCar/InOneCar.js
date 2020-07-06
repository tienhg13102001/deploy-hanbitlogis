import React, { Component } from 'react';

import CarMenuBox from '../../Components/MenuBox/CarMenu';
import './style/InOneCar.scss'
import InVehicle from './function/InVehicle';
import OneCarBanner from './function/OneCarBanner'

class InOneCar extends Component {
    render() {
        return (
            <div className="Vehicle_Contatiner">
                <div className="TopBanner">
                    <OneCarBanner></OneCarBanner>
                </div>
                <div className="CeoContents">
                    <CarMenuBox></CarMenuBox>
                    <InVehicle></InVehicle>
                </div>
            </div>
        );
    }
}

export default InOneCar;