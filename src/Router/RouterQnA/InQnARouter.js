import React, { Component } from 'react';
import InQnABoard from '../../Pages/QnA/function/InQnABoard';

class InQnARouter extends Component {
    render() {
        return (
            <div>
                <InQnABoard {...this.props}></InQnABoard>
            </div>
        );
    }
}

export default InQnARouter;