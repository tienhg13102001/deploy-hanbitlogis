import React, { Component } from 'react';
import '../style/Operation.scss'
import OpreationChart from './OpreationChart';
import OpreationChartTwo from './OperationChartTwo';
import OpreationChartThree from './OperationChartThree';
import OperationExample from './OperationExampe';
import OperationExampleTwo from './OperationExampleTwo';
import OperationProsAndCons from './OperationProsAndCons';

class Operaiton extends Component {
    render() {
        return (
            <div className="Operation_Container">
                
                    <OpreationChart></OpreationChart>
                    <OpreationChartTwo></OpreationChartTwo>
                    <OpreationChartThree></OpreationChartThree>
                    <OperationExample></OperationExample>
                    <OperationExampleTwo></OperationExampleTwo>
                    <OperationProsAndCons></OperationProsAndCons>
                
            </div>
        );
    }
}

export default Operaiton;