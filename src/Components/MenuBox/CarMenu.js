import React, { Component } from 'react';
import './CarMenu.scss'
import { NavLink } from 'react-router-dom';

class InfoBox extends Component {
    render() {
        return (
            <div className="CarMenuBox">
                <div className="Title">
                    당사차량
                </div>
                <NavLink to="/Vehicle">
                    <div className="Line">당사차량[1톤]</div>
                </NavLink>
                <NavLink to="/TwoVehicle">
                    <div className="Line">당사차량[2.5톤]</div>
                </NavLink>
                <NavLink to="/ThreeVehicle">
                    <div className="Line">당사차량[4.5톤]</div>
                </NavLink>
                <NavLink to="FourVehicle">
                    <div className="Line">당사차량[5톤]</div>
                </NavLink>
            </div>
        );
    }
}

export default InfoBox;