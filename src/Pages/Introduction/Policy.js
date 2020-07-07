import React, { Component } from 'react';
import './style/Policy.scss'

import IntoBanner from '../Introduction/function/IntroductionBanner';
import IntoMenuBox from '../../Components/MenuBox/IntroductionBox';
import Delivery from './function/Delivery';

class Policy extends Component {
    render() {
        console.log(this.props,"Policy")
        return (
            <div className="IntroContatiner">
                <div className="TopBanner">
                    <IntoBanner></IntoBanner>
                </div>
                <div className="CeoContents">
                    <IntoMenuBox {...this.props}></IntoMenuBox>
                    <Delivery {...this.props}></Delivery>
                </div>
            </div>
        );
    }
}

export default Policy;