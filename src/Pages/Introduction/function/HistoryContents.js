import React from "react";
import "./style/HistoryContents.scss";

const data = [
  {
    year: "2021년",
    month: "02월",
    details: "현 사무실 이전",
  },
  {
    year: "2015년",
    month: "10월",
    details: "국토교통부장관 우수업체 표창 수상 (10월 15일)",
  },
  {
    year: "2015년",
    month: "05월",
    details: "홈페이지 개편",
  },
  {
    year: "2014년",
    month: "01월",
    details: "정보 시스템 부서 개설",
  },
  {
    year: "2013년",
    month: "02월",
    details: "서울특별시 지체 장애인 협회 협력사 등록",
  },
  {
    year: "2007년",
    month: "05월",
    details: "서울체신청 우수업체로 선정",
  },
  {
    year: "2006년",
    month: "06월",
    details: "서울시장 우수기업 표창",
  },
  {
    year: "2004년",
    month: "02월",
    details:
      "복합운송주선협등록 등록번호 (제 2315호)\n 전국 화물자동차 연합회 우수기업 표창",
  },
  {
    key: "1",
    year: "2004년",
    month: "04월",
    details: "국방부 조당청 외자등록\n 사단법인 한국수입업협회 회원등록",
  },
  {
    year: "2002년",
    month: "05월",
    details: "한빛로지스 주식회사 대표이사 이정화 취임",
  },
  {
    year: "2001년",
    month: "05월",
    details: "한빛로지스 주식회사 본사(현) 사무실 이전",
  },
  {
    year: "2000년",
    month: "05월",
    details: "주식회사 한빛통운 설립",
  },
  {
    year: "1998년",
    month: "05월",
    details: "협력사별 50 - 100평 창고 2개 보유",
  },
  {
    year: "1997년",
    month: "08월",
    details: "21세기 종합물류 주식회사 창립",
  },
];
const HistoryContents = () => {
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
        {data.map((i, e) => {
          return (
            <div className="Table_list" key={e}>
              <div className="Box_Year">{i.year}</div>
              <div className="Box_Month">{i.month}</div>
              <div className="Box_Text">
                {i.details.split("\n").map((e) => (
                  <span>
                    {e}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryContents;
