import React, { Component } from 'react';

import BoardText from './BoardText';
import Hboard from '../Hboard';
import './style/TitleBox.scss'

class TItleBox extends Component {
    render() {
        return (
            <div>
                <div className="Title_One">
                    한빛 게시판
            </div>
                <div>
                    <BoardText></BoardText>
                    <Hboard></Hboard>
                </div>
            </div>
        );
    }
}

export default TItleBox;