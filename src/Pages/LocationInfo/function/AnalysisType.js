import React, { Component } from 'react';
import { data } from "./Db";

import './style/AnalysisType.scss'

class AnalysisType extends Component {
    state = {
        getData: []
    }
    getDataList = () => {
        this.setState({
            getData: data
        })
    }
    componentDidMount = () => {
        this.getDataList();
    }
    render() {
        const { getData } = this.state
        return getData.map(item => {
            return (
                <div className="Type_Container">
                    <div className="Type_TextBox">
                        <div className="Type_Text">
                            Car type
                    </div>
                        <div className="Type_Title">
                            지입 차량의 <span>종류</span>
                        </div>
                    </div>
                    <div className="Chart">
                        <div className="Chart_TitleBox">
                            <div className="Chart_Title">
                                · 적재 화물에 따른 분류
                        </div>
                        </div>
                        <div className="Chart_Box">
                            <div className="TypeBox">
                                <div className="Type">{item.type}</div>
                                <div className="Type">{item.type2}</div>
                                <div className="Type">{item.type3}</div>
                            </div>
                            <div className="Text_List">
                                <div className="One">{item.text}</div>
                                <div className="One">{item.text2}</div>
                                <div className="One">{item.text3}</div>
                            </div>
                            <div className="Text_List">
                                <div className="One">{item.text4}</div>
                                <div className="One">{item.text5}</div>
                                <div className="One">{item.text6}</div>
                            </div>
                            <div className="Text_List">
                                <div className="One">{item.text7}</div>
                                <div className="One">{item.text8}</div>
                                <div className="One">{item.text9}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}

export default AnalysisType;