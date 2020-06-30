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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6251853447343!2d127.04003211566126!3d37.51675743473423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4751976494d%3A0x121b7bb610d91f44!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDsgrzshLHrj5kg7ZWZ64-Z66GcNTbquLggOA!5e0!3m2!1sko!2skr!4v1593484055211!5m2!1sko!2skr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        );
    }
}

export default Come;