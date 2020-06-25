import React, { Component } from 'react';
import './style/MainBoard.scss'

import Board from '../../Components/Board/Board'
import Hanbit from '../../Components/Board/Hanbit';


class MainBoard extends Component {
    render() {
        return (
            <div className="BoardContainer">
                <Board></Board>
                <Hanbit></Hanbit>
            </div>
        );
    }
}

export default MainBoard;