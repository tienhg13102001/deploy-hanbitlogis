import React, { Component } from 'react';
import './IntroductionBox.scss'
import { NavLink } from 'react-router-dom';
import './InfoBox.scss'

import ArrowRight from '../../_asset/image/common/red-next-icon.png';

class InfoBox extends Component {
    render() {
        return (
            <div className="InfoBox">
                <div className="Title">
                    지입 정보
                </div>
                <NavLink className="InfoBox_navlink_container" to={`${this.props.match.path}/analysis`}>
                    <div className="Line">지입 분석</div>
                    {`${this.props.location.pathname}` === "/Info/analysis"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="InfoBox_navlink_container" to={`${this.props.match.path}/operation`}>
                    <div className="Line">차량운용분석</div>
                    {`${this.props.location.pathname}` === "/Info/operation"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="InfoBox_navlink_container" to={`${this.props.match.path}/testguide`}>
                    <div className="Line">자격증 가이드</div>
                    {`${this.props.location.pathname}` === "/Info/testguide"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default InfoBox;