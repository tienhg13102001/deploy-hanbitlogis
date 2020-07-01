import React, { Component } from 'react';
import './style/AnalysisChart.scss'

class AnalysisChartTwo extends Component {
    list = [
        { text:'자가용 차량', text2:'개인이나 법인에 소속된 녹색넘버 차량으로, 허가된 범위내의 물품만 배송 (타 물품 배송불허)'},
        { text:'영업용 차량', text2:'운송 사업자 등록을 필한 운수 회사 차량을 개인이 구매하여 운송을 담당하는 차량'}
    ]
    render() {
        return (
            <div className="Chart_Container">
                <div className="Chart_TitleBox">
                    <div className="Chart_Title">
                        · 차량 용도에 따른 분류
                    </div>
                </div>
                <div className="Chart">
                    <div className="Chart_Type">
                        <div className="Type_One">
                            차량 형태
                        </div>
                        <div className="Type_Two">
                            설명
                        </div>
                    </div>
                    <div className="Chart_TextBox">
                        {this.list.map((item, index) => {
                            return(
                                <div className="Text_List">
                                    <div className="One_Text">{item.text}</div>
                                    <div className="Two_Text">{item.text2}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AnalysisChartTwo;