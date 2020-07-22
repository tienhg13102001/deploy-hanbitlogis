import React, { Component } from 'react';
import OneCar from '../../Pages/CompanyCar/OneCar';

class Vehicle extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <OneCar {...this.props}></OneCar>
            </div>
        );
    }
}

export default Vehicle;