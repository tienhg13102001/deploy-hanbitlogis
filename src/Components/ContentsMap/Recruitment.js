import React, { Component } from 'react';

import './style/Recruitment.scss'

class Recruitment extends Component {
    render() {
        return (
            <div className="RecruitContainer">
                <a href="mailto: hanbitlogis@naver.com">
                    <div className="TextBox">
                        <div className="Title_recruit">
                            채용<br />
                        문의
                    </div>
                        <div className="Text">
                            지금 도전하세요!
                    </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Recruitment;