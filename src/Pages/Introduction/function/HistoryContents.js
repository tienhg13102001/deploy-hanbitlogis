import React, { Component } from 'react';
import './style/HistoryContents.scss'
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Details',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'black' : 'black';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
},
];



const data = [
  {
    key: '1',
    year: '2015년',
    month: '05월',
    details: '홈페이지 개편',
    tags: ['홈페이지', '리뉴얼'],
  },
  {
    key: '2',
    year: '2014년',
    month: '01월',
    details: '정보 시스템 부서 개설',
    tags: ['시스템'],
  },
  {
    key: '3',
    year: '2013년',
    month: '02월',
    details: '서울특별시 지체 장애인 협회 협력사 등록',
    tags: ['협력사'],
  },
  {
    key: '3',
    year: '2007년',
    month: '05월',
    details: '서울체신청 우수업체로 선정',
    tags: ['우수업체 선정'],
  },
  {
    key: '5',
    year: '2006년',
    month: '06월',
    details: '서울시장 우수기업 표창',
    tags: ['서울시장 표창'],
  },
  {
    key: '6',
    year: '2004년',
    month: '02월',
    details: '복합운송주선협등록 등록번호 (제 2315호) 전국 화물자동차 연합회 우수기업 표창',
    tags: ['우수기업 표창'],
  },
  {
    key: '7',
    year: '2004년',
    month: '04월',
    details: '국방부 조당청 외자등록 사단법인 한국수입업협회 회원등록',
    tags: ['협력사'],
  },
  {
    key: '8',
    year: '2003년',
    month: '05월',
    details: '경기도 연천군 합수리 차고지 200평 구입',
    tags: ['협력사'],
  },
  {
    key: '9',
    year: '2002년',
    month: '05월',
    details: '한빛로지스 주식회사 대표이사 이정화 취임',
    tags: ['협력사'],
  },
  {
    key: '10',
    year: '2001년',
    month: '05월',
    details: '한빛로지스 주식회사 본사(현) 사무실 이전',
    tags: ['협력사'],
  },
  {
    key: '11',
    year: '2000년',
    month: '05월',
    details: '주식회사 한빛통운 설립',
    tags: ['협력사'],
  },
  {
    key: '12',
    year: '1999년',
    month: '01월',
    details: '경기도 여수군 수정리 차고지 구입',
    tags: ['협력사'],
  },
  {
    key: '13',
    year: '1998년',
    month: '05월',
    details: '협력사별 50 - 100평 창고 2개 보유',
    tags: ['협력사'],
  },
  {
    key: '14',
    year: '1997년',
    month: '08월',
    details: '21세기 종합물류 주식회사 창립',
    tags: ['협력사'],
  },
];
class HistoryContents extends Component {
    
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
                <Table  columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}

export default HistoryContents;