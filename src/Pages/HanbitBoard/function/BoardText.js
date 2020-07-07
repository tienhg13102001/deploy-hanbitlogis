import React, { Component } from 'react';

import './style/BoardText.scss'

class BoardText extends Component {
    render() {
        const { number, date, title, people, view } = this.props
        return (
            <div className="Board">
                    <div className="Han_Type">{number}</div>
                    <div className="Han_Date">{date}</div>
                    <div className="Han_Title">{title}</div>
                    <div className="Han_People">{people}</div>
                    <div className="Han_View">{view}</div>
            </div>
        );
    }
}

export default BoardText;