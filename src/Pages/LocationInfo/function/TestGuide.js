import React, { Component } from 'react';
import '../style/TestGuide.scss'


import TestGuideOne from './TestGuideOne';
import TestGuideTwo from './TestGuideTwo';
import TestGuideCertificate from './TestGuideCertificate';
import TestGuideAptitude from './TestGuideAptitude';

class TestGuide extends Component {
    render() {
        return (
            <div className="TestGuide_Container">
                <div className="Analysis_Contents">
                    <TestGuideOne></TestGuideOne>
                    <TestGuideTwo></TestGuideTwo>
                    <TestGuideCertificate></TestGuideCertificate>
                    <TestGuideAptitude></TestGuideAptitude>    
                </div>
            </div>

        );
    }
}

export default TestGuide;