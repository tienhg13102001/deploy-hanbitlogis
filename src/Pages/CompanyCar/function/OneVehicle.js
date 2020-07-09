import React, { Component } from 'react';
import './style/OneVehicle.scss'
import { data } from './BoardDb'
import { Link } from 'react-router-dom';
import BoardButton from '../../../Common/BoardButton';

class OneVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            visible: 7,
        }
    }

    loadmore() {
        this.setState((old) => {
            return { visible: old.visible + 1 }
        })
    }


    render() {
        return (
            <div className="Vehicle_Container">
                <div className="Vehicle_TitleBox">
                    <div className="Vehicle_Title">
                        당사차량 [1톤]
                    </div>
                    <div className="Vehicle_TopLine">
                        <div className="Top_Line">번호</div>
                        <div className="Top_Line">내용</div>
                        <div className="Top_Line">종류</div>
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
                <BoardButton></BoardButton>
            </div>
        );
    }
}

export default OneVehicle;