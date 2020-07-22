import React, { Component } from 'react';
import TestGuide from '../../Pages/LocationInfo/TestGuide';

class TestGuideRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <TestGuide></TestGuide>
            </div>
        );
    }
}

export default TestGuideRouter;