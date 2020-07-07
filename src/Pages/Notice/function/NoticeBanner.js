import React, { Component } from 'react';

import './style/NoticeBanner.scss'

class NoticeBanner extends Component {
    render() {
        return (
            <div className="Notice_Container">
                <div className="TextBox">
                    <div className="Text">notice</div>
                    <div className="Title">공지사항</div>
                </div>
            </div>
        );
    }
}

export default NoticeBanner;