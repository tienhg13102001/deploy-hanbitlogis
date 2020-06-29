import React, { Component } from 'react';
import './IntroductionBox.scss'

class IntroductionBox extends Component {
    render() {
        return (
            <div className="IntroBox">
                <div className="Title">
                    회사 소개
                </div>
                <div className="Line">CEO 인사말</div>
                <div className="Line">경영 방침</div>
                <div className="Line">회사 연혁</div>
                <div className="Line">오시는 길</div>
            </div>
        );
    }
}

export default IntroductionBox;