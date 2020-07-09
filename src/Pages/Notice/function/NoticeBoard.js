import React, { Component } from 'react';
import { data } from "../NoticeDb";

import { Pagination } from "../../../Common/Pagination/Pagination";
import './style/NoticeBoard.scss'
import NoticeText from './NoticeText';

class NoticeBoard extends Component {
    state = {
        currentPage: 0,
        cardsPerPage: 7,
        currentPageM: 0,
        cardsPerPageM: 6,

        // cardsperpage -> 보여주고 싶은 박스 개수
    };
    onPageNumberClicked = newPage => event => {
        this.handlePageNumberClicked(newPage);
    };
    onPreviousPageClicked = newPage => event => {
        this.handlePreviousPageClicked(newPage);
    };
    onNextPageClicked = newPage => event => {
        this.handleNextPageClicked(newPage);
    };
    handlePageNumberClicked = (newPage) => {
        // console.log("onPageNumberClicked", newPage);
        this.setState({ currentPage: newPage });
    };
    handlePreviousPageClicked = (newPage) => {
        // console.log("onPreviousPageClicked", newPage);
        this.setState({ currentPage: newPage });
    };
    handleNextPageClicked = (newPage) => {
        //console.log("onNextPageClicked", newPage);
        this.setState({ currentPage: newPage });
    };
    filterData = () =>{
        let getData = data
        let startIndex = this.state.currentPage * this.state.cardsPerPage;
        let endIndex = (this.state.currentPage + 1) * this.state.cardsPerPage;

        return getData.slice(startIndex, endIndex)
    }
    render() {
        return (
            <div className="Notice_Contaier">
                <div className="Notice_TopLine">
                    <div className="Notice_Type">번호</div>
                    <div className="Notice_People">작성자</div>
                    <div className="Notice_Title">제목</div>
                    <div className="Notice_Date">작성날</div>
                </div>
                <div>
                    {this.filterData().map((item, index) => {
                        return (
                            <NoticeText
                                key={index}
                                number={item.number}
                                date={item.date}
                                title={item.title}
                                people= {item.people}
                            />
                        )
                    })}
                </div>
                <Pagination
                    currentPage={this.state.currentPage}
                    cardsPerPage={this.state.cardsPerPage}
                    itemCount={data.length}
                    onPageNumberClicked={this.onPageNumberClicked}
                    onPreviousPageClicked={this.onPreviousPageClicked}
                    onNextPageClicked={this.onNextPageClicked}
                />
            </div>
        );
    }
}

export default NoticeBoard;