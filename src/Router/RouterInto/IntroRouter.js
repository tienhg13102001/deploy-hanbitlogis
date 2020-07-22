import React, { Component } from 'react';
import Introduction from '../../Pages/Introduction/Intoduction';

class IntroRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Introduction {...this.props}></Introduction>
            </div>
        );
    }
}

export default IntroRouter;