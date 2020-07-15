import React, { Component } from 'react';

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
                <div className="CeoContents">
                    <QnABox {...this.props}></QnABox>
                    <InQnA></InQnA>
                </div>
            </div>
        );
    }
}

export default InQnABoard;