import React, { Component } from 'react';
import './NoticeBox.scss'

import ArrowRight from '../../_asset/image/common/red-next-icon.png';
import { NavLink } from 'react-router-dom';

class HanbitBox extends Component {
    render() {
        return (
            <div className="NoticeBox">
                <div className="Title">
                    공지사항
                </div>
                <NavLink className="Notice_navlink_container" to="/Notice">
                    <div className="Line">공지사항</div>
                    {`${this.props.location.pathname}` === "/Notice"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default HanbitBox;