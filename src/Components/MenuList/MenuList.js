import React, { Component } from 'react';

class MenuList extends Component {
    render() {
        return (
            <div className="Menu_List">
                    <div onClick={()=> this.movePage("/Home")} className="top_one">한빛로지스</div>
                    <div onClick={()=> this.movePage("/About")} className="top_two">회사소개</div>
                    <div onClick={()=> this.movePage("/Info")} className="top_three">지입정보</div>
                    <div onClick={()=> this.movePage("/CompanyCar")} className="top_four">당사차량</div>
                    <div onClick={()=> this.movePage("/Board")} className="top_five">한빛게시판</div>
                    <div onClick={()=> this.movePage("/Notice")} className="top_six">공지사항</div>
                    <div onClick={()=> this.movePage("/QnA")} className="top_seven">QnA</div>
            </div>
        );
    }
}

export default MenuList;