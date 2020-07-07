import React, { Component } from 'react';
import './NoticeBox.scss'

class HanbitBox extends Component {
    render() {
        return (
            <div className="NoticeBox">
                <div className="Title">
                    공지사항
                </div>
                    <div className="Line">공지사항</div>
            </div>
        );
    }
}

export default HanbitBox;