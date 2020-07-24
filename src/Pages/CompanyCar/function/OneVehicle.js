import React, { Component } from 'react';
import './style/OneVehicle.scss'
import { data } from './BoardDb'
import { Link } from 'react-router-dom';
import { Pagination } from "../../../Common/Pagination/Pagination";

class OneVehicle extends Component {
    state = {
        currentPage: 0,
        cardsPerPage: 7,
        currentPageM: 0,
        cardsPerPageM: 6,
        list : []

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
    renderList = () => {
        const list = this.state.list
        let startIndex = this.state.currentPage * this.state.cardsPerPage;
        let endIndex = (this.state.cardsPerPage + 1) * this.state.cardsPerPage;

        return list.slice(startIndex, endIndex)
    }


    render() {
        return (
            <div className="Vehicle_Container">
                <div className="Vehicle_TitleBox">
                    <div className="Vehicle_Title">
                        당사차량 [1톤]
                    </div>
                    <div className="Vehicle_TopLine">
                        <div className="Top_Line_one">번호</div>
                        <div className="Top_Line_two">내용</div>
                        <div className="Top_Line_three">종류</div>
                    </div>
                    <div className="Vehicle_Board">
                        {data.slice(0, this.state.visible).map((item, index) => {
                            return (
                                <div className="Board_List" key={index}>
                                    <Link to="/InVehicle"><div className="List_One">{item.number}</div></Link>
                                    <Link to="/InVehicle"><div className="List_Two">{item.content}</div></Link>
                                    <Link to="/InVehicle"><div className="List_Three">{item.kind}</div></Link>
                                </div>
                            )
                        })}
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

export default OneVehicle;