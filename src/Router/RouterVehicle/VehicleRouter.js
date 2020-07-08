import React, { Component } from 'react';
import OneCar from '../../Pages/CompanyCar/OneCar';

class Vehicle extends Component {
    render() {
        return (
            <div>
                <OneCar {...this.props}></OneCar>
            </div>
        );
    }
}

export default Vehicle;