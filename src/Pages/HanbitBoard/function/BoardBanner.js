import React, { Component } from 'react';

import './style/BoardBanner.scss'

class BoardBanner extends Component {
    render() {
        return (
            <div className="Board_Container">
                <div className="TextBox">
                    <div className="Text">Notice</div>
                    <div className="Title">공지사항</div>
                </div>
            </div>
        );
    }
}

export default BoardBanner;