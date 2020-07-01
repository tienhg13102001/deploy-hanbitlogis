import React, { Component } from 'react';
import './IntroductionBox.scss'
import { NavLink } from 'react-router-dom';
import './InfoBox.scss'

class InfoBox extends Component {
    render() {
        return (
            <div className="InfoBox">
                <div className="Title">
                    지입 정보
                </div>
                <NavLink to="/Info"><div className="Line">지입 분석</div></NavLink>
                <div className="Line">차량운영분석</div>
                <div className="Line">자격증 가이드</div>
            </div>
        );
    }
}

export default InfoBox;