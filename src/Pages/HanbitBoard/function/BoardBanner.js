import React, { Component } from 'react';

import './style/BoardBanner.scss'

class BoardBanner extends Component {
    render() {
        return (
            <div className="Board_Container">
                <div className="TextBox">
                    <div className="Text">Hanbit Bulletin Board</div>
                    <div className="Title">한빛 게시판</div>
                </div>
            </div>
        );
    }
}

export default BoardBanner;