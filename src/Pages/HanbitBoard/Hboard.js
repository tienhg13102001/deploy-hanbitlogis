import React, { Component } from 'react';
import { data } from "./HanDb";
import BoardText from './function/BoardText';

import './style/Hboard.scss'
import BoardButton from '../../Common/BoardButton';

class Hboard extends Component {
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
            <div className="Hboard_Contaier">
                <div className="Hboard_TopLine">
                    <div className="Hboard_Type">번호</div>
                    <div className="Hboard_Date">작성날</div>
                    <div className="Hboard_Title">제목</div>
                    <div className="Hboard_People">작성자</div>
                    <div className="Hboard_View">조회수</div>
                </div>
                <div>
                    {this.filterData().map((item, index) => {
                        return (
                            <BoardText
                                key={index}
                                number={item.number}
                                date={item.date}
                                title={item.title}
                                people={item.people}
                                view={item.view}
                            />
                        )
                    })}
                </div>
                <BoardButton></BoardButton>
            </div>
        );
    }
}

export default Hboard;