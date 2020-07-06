import React, { Component } from 'react';
import InVehicle from '../../Pages/CompanyCar/function/InVehicle';
import InOneCar from '../../Pages/CompanyCar/InOneCar';

class InVehicleRouter extends Component {
    render() {
        return (
            <div>
                <InOneCar></InOneCar>
            </div>
        );
    }
}

export default InVehicleRouter;