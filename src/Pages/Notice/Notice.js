import React, { Component } from 'react';

import './style/Notice.scss'
import {Route} from 'react-router-dom';
import NoticeBanner from './function/NoticeBanner';
import NoticeBox from '../../Components/MenuBox/NoticeBox';
import NoticeTitleBox from './function/NoticeTitleBox';
import InNotice from '../Notice/InNotice'

class Notice extends Component {
    render() {
        return (
            <div className="Notice_Contatiner">
                <div className="TopBanner">
                    <NoticeBanner></NoticeBanner>
                </div>
                <div className="Notice_Contents">
                    <NoticeBox {...this.props}></NoticeBox>
                    <Route exact path={`${this.props.match.path}`} component={NoticeTitleBox}></Route>
                    <Route path={`${this.props.match.path}/InNotice`} component={InNotice}></Route>
                </div>
            </div>
        );
    }
}

export default Notice;