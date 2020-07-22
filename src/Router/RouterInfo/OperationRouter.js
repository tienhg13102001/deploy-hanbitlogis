import React, { Component } from 'react';
import Operaiton from '../../Pages/LocationInfo/Operaiton';



class OperationRouter extends Component {
    componentWillMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    render() {
        return (
            <div>
                <Operaiton></Operaiton>
            </div>
            
        );
    }
}

export default OperationRouter;