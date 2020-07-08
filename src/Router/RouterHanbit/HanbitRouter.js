import React, { Component } from 'react';
import Hanbit from '../../Pages/HanbitBoard/Hanbit';

class HanbitRouter extends Component {
    render() {
        return (
            <div>
                <Hanbit {...this.props}></Hanbit>
            </div>
        );
    }
}

export default HanbitRouter;