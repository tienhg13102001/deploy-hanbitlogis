import React, { Component } from 'react';
import './Service.scss'

class Service extends Component {
    render() {
        return (
            <div className="CustomContainer">
                <div className="TextBox">
                    <div className="Title">
                        고객센터
                    </div>
                    <div className="Tell">
                        1599-9964
                    </div>
                    <div className="TellBox">
                        TEL. 010. 7307. 1224 <br />
                            FAX. 02. 517. 1493
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;