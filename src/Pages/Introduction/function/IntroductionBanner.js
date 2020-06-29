import React, { Component } from 'react';
import './style/IntriductionBanner.scss';

class IntroductionBanner extends Component {
    render() {
        return (
            <div className="IntroBanner">
                <div className="TextBox">
                    <div className="Text">Company Introduction</div>
                    <div className="Title">회사 소개</div>
                </div>
            </div>
        );
    }
}

export default IntroductionBanner;