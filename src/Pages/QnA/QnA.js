import React, { Component } from 'react';
import QnABanner from '../QnA/function/QnABanner'
import QnABox from '../../Components/MenuBox/QnABox'
import './style/QnA.scss'

import QnATitleBox from './function/QnATitleBox';
import QnABoard from './function/QnABoard';

class QnA extends Component {
    render() {
        return (
            <div className="QnA_Contatiner">
                <div className="TopBanner">
                    <QnABanner></QnABanner>
                </div>
                <div className="QnA_Contents">
                    <QnABox {...this.props}></QnABox>
                    <div className="QnA_Contents_Area">
                        <QnATitleBox></QnATitleBox>
                        <QnABoard></QnABoard>
                    </div>
                </div>
            </div>
        );
    }
}

export default QnA;