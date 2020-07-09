import React, { Component } from 'react';

import './style/Hanbit.scss'
import {Route} from 'react-router-dom';

import BoardBanner from './function/BoardBanner';
import HanbitBox from '../../Components/MenuBox/HanbitBox';
import TitleBox from './function/TitleBox';
import WriteBoard from './WriteHanbit';
import InHanbit from './function/InHanbit';

class Hanbit extends Component {
    render() {
        return (
            <div className="Hanbit_Contatiner">
                <div className="TopBanner">
                    <BoardBanner></BoardBanner>
                </div>
                <div className="Hanbit_Contents">
                    <HanbitBox {...this.props}></HanbitBox>
                    <Route exact path={`${this.props.match.path}`} component={TitleBox}></Route>
                    <Route path={`${this.props.match.path}/InBoard`} component={InHanbit}></Route>
                    <Route path={`${this.props.match.path}/WriteBoard`} component={WriteBoard}></Route>
                </div>
            </div>
        );
    }
}

export default Hanbit;