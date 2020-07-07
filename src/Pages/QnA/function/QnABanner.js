import React, { Component } from 'react';

import './style/QnABanner.scss'

class NoticeBanner extends Component {
    render() {
        return (
            <div className="Notice_Container">
                <div className="TextBox">
                    <div className="Text">Question and Answer</div>
                    <div className="Title">QnA</div>
                </div>
            </div>
        );
    }
}

export default NoticeBanner;