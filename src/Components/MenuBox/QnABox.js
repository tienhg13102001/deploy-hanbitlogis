import React, { Component } from 'react';
import './QnABox.scss'

import ArrowRight from '../../_asset/image/common/red-next-icon.png';
import { NavLink } from 'react-router-dom';

class HanbitBox extends Component {
    render() {
        return (
            <div className="QnABox">
                <div className="Title">
                    QnA
                </div>
                <NavLink className="QnA_navlink_container" to="/QnA">
                    <div className="Line">QnA</div>
                    {`${this.props.location.pathname}` === "/QnA" && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default HanbitBox;