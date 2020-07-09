import React, { Component } from 'react';
import Notice from '../../Pages/Notice/Notice'

class NoticeRouter extends Component {
    render() {
        return (
            <div>
                <Notice {...this.props}></Notice>
            </div>
        );
    }
}

export default NoticeRouter;