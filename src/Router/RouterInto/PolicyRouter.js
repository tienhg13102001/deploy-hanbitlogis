import React, { Component } from 'react';
import Policy from '../../Pages/Introduction/Policy';

class PolicyRouter extends Component {
    render() {
        console.log(this.props,"PolicyRouter")
        return (
            <div>
                <Policy {...this.props}></Policy>
            </div>
        );
    }
}

export default PolicyRouter;