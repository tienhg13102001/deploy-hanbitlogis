import React, { Component } from 'react';

import './style/Notice.scss'

import NoticeBanner from './function/NoticeBanner';
import NoticeBox from '../../Components/MenuBox/NoticeBox';
import NoticeText from './function/NoticeText';
import NoticeBoard from '../Notice/function/NoticeBoard';
import NoticeTitleBox from './function/NoticeTitleBox';

class Notice extends Component {
    render() {
        return (
            <div className="Notice_Contatiner">
                <div className="TopBanner">
                    <NoticeBanner></NoticeBanner>
                </div>
                <div className="CeoContents">
                    <NoticeBox></NoticeBox>
                    <div>
                        <NoticeTitleBox></NoticeTitleBox>
                        <NoticeText></NoticeText>
                        <NoticeBoard></NoticeBoard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notice;