import React, { Component } from 'react';
import Introduction from '../../Pages/Introduction/Intoduction';

class IntroRouter extends Component {
    render() {
        return (
            <div>
                <Introduction {...this.props}></Introduction>
            </div>
        );
    }
}

export default IntroRouter;