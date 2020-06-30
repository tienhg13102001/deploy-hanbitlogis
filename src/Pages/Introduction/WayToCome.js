import React, { Component } from 'react';
import './style/CeoPage.scss'

import IntoBanner from './function/IntroductionBanner';
import IntoMenuBox from '../../Components/MenuBox/IntroductionBox';
import Come from './function/Come';

class WayToCome extends Component {
    render() {
        return (
            <div className="IntroContatiner">
                <div className="TopBanner">
                    <IntoBanner></IntoBanner>
                </div>
                <div className="CeoContents">
                    <IntoMenuBox></IntoMenuBox>
                    <Come></Come>
                </div>
            </div>
        );
    }
}

export default WayToCome;