import React, { Component } from 'react';
import Analysis from '../../Pages/LocationInfo/Analysis';


class InfoRouter extends Component {
    render() {
        return (
            <div>
                <Analysis {...this.props}></Analysis>
            </div>
        );
    }
}

export default InfoRouter;