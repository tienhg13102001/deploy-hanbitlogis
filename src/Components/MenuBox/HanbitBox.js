import React, { Component } from 'react';
import './HanbitBox.scss'
import { NavLink } from 'react-router-dom';

import ArrowRight from '../../_asset/image/common/red-next-icon.png'
class HanbitBox extends Component {
    render() {
        return (
            <div className="HanbitBox">
                <div className="Title">
                    한빛게시판
                </div>
                <NavLink className="HanbitBoard_navlink_container" to="/HanbitBoard">
                    <div className="Line">
                        한빛게시판
                    </div>
                    {`${this.props.location.pathname}` === "/HanbitBoard"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default HanbitBox;