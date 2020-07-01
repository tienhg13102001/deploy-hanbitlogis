import React, { Component } from 'react';
import './style/AnalysisChart.scss'

class AnalysisChart extends Component {
    list = [
        { text:'직영 차량', text2:'화주인 업체에서 차를 직접 구입해 운전기사를 채용하여 관리하는 차량'},
        { text:'지입 차량', text2:'운송회사 명의로 되어 있는 고객업체 (화주) 에게 계약기간 동안 투입되는 차량 (회사직영차, 개인위탁차의 형태)'},
        { text:'용차', text2:'필요시에 따라 그때 그때 쓰여지는 영업용 차량'},
    ]
    render() {
        return (
            <div className="Chart_Container">
                <div className="Chart_TitleBox">
                    <div className="Chart_Title">
                        · 운영 주체에 따른 분류
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

export default AnalysisChart;