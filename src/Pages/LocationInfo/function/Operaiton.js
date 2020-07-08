import React, { Component } from 'react';
import InfoBox from '../../../Components/MenuBox/InfoBox'
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
                <div className="Contents">
                    <OpreationChart></OpreationChart>
                    <OpreationChartTwo></OpreationChartTwo>
                    <OpreationChartThree></OpreationChartThree>
                    <OperationExample></OperationExample>
                    <OperationExampleTwo></OperationExampleTwo>
                    <OperationProsAndCons></OperationProsAndCons>
                </div>
            </div>
        );
    }
}

export default Operaiton;