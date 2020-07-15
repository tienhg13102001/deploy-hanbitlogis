import React, { Component } from 'react';

import './style/NoticeTitleBox.scss'
import NoticeBoard from './NoticeBoard';

class NoticeTitleBox extends Component {
    render() {
        return (
            <div className="Notice_Area">
                <div className="Title_One">
                    공지사항
            </div>
                <div>
                    <NoticeBoard></NoticeBoard>
                </div>
            </div>
        );
    }
}

export default NoticeTitleBox;