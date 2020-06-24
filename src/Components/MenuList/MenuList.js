import React, { Component } from 'react';
import './style/MenuList.scss'

class MenuList extends Component {
    render() {
        return (
            <div className="Menu_List">
                <div className="Menu">한빛로지스</div>
                <div className="Menu">회사소개</div>
                <div className="Menu">지입정보</div>
                <div className="Menu">당사차량</div>
                <div className="Menu">한빛게시판</div>
                <div className="Menu">공지사항</div>
                <div onClick={() => this.movePage("/QnA")} className="top_seven">QnA</div>
            </div>
        );
    }
}

export default MenuList;