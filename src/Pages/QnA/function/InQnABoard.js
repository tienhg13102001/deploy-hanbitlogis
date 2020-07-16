import React, { Component } from 'react';
import './style/InQnABoard.scss'
import QnABox from '../../../Components/MenuBox/QnABox';
import InQnA from './InQnA';
import QnABanner from './QnABanner';

class InQnABoard extends Component {
    render() {
        return (
            <div className="InHanbit_Contatiner">
                <div className="TopBanner">
                    <QnABanner></QnABanner>
                </div>
                <div className="InQnA_Contents">
                    <QnABox {...this.props}></QnABox>
                    <InQnA></InQnA>
                </div>
            </div>
        );
    }
}

export default InQnABoard;