import React, { Component } from 'react';

import './style/QnATitleBox.scss'
import QnABoard from './QnABoard';

class QnATitleBox extends Component {
    render() {
        return (
            <div className="QnA_Contents_Area">
                <div className="Title_One">
                    QnA
            </div>
                <div>
                    <QnABoard />
                </div>
            </div>
        );
    }
}

export default QnATitleBox;