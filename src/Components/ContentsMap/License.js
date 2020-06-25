import React, { Component } from 'react';
import './style/License.scss'

class License extends Component {
    render() {
        return (
            <div className="LicenseContainer">
                <div className="TextBox">
                    <div className="Title">
                        자격증<br/>
                        가이드
                    </div>
                    <div className="Text">
                        화물운송자격증
                    </div>
                </div>
            </div>
        );
    }
}

export default License;