import React, { Component } from 'react';
import QnA from '../../Pages/QnA/QnA';

class QnARouter extends Component {
    render() {
        return (
            <div>
                <QnA {...this.props}></QnA>
            </div>
        );
    }
}

export default QnARouter;