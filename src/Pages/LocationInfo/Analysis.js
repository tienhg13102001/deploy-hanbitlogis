import React, { Component } from 'react';

import InfoBox from '../../Components/MenuBox/InfoBox';
import AnalysisBanner from './function/AnalysisBanner';
import AnalyText from './function/AnalyText';
import AnalysisResult from './function/AnalysisResult';

import './style/Analysis.scss'

class Analysis extends Component {
    render() {
        return (
            <div className="Analysis_Contatiner">
                <div className="TopBanner">
                    <AnalysisBanner></AnalysisBanner>
                </div>
                <div className="CeoContents">
                    <InfoBox></InfoBox>
                    <AnalyText></AnalyText>
                </div>
            </div>
        );
    }
}

export default Analysis;