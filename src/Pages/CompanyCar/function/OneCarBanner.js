import React, { Component } from 'react';

import './style/OneCarBanner.scss'

class OneCarBanner extends Component {
    render() {
        return (
            <div className="Car_Container">
                <div className="TextBox">
                    <div className="Text">our vehicle</div>
                    <div className="Title">당사차량</div>
                </div>
            </div>
        );
    }
}

export default OneCarBanner;