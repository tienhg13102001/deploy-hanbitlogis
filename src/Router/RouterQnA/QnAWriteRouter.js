import React, { Component } from 'react';
import QnABanner from '../../Pages/QnA/function/QnABanner';
import QnABox from '../../Components/MenuBox/QnABox';
import QnAWrite from '../../Pages/QnA/function/QnAWrite'

class WriteRouter extends Component {
    render() {
        return (
            <div className="QnA_Write_Contatiner">
                <div className="TopBanner">
                    <QnABanner></QnABanner>
                </div>
                <div>
                    <QnABox {...this.props}></QnABox>
                    <div className="QnA_Write_Board_Area">
                        <QnAWrite></QnAWrite>
                    </div>
                </div>
            </div>
        );
    }
}

export default WriteRouter;