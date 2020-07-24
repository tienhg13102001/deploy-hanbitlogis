import React, { Component } from 'react';
import './style/OperationChartTwo.scss'
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
            <div className="analysis_Chart_two">
                <div className="analysis_chart_box_two">
                    <div className="Chart_Title_title_two">
                        <img src={icon} alt='아이콘'></img>
                        <div className="Analysis_Chart_Text_Area">경제성 분석</div>
                    </div>
                    <div className="Chart_Box">
                        <div className="Chart_Type">
                            <div className="Type_Text_One">
                                구분
                            </div>
                            <div className="Type_Text_Two">
                                기업체 운영
                            </div>
                            <div className="Type_Text_Three">
                                차량 관리사
                            </div>
                        </div>
                        <div className="Chart_two_list">
                            {this.list.map((item, index) => {
                                return (
                                    <div className="Text_two_box" key={index}>
                                        <div className="analysis_Chart_text_one">{item.text}</div>
                                        <div className="analysis_Chart_text_one">{item.text2}</div>
                                        <div className="analysis_Chart_text_one">{item.text3}</div>
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