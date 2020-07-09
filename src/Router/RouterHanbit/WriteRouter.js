import React, { Component } from 'react';

import BoardBanner from '../../Pages/HanbitBoard/function/BoardBanner';
import HanbitBox from '../../Components/MenuBox/HanbitBox';
import WriteHanbit from '../../Pages/HanbitBoard/WriteHanbit';


class WriteRouter extends Component {
    render() {
        return (
            <div className="Hanbit_Contatiner">
                <div className="TopBanner">
                    <BoardBanner></BoardBanner>
                </div>
                <div className="Hanbit_Contents">
                    <HanbitBox {...this.props}></HanbitBox>
                    <div>
                        <WriteHanbit></WriteHanbit>
                    </div>
                </div>
            </div>
        );
    }
}

export default WriteRouter;