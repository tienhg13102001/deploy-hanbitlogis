import React, { Component } from 'react';
import InNotice from '../../Pages/Notice/InNotice';

class InNoticeRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <InNotice></InNotice>
            </div>
        );
    }
}

export default InNoticeRouter;