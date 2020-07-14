import React, { Component } from 'react';
import './style/TestGuideAptitude.scss';

import icon from '../../../_asset/image/locationInfo/examination-icon-1.png';

import icon01 from '../../../_asset/image/locationInfo/examination-icon-2.png';
import icon02 from '../../../_asset/image/locationInfo/examination-icon-3.png';
import dot from '../../../_asset/image/locationInfo/dot-line-icon-1.png'
import dot2 from '../../../_asset/image/locationInfo/dot-line-icon-2.png'
import img01 from '../../../_asset/image/locationInfo/examination-icon-4.png';
import img02 from '../../../_asset/image/locationInfo/examination-icon-5.png';
import img03 from '../../../_asset/image/locationInfo/examination-icon-6.png';
import img04 from '../../../_asset/image/locationInfo/examination-icon-7.png';

class TestGuideAptitude extends Component {
    list = [
        { number: '01', img: img01, text: '최초 운전적성정밀 검사 수검 후 3년 이내에 취업한 경력이 있는 경우 (무사고 운전자)', dot: dot2, sub: '재직 증명서 1부, 전체기간운전경력증명서 (경찰서장 및 운전면허시험장장 발행) 1부 방문우편접수 기간에 제출' },
        { number: '02', img: img02, text: '운전적성정밀 검사 수검 후 3년 이내에 취업한 경력이 없는 경우 (무경력자)', dot: dot2, sub: '운전적성정밀(신규)검사 수검한 후 시험 응시' }
    ]
    list2 = [
        { number: '03', img: img03, text: '운전적성정밀 검사 수검 후 3년 이내에 취업한 경력은 있으나, 재직기간중 사고를 유발한 경력 ', dot: dot2, sub: '대물사고, 대인(경상)사고 : 운전적성정밀 (신규)검사 수검한 후 시험 응시 대인(중상)사고 : 운전적성정밀 (신규, 특별)검사 수검한 후 시험 응시' },
        { number: '04', img: img04, text: '과거 1년간 운전면허행정처분기준에 의하여 산출된 누산점수가 81점 이상인 경우 ', dot: dot2, sub: '운전적성정밀(신규, 특별)검사 수검한 후 시험 응시' }
    ]
    render() {
        return (
            <div className="Aptitude_Container">
                <div className="Aptitude_Box">
                    <div className="Aptitude_Icon">
                        <img src={icon} alt='적성 검사 아이콘'></img>
                    </div>
                    <div className="Aptitude_Title">
                        ※ 운전적성정밀검사란
                    </div>
                    <div className="Aptitude_Text">
                        사업용자동차운전자의 심리적 상태와 행동, 습관 등을 과학적인 방법으로 측정하여 운전업무 수행 중에 나타날 수
                        있는 개개인의 결함사항을 도출하여 결함요인에 대한 사전대비를 통해 인적요인에 의한 교통사고를 예방하고자
                        교통안전공단 13개 운전적성정밀검사장에서 실시하는 검사입니다.
                    </div>
                </div>
                <div className="Aptitude_Ga">
                    <div className="Ga_Box">
                        <div className="Ga_Title">
                            가.
                        </div>
                        <div className="Ga_Text">
                            교통안전공단 13개 지사에서 실시하는 운전적성정밀검사(신규?특별) 수검자만 시험 응시 가능 운전적성 정밀검사 미수검자는<br />
                        반드시 수검 후 시험응시 가능
                        </div>
                    </div>
                    <div className="Ga_IconBox">
                        <div className="Ga_Icon">
                            <img className="Ga_Img" src={icon01} alt='적성 검사 아이콘'></img>
                            <div className="Ga_Icon_Text">
                                운전정밀 검사장 안내 및 운전정밀검사 대해 알아보기
                            </div>
                        </div>
                        <div className="Dot_Line">
                            <img src={dot} alt="Dot_Line"></img>
                        </div>
                        <div className="Ga_Icon">
                            <img className="Ga_Img" src={icon02} alt='적성 검사 아이콘'></img>
                            <div className="Ga_Icon_Text">
                                운전정밀(신규)검사 최초 수검 후 접수일 마감 기준 3년 미경과자&#60;시험응시&#62;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Aptitude_Ga">
                    <div className="Ga_Box">
                        <div className="Ga_Title">
                            나.
                        </div>
                        <div className="Ga_Text">
                            운전적성정밀(신규)검사 수검 후 시험 접수일 마감 기준으로 3년 경과자는 아래의 조건에 따라 시험을 응시하시기 바랍니다.
                        </div>
                    </div>
                    <div className="Na_IconBox">
                        {this.list.map((item, index) => {
                            return (
                                <div className="Na_Icon" key={index}>
                                    <div className="Na_ImgBox">
                                        <div className="Na_Number">{item.number}</div>
                                        <img className="Na_Img" src={item.img} alt='아이콘'></img>
                                    </div>
                                    <div className="Na_Text">{item.text}</div>
                                    <img className="Na_Dot" src={item.dot} alt='Dot_Line2'></img>
                                    <div className="Na_SubText">{item.sub}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="Na_IconBox">
                        {this.list2.map((item, index) => {
                            return (
                                <div className="Na_Icon" key={index}>
                                    <div className="Na_ImgBox">
                                        <div className="Na_Number">{item.number}</div>
                                        <img className="Na_Img" src={item.img} alt='아이콘'></img>
                                    </div>
                                    <div className="Na_Text">{item.text}</div>
                                    <img className="Na_Dot" src={item.dot} alt='Dot_Line2'></img>
                                    <div className="Na_SubText">{item.sub}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="Move_Page">
                        <a href='http://www.ts2020.kr/' target="blank"><div className="Apti_Btn">교통안전공단 홈페이지 바로 가기</div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestGuideAptitude;