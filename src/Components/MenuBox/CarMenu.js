import React, { Component } from 'react';
import './CarMenu.scss'
import { NavLink } from 'react-router-dom';

import ArrowRight from '../../_asset/image/common/red-next-icon.png';

class CarMenu extends Component {
    render() {
        return (
            <div className="CarMenuBox">
                <div className="Title">
                    당사차량
                </div>
                <NavLink className="Company_Car_navlink_container" to={`${this.props.match.path}/onevehicle`}>
                    <div className="Line">당사차량[1톤]</div>
                    {`${this.props.location.pathname}` === "/Vehicle/onevehicle"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="Company_Car_navlink_container" to={`${this.props.match.path}/twovehicle`}>
                    <div className="Line">당사차랑[2톤]</div>
                    {`${this.props.location.pathname}` === "/Vehicle/twovehicle"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="Company_Car_navlink_container" to={`${this.props.match.path}/threevehicle`}>
                    <div className="Line">당사차랑[4.5톤]</div>
                    {`${this.props.location.pathname}` === "/Vehicle/threevehicle"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="Company_Car_navlink_container" to={`${this.props.match.path}/fourvehicle`}>
                    <div className="Line">당사차랑[4.5톤]</div>
                    {`${this.props.location.pathname}` === "/Vehicle/fourvehicle"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default CarMenu;