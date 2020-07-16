import React, { Component } from 'react';
import './IntroductionBox.scss'
import { NavLink } from 'react-router-dom';
import ArrowRight from '../../_asset/image/common/red-next-icon.png';

class IntroductionBox extends Component {
    render() {
        return (
            <div className="IntroBox">
                <div className="Title">
                    회사 소개
                </div>
                <NavLink className="IntroductionBox_navlink_container" to={`${this.props.match.path}/ceo`}>
                    <div className="Line">CEO 인사말</div>
                    {`${this.props.location.pathname}` === "/Intro/ceo"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="IntroductionBox_navlink_container" to={`${this.props.match.path}/policy`}>
                    <div className="Line">경영 방침</div>
                    {`${this.props.location.pathname}` === "/Intro/policy"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="IntroductionBox_navlink_container" to={`${this.props.match.path}/history`}>
                    <div className="Line">회사 연혁</div>
                    {`${this.props.location.pathname}` === "/Intro/history"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
                <NavLink className="IntroductionBox_navlink_container" to={`${this.props.match.path}/come`}>
                    <div className="Line">오시는길</div>
                    {`${this.props.location.pathname}` === "/Intro/come"  && <img src={ArrowRight} alt="arrowRight"></img>}
                </NavLink>
            </div>
        );
    }
}

export default IntroductionBox;