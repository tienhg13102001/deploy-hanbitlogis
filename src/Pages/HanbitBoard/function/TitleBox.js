import React, { Component } from 'react';
import Hboard from '../Hboard';
import './style/TitleBox.scss'

class TItleBox extends Component {
    render() {
        return (
            <div  className="Hanbit_Contents_Area">
                <div className="Title_One">
                    한빛 게시판
            </div>
                <div>
                    <Hboard></Hboard>
                </div>
            </div>
        );
    }
}

export default TItleBox;