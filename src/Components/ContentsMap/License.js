import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style/License.scss'

class License extends Component {
    render() {
        return (
            <div className="LicenseContainer">
                <Link className="Link" to="/Info/testguide">
                    <div className="TextBox">
                        <div className="Title_license">
                            자격증<br />
                            가이드
                    </div>
                        <div className="Text">
                            화물운송자격증
                    </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default License;