import React, { Component } from 'react';

import './style/NoticeText.scss'

class NoticeText extends Component {
    render() {
        const { number, title, date, people } = this.props
        return (
            <div className="Notice_Board">
                <div className="Notice_Type">{number}</div>
                <div className="Notice_People">{people}</div>
                <div className="Notice_Title">{title}</div>
                <div className="Notice_Date">{date}</div>
            </div>
        );
    }
}

export default NoticeText;