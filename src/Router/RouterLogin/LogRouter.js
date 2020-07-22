import React, { Component } from 'react';

import Login from '../../Pages/LoginPage/Login'

class LogRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Login></Login>
            </div>
        );
    }
}

export default LogRouter;