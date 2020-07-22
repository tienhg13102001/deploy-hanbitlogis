import React, { Component } from 'react';
import Notice from '../../Pages/Notice/Notice'

class NoticeRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Notice {...this.props}></Notice>
            </div>
        );
    }
}

export default NoticeRouter;