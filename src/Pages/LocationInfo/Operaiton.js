import React, { Component } from 'react';
import AnalysisBanner from './function/AnalysisBanner';
import InfoBox from '../../Components/MenuBox/InfoBox';
import './style/Operation.scss'
import OpreationChart from './function/OpreationChart';
import OpreationChartTwo from './function/OperationChartTwo';
import OpreationChartThree from './function/OperationChartThree';
import OperationExample from './function/OperationExampe';
import OperationExampleTwo from './function/OperationExampleTwo';
import OperationProsAndCons from './function/OperationProsAndCons';

class Operaiton extends Component {
    render() {
        return (
            <div className="Operation_Container">
                <div className="TopBanner">
                    <AnalysisBanner></AnalysisBanner>
                </div>
                <div className="CeoContents">
                    <InfoBox></InfoBox>
                    <OpreationChart></OpreationChart>
                </div>
                <div className="Contents">
                    <OpreationChartTwo></OpreationChartTwo>
                </div>
                <div className="Contents">
                    <OpreationChartThree></OpreationChartThree>
                </div>
                <div className="Contents">
                    <OperationExample></OperationExample>
                </div>
                <div className="Contents">
                    <OperationExampleTwo></OperationExampleTwo>
                </div>
                <div className="Contents">
                    <OperationProsAndCons></OperationProsAndCons>
                </div>
            </div>
        );
    }
}

export default Operaiton;