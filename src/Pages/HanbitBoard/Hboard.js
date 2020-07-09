import React, { Component } from 'react';
import { data } from "./HanDb";
import BoardText from './function/BoardText';

import { Pagination } from "../../Common/Pagination/Pagination";
import './style/Hboard.scss'
import { NavLink } from 'react-router-dom';

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
                    <div className="Hboard_People">작성자</div>
                    <div className="Hboard_Title">제목</div>
                    <div className="Hboard_Date">작성날</div>
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
                            />
                        )
                    })}
                    <div className="Btn_Area">
                        
                    <div className="Write_Button">
                    <NavLink to="/WriteBoard">글쓰기</NavLink>
                    </div>
                    
                    </div>
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

export default Hboard;