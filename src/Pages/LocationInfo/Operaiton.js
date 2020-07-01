import React, { Component } from 'react';
import AnalysisBanner from './function/AnalysisBanner';
import InfoBox from '../../Components/MenuBox/InfoBox';
import './style/Operation.scss'
import OpreationChart from './function/OpreationChart';
import OpreationChartTwo from './function/OperationChartTwo';
import OpreationChartThree from './function/OperationChartThree';

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
            </div>
        );
    }
}

export default Operaiton;