import React, { Component } from 'react';
import QnABanner from '../QnA/function/QnABanner'
import QnABox from '../../Components/MenuBox/QnABox'
import './style/QnA.scss'
import QnAText from './function/QnAText'
import QnATitleBox from './function/QnATitleBox';
import QnABoard from './function/QnABoard';

class QnA extends Component {
    render() {
        return (
            <div className="QnA_Contatiner">
                <div className="TopBanner">
                    <QnABanner></QnABanner>
                </div>
                <div className="CeoContents">
                    <QnABox></QnABox>
                    <div>
                        <QnATitleBox></QnATitleBox>
                        <QnAText></QnAText>
                        <QnABoard></QnABoard>
                    </div>
                </div>
            </div>
        );
    }
}

export default QnA;