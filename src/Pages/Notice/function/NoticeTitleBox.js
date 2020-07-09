import React, { Component } from 'react';

import './style/NoticeTitleBox.scss'
import NoticeText from './NoticeText';
import NoticeBoard from './NoticeBoard';

class NoticeTitleBox extends Component {
    render() {
        return (
            <div>
                <div className="Title_One">
                    공지사항
            </div>
                <div>
                    <NoticeText></NoticeText>
                    <NoticeBoard></NoticeBoard>
                </div>
            </div>
        );
    }
}

export default NoticeTitleBox;