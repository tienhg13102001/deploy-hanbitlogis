import React, { Component } from 'react';
import './style/OperationChart.scss'
import icon from '../../../_asset/image/locationInfo/information-icon-2.png';

class OpreationChartTwo extends Component {
    list = [
        { text:'차량 구입비', text2:'(직영기사 운영) 일시에 많은 자금 소요', text3:'(전문회사 / 위탁운영) 차량구입 용역 회사 부담'},
        { text:'인건비', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'음상여금 / 수당', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'보험금 (종합·산재·적하)', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'운행비', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'차량감가상각비', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'퇴직금 / 연금', text2:'기업부담', text3:'해당없음'},
        { text:'각종 제세 공과금', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'사고 보상비 (보험 외 비용)', text2:'기업부담', text3:'차량관리사 부담'},
        { text:'벌칙금', text2:'기업 / 기사 공동부담', text3:'차량관리사 부담'},
    ]
    render() {
        return (
            <div className="Chart_Container">
                <div className="Chart_TitleBox">
                    <div className="Chart_TextBox">
                        <img src={icon} alt='아이콘'></img>
                        <div className="Chart_Text">경제성 분석</div>
                    </div>
                    <div className="Chart_Box">
                        <div className="Chart_Type">
                            <div className="Type_Text">
                                구분
                            </div>
                            <div className="Type_Text">
                                기업체 운영
                            </div>
                            <div className="Type_Text">
                                차량 관리사
                            </div>
                        </div>
                        <div className="Chart_ListBox">
                            {this.list.map((item, index) => {
                                return (
                                    <div className="Text_List" key={index}>
                                        <div className="One_Text">{item.text}</div>
                                        <div className="Two_Text">{item.text2}</div>
                                        <div className="Three_Text">{item.text3}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OpreationChartTwo;