import React, { Component } from 'react';
import './style/Union.scss'

class Union extends Component {
    render() {
        return (
            <div className="UnionContainer">
                <div className="TextBox">
                    <div className="Title_union">
                        화물연합<br/>
                        운송
                    </div>
                    <div className="Text">
                        운송차량이 필요할 땐
                    </div>
                </div>
            </div>
        );
    }
}

export default Union;