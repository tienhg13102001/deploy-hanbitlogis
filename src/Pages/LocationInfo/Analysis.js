import React, { Component } from 'react';

import InfoBox from '../../Components/MenuBox/InfoBox';
import AnalysisBanner from './function/AnalysisBanner';
import AnalyText from './function/AnalyText';


import './style/Analysis.scss'
import { Route } from 'react-router-dom';
import Operaiton from './function/Operaiton';
import TestGuide from './function/TestGuide';

class Analysis extends Component {
    render() {
        return (
            <div className="Analysis_Contatiner">
                <div className="TopBanner">
                    <AnalysisBanner></AnalysisBanner>
                </div>
                <div className="CeoContents">
                    <InfoBox {...this.props}></InfoBox>
                    <Route exact path={`${this.props.match.path}`} component={AnalyText}></Route>
                    <Route path={`${this.props.match.path}/analysis`} component={AnalyText}></Route>
                    <Route path={`${this.props.match.path}/operation`} component={Operaiton}></Route>
                    <Route path={`${this.props.match.path}/testguide`} component={TestGuide}></Route>
                </div>
            </div>
        );
    }
}

export default Analysis;