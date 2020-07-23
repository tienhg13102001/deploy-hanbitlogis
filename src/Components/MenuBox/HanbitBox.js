import React, { Component } from 'react';
import './HanbitBox.scss'
import { NavLink } from 'react-router-dom';
import HanbitDropDown from '../../Common/DropDown/HanbitDropDown';

import ArrowRight from '../../_asset/image/common/red-next-icon.png'
class HanbitBox extends Component {
    renderPc() {
        return (
            <div className="HanbitBox">
                <div className="Title">
                    공지사항
                </div>
                <NavLink className="HanbitBoard_navlink_container" to="/HanbitBoard">
                    <div className="Line">
                        공지사항
                    </div>
                    {`${this.props.location.pathname}` === "/HanbitBoard"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
    renderMobile = () => {
        return (
            <div className="HanbitBox">
                <HanbitDropDown></HanbitDropDown>
            </div>

        );
    }
    render() {
        const { isMobile } = this.props
        return (
          <>
            {isMobile ? this.renderMobile() : this.renderPc()}
          </>
        );
      }
}

export default HanbitBox;