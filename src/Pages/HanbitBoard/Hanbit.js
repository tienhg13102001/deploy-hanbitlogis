import React, { Component } from 'react';

import './style/Hanbit.scss'

import BoardBanner from './function/BoardBanner';
import HanbitBox from '../../Components/MenuBox/HanbitBox';
import Hboard from './Hboard';
import BoardText from './function/BoardText';
import TitleBox from './function/TitleBox';

class Hanbit extends Component {
    render() {
        return (
            <div className="Hanbit_Contatiner">
                <div className="TopBanner">
                    <BoardBanner></BoardBanner>
                </div>
                <div className="Hanbit_Contents">
                    <HanbitBox {...this.props}></HanbitBox>
                    <div>
                        <TitleBox></TitleBox>
                        <BoardText></BoardText>
                        <Hboard></Hboard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hanbit;