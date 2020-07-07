import React, { Component } from 'react';
import './style/CeoPage.scss'

import IntoBanner from '../Introduction/function/IntroductionBanner';
import IntoMenuBox from '../../Components/MenuBox/IntroductionBox';
import IntroText from './function/IntroText';

class CeoPage extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="IntroContatiner">
                <div className="TopBanner">
                    <IntoBanner></IntoBanner>
                </div>
                <div className="CeoContents">
                    <IntoMenuBox {...this.props}></IntoMenuBox>
                    <IntroText></IntroText>
                </div>
            </div>
        );
    }
}

export default CeoPage;