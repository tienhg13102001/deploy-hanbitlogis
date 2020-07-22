import React, { Component } from 'react';
import Find from '../../Pages/LoginPage/Find'

class FindRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Find></Find>
            </div>
        );
    }
}

export default FindRouter;