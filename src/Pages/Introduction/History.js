import React, { Component } from 'react';
import './style/CeoPage.scss'

import IntoBanner from '../Introduction/function/IntroductionBanner';
import IntoMenuBox from '../../Components/MenuBox/IntroductionBox';
import HistoryContents from './function/HistoryContents';


class History extends Component {
    render() {
        return (
            <div className="IntroContatiner">
                <div className="TopBanner">
                    <IntoBanner></IntoBanner>
                </div>
                <div className="CeoContents">
                    <IntoMenuBox></IntoMenuBox>
                    <HistoryContents></HistoryContents>
                </div>
            </div>
        );
    }
}

export default History;