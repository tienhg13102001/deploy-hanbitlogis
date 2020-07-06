import React, { Component } from 'react';

import './style/BoardButton.scss';

import pre01 from '../_asset/image/vehicle/more-left-icon.png';
import pre02 from '../_asset/image/vehicle/left-icon.png';
import next01 from '../_asset/image/vehicle/right-icon.png';
import next02 from '../_asset/image/vehicle/more-right-icon.png';

class BoardButton extends Component {
    render() {
        return (
            <div className="ButtonContainer">
                <div className="ButtonBox">
                    <div className="ButtonPrewView">
                        <img src={pre01} alt='왼쪽 아이콘'></img>
                    </div>
                    <div className="ButtonPrewViewMore">
                        <img src={pre02} alt='왼쪽 아이콘'></img>
                    </div>
                    <div className="Count">1</div>
                    <div className="ButtonNext">
                        <img src={next01} alt='오른쪽 아이콘'></img>
                    </div>
                    <div className="ButtonNextMore">
                        <img src={next02} alt='오른쪽 아이콘'></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardButton;