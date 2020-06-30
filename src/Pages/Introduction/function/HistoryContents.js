import React, { Component } from 'react';
import './style/HistoryContents.scss'

class HistoryContents extends Component {
    list = [
        { year: '2015년-', month: '05월', text: '홈페이지 개편' },
        { year: '2014년', month: '01월', text: '정보 시스템 부서 개설' },
        { year: '2013년', month: '02월', text: '서울특별시 지체 장애인 협회 협력사 등록' },
        { year: '2007년', month: '05월', text: '서울체신청 우수업체로 선정' },
        { year: '2006년', month: '06월', text: '서울시장 우수기업 표창' },
        { year: '2004년', month: '02월', text: '복합운송주선협등록 등록번호 (제 2315호) 전국 화물자동차 연합회 우수기업 표창' },
        { month: '04월', text: '국방부 조당청 외자등록', text2: '사단법인 한국수입업협회 회원등록' },
        { year: '2003년', month: '05월', text: '경기도 연천군 합수리 차고지 200평 구입' },
        { year: '2002년', month: '05월', text: '한빛로지스 주식회사 대표이사 이정화 취임' },
        { year: '2001년', month: '05월', text: '한빛로지스 주식회사 본사(현) 사무실 이전' },
        { year: '2000년', month: '05월', text: '주식회사 한빛통운 설립' },
        { year: '1999년', month: '04월', text: '주식회사 한빛특송 설립', text2:'경기도 여주군 수정리 차고지 구입' },
        { month: '05월', text: '경기도 여주군 수정리 사무실 및 사택 준공' },
        { year: '1998년', month: '05월', text: '협력사별 50 - 100평 창고 2개 보유' },
        { year: '1997년', month: '08월', text: '21세기 종합물류 주식회사 창립' },
        { month: '11월', text: '본사 직영 200여평 2개소의 창고 준공' },

    ]
    render() {
        return (
            <div className="HisContainer">
                <div className="HisTextBox">
                    <div className="His_Title">
                        회사 <span>연혁</span>
                    </div>
                    <div className="His_Text">
                        한빛로지스에서 화물 운수의 새로운 역사가 쓰여집니다.
                    </div>
                </div>
                <div className="His_List">
                    {this.list.map((item, index) => {
                        return (
                            <div className="List_Box" key={index}>
                                <div className="Box_Year">{item.year}</div>
                                <div className="Box_Month">{item.month}</div>
                                <div className="Colum_Wrap">
                                    <div className="Box_Text">{item.text}</div>
                                    <div className="Box_Text2">{item.text2}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default HistoryContents;