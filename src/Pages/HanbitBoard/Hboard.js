import React, { Component } from 'react';
import { data } from "./HanDb";
import BoardText from './function/BoardText';

import { Pagination } from "../../Common/Pagination/Pagination";
import './style/Hboard.scss'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
class Hboard extends Component {
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

    componentDidMount = () => {
        this.getAllList()
    }
    getAllList = async () => {
        const rID = 'hanbit_notice'
        await axios.get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

        .then(response => {
            console.log(response.data.data.rows)
            if (response && response.data && response.data.data && response.data.data.rows) {
                this.setState({
                    ...this.state,
                    list : response.data.data.rows
                })
            }
            else {
                console.error('error')
            }
        })
        .catch( e => console.log(e))
    }

    renderList = () => {
        const list = this.state.list
        let startIndex = this.state.currentPage * this.state.cardsPerPage;
        let endIndex = (this.state.cardsPerPage + 1) * this.state.cardsPerPage;

        return list.slice(startIndex, endIndex)
    }

    render() {
        console.log(this.state.list)
        return (
            <div className="Hboard_Contaier">
                <div className="Hboard_TopLine">
                    <div className="Hboard_Type">번호</div>
                    <div className="Hboard_People">작성자</div>
                    <div className="Hboard_Title">제목</div>
                    <div className="Hboard_Date">작성날</div>
                </div>
                <div>
                    {this.state.list.map((item, index) => {
                        return (
                            <NavLink className="Link" to="/HanbitBoard/InBoard">
                            <BoardText
                                key={index}
                                number={item.number}
                                date={item.lastUpdateDate}
                                title={item.resources[0].data[0]}
                                people={item.name}
                            /></NavLink>
                        )
                    })}
                    <div className="Btn_Area">
                        
                    <div className="Write_Button">
                    <NavLink to="/HanbitBoard/WriteBoard">글쓰기</NavLink>
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