import React, { Component } from 'react';
import './style/TestGuideCertificate.scss';

import arrowicon from '../../../_asset/image/locationInfo/arrow-icon.png';
import icon01 from '../../../_asset/image/locationInfo/certificate-icon-1.png';
import icon02 from '../../../_asset/image/locationInfo/certificate-icon-2.png';
import icon03 from '../../../_asset/image/locationInfo/certificate-icon-3.png';
import icon04 from '../../../_asset/image/locationInfo/certificate-icon-4.png';

class TestGuideCertificate extends Component {
    list = [
        { id: 0, icon: icon01, text: '운전적성 정밀검사 (신규, 특별수검)', arrow: arrowicon, arrowtext: '적합판정' },
        { id: 1, icon: icon02, text: '자격 시험 응시', arrow: arrowicon, arrowtext: '합격' },
        { id: 2, icon: icon03, text: '합격자 교육 (1일 8시간)', arrow: arrowicon },
        { id: 3, icon: icon04, text: '자격증 발급', arrow: arrowicon, }
    ]
    render() {
        return (
            <div className="CertificateContainer">
                <div className="Certi_TitleBox">
                    <div className="Certi_Title">
                        <span>응시 자격</span> 안내
                    </div>
                    <div className="Certi_Text">
                        자격증 발급 절차
                    </div>
                </div>
                <div className="Certi_TextBox">
                    <div className="Certi_List">
                        <div className="Certi_One">
                            연령
                        </div>
                        <div className="Certi_Three">
                            만 21세 이상(접수일 마감 기준)
                        </div>
                    </div>
                    <div className="Certi_List2">
                        <div className="Certi_Wrap">
                            <div className="Certi_One">
                                운전면허
                        </div>
                        </div>
                        <div className="Certi_Wrap2">
                            <div className="Certi_Two">
                                1종 보통 면허 이상 소지자로 아래의 조건중 가 또는 나를 충족한 자만 시험응시 가능
                        </div>
                            <div className="Certi_Three">
                                1. 자가용운전경력 3년 이상인 경우(운전면허 취득일 기준)   (소형면허(1종, 2종), 2종 원동기 면허, 연습면허,
                                면허정지 및 취소기간을 제외한 전체기간운전 경력을 인정(2종 보통면허, 1종 보통면허ㆍ대형면허ㆍ특수면허 기간만 인정)
                        </div>
                            <div className="Certi_Three">
                                2. 사업용(영업용)자동차 운전경력 1년 이상   (자가용 운전경력(면허취득일 기준) 3년이 되지 않는 응시자로
                                사업용 화물경력을 제외한 버스 및 택시(사업용 자동차)의 운전경력이 1년이 경과된 자 )
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Certi_ListBox">
                    {this.list.map((item, index) => {
                        if (index === this.list.length - 1) {
                            return (
                                <div className="Certi_MapBox" key={index}>
                                    <div className="Certi_map_area">
                                        <img className="Certi_map_img" src={item.icon} alt='자격 이미지'></img>
                                        <div className="Certi_map_arrow_box">
                                            <div className="Certi_map_arrow_text">{item.arrowtext}</div>
                                        </div>
                                    </div>
                                    <div className="Certi_map_text_box">
                                        <div className="Certi_map_text">{item.text}</div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="Certi_MapBox" key={index}>
                                    <div className="Certi_map_area">
                                        <img className="Certi_map_img" src={item.icon} alt='자격 이미지'></img>
                                        <div className="Certi_map_arrow_box">
                                            <img className="Certi_map_icon" src={item.arrow} alt='자격 화살표'></img>
                                            <div className="Certi_map_arrow_text">{item.arrowtext}</div>
                                        </div>
                                    </div>
                                    <div className="Certi_map_text_box">
                                        <div className="Certi_map_text">{item.text}</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default TestGuideCertificate;