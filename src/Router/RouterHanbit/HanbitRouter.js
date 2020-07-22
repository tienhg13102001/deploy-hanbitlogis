import React, { Component } from 'react';
import Hanbit from '../../Pages/HanbitBoard/Hanbit';

class HanbitRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Hanbit {...this.props}></Hanbit>
            </div>
        );
    }
}

export default HanbitRouter;