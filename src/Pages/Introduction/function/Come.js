import React, { Component } from 'react';
import './style/Come.scss'

class Come extends Component {
    render() {
        return (
            <div className="ComeContainer">
                <div className="Come_TextBox">
                    <div className="Come_Title">
                        오시는 길
                    </div>
                    <div className="Come_Box">
                        <div className="Come_One">주소</div>
                        <div className="Come_Two">서울특별시 강남구 학동로 56길 8, 301(삼성동, 한양빌딩)</div>
                    </div>
                    <div className="Come_Box">
                        <div className="Come_One">전화</div>
                        <div className="Come_Two">1599-9964</div>
                    </div>
                    <div className="Come_Box">
                        <div className="Come_One">팩스</div>
                        <div className="Come_Two">02-517-1493</div>
                    </div>
                    <div className="Come_Box">
                        <div className="Come_One">이메일</div>
                        <div className="Come_Two">hanbitlogis@naver.com</div>
                    </div>
                </div>
                <div className="Hanbit_Map">
                    
                </div>
            </div>
        );
    }
}

export default Come;