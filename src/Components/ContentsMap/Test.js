import React, { Component } from 'react';
import './style/Test.scss'

class Test extends Component {
    render() {
        return (
            <div className="TestContainer">
                <div className="TextBox">
                    <div className="Title_test">
                        바로<br/>
                        테스트
                    </div>
                    <div className="Text">
                        화물운송자격증
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;