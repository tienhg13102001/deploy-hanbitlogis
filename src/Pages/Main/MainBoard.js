import React, { Component } from 'react';
import './style/MainBoard.scss'

import Board from '../../Components/Board/Board'


class MainBoard extends Component {
    render() {
        return (
            <div className="BoardContainer">
                <Board></Board>
            </div>
        );
    }
}

export default MainBoard;