import React, { Component } from 'react';
import Analysis from '../../Pages/LocationInfo/Analysis';


class InfoRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Analysis {...this.props}></Analysis>
            </div>
        );
    }
}

export default InfoRouter;