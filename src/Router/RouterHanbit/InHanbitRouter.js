import React, { Component } from 'react';
import InHanbitBoard from '../../Pages/HanbitBoard/InHabitBoard';

class InHanbitRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <InHanbitBoard {...this.props}></InHanbitBoard>
            </div>
        );
    }
}

export default InHanbitRouter;