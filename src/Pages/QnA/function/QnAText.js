import React, { Component } from 'react';

import './style/QnAText.scss'

class QnAText extends Component {
    render() {
        const { number, title, date } = this.props
        return (
            <div className="QnA_Board">
                    <div className="QnA_Type">{number}</div>
                    <div className="QnA_Title">{title}</div>
                    <div className="QnA_Date">{date}</div>
            </div>
        );
    }
}

export default QnAText;