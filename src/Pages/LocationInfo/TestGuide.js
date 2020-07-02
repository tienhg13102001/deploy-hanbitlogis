import React, { Component } from 'react';
import './style/TestGuide.scss'

import AnalysisBanner from './function/AnalysisBanner';
import InfoBox from '../../Components/MenuBox/InfoBox';
import TestGuideOne from './function/TestGuideOne';
import TestGuideTwo from './function/TestGuideTwo';

class TestGuide extends Component {
    render() {
        return (
            <div className="TestGuide_Container">
                <div className="TopBanner">
                    <AnalysisBanner></AnalysisBanner>
                </div>
                <div className="CeoContents">
                    <InfoBox></InfoBox>
                    <TestGuideOne></TestGuideOne>
                </div>
                <div className="Contents">
                    <TestGuideTwo></TestGuideTwo>
                </div>
            </div>

        );
    }
}

export default TestGuide;