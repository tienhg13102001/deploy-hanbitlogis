import React, { Component } from 'react';
import './IntroductionBox.scss'
import { NavLink } from 'react-router-dom';

class IntroductionBox extends Component {
    render() {
      
        console.log(this.props)
        return (
            <div className="IntroBox">
                <div className="Title">
                    회사 소개
                </div>
                <NavLink to="/Intro">
                <div className="Line">CEO 인사말
                </div>
               
                </NavLink>
                <NavLink to="/Policy">
                <div className="Line">경영 방침</div>
                </NavLink>
                <NavLink to="/History">
                <div className="Line">회사 연혁</div>
                </NavLink>
                <NavLink to="/Map">
                <div className="Line">오시는 길</div>
                </NavLink>
            </div>
        );
    }
}

export default IntroductionBox;