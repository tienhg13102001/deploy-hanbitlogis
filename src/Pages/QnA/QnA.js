import React, { Component } from 'react';
import QnABanner from '../QnA/function/QnABanner'
import QnABox from '../../Components/MenuBox/QnABox'
import './style/QnA.scss'
import { Route } from "react-router-dom";

import QnATitleBox from './function/QnATitleBox';
import InQnA from './function/InQnA';
import WriteQnA from '../QnA/function/QnAWrite';

class QnA extends Component {
    render() {
        return (
            <div className="QnA_Contatiner">
                <div className="TopBanner">
                    <QnABanner></QnABanner>
                </div>
                <div className="QnA_Contents">
                    <QnABox {...this.props}></QnABox>
                    <Route exact path={`${this.props.match.path}`} component={QnATitleBox}></Route>
                    <Route path={`${this.props.match.path}/InQnA`} component={InQnA}></Route>
                    <Route path={`${this.props.match.path}/WriteQnA`} component={WriteQnA}></Route>
                </div>
            </div>
        );
    }
}

export default QnA;