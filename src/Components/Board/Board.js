import React, { Component } from 'react';
import './Board.scss'

import icon from '../../_asset/image/common/add-icon.png'
import { NavLink } from 'react-router-dom';

class Board extends Component {
    list = [
        { id: 0, text: '당사는 최고의 물류 전문 회사', date: '2022.04.11' },
        { id: 1, text: '한빛로지스 국토부장관상 수상!', date: '2022.04.11' },
        { id: 2, text: '향상된 서비스를 제공할 것을 약속드립니다.', date: '2022.04.11' },
        { id: 3, text: '당사는 최고의 물류 전문 회사', date: '2022.04.11' },
    ]
    render() {

        return (
            <div className="Notice">
                <div className="TitleBox">
                    <div className="Title">
                        공지사항
                    </div>
                    <NavLink to="/Notice">
                        <img className="Icon" src={icon} alt='plus icon'></img>
                    </NavLink>
                </div>
                <div className="TextBox">
                    {this.list.map((item, index) => {
                        return (
                            <div className="Box" key={index}>
                                <div className="Text">{item.text}</div>
                                <div className="Date">{item.date}</div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Board;