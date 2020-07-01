import React, { Component } from 'react';
import './style/OpreationChartThree.scss'
import icon from '../../../_asset/image/locationInfo/information-icon-3.png';

class OpreationChartThree extends Component {
    list = [
        { text: '인건비', text2: '1,381,250 원', text3: '1,224,000 원', text4: '기본금, 상여금, 퇴직적립금, 월차수당포함' },
        { text: '복리후생비', text2: '200,175 원', text3: '194,925 원', text4: '고용, 의료, 국민, 산재보험' },
        { text: '보험료', text2: '91,300 원', text3: '60,480 원', text4: '직영 : 업무용 (책임, 종합)', text5: '위탁 : 영업용 (책임, 종합)' },
        { text: '공과금', text2: '9,500 원', text3: '4,300 원', text4: '자동차, 환경개선부담금, 검사비, 면허세', text5: '직영 (업무용), 위탁 (영업용)' },
        { text: '정기보수비', text2: '177,000 원', text3: '177,000 원', text4: '전국 동종 업계 비교' },
        { text: '감가상각·금융비', text2: '282,000 원', text3: '282,000 원', text4: '차량가기준' },
        { text: '식대', text2: '100,000 원', text3: '-', text4: '-' },
        { text: '용역관리비', text2: '-', text3: '100,000 원', text4: '전국 동종 업계 비교' },
        { text: '합계', text2: '2,241,225 원', text3: '2,042,705 원', text4: '-' },
    ]
    render() {
        return (
            <div className="Chart_Container">
                <div className="Chart_TitleBox">
                    <div className="Chart_TextBox">
                        <img src={icon} alt='아이콘'></img>
                        <div className="Chart_Text">직영 및 위탁시 금액분석</div>
                    </div>
                    <div className="Chart_Box">
                        <div className="Chart_Type">
                            <div className="One_Text">
                                항목
                            </div>
                            <div className="Two_Text">
                                직영
                            </div>
                            <div className="Three_Text">
                                위탁
                            </div>
                            <div className="Four_Text">
                                비고
                            </div>
                        </div>
                        <div className="Chart_ListBox">
                            {this.list.map((item, index) => {
                                return (
                                    <div className="Text_List" key={index}>
                                        <div className="One_Text">{item.text}</div>
                                        <div className="Two_Text">{item.text2}</div>
                                        <div className="Three_Text">{item.text3}</div>
                                        <div className="Wrap">
                                            <div className="Three_Text">{item.text4}</div>
                                            <div className="Three_Plus">{item.text5}</div>
                                        </div>
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

export default OpreationChartThree;