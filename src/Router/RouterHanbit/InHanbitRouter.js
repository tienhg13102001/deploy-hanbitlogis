import React, { Component } from 'react';
import InHanbitBoard from '../../Pages/HanbitBoard/InHabitBoard';

class InHanbitRouter extends Component {
    render() {
        return (
            <div>
                <InHanbitBoard {...this.props}></InHanbitBoard>
            </div>
        );
    }
}

export default InHanbitRouter;