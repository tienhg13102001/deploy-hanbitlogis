import React, { Component } from 'react';
import './style/Find.scss'

class Find extends Component {
    render() {
        return (
            <div className="FindContainer">
                <div className="FindWrap">
                    <div className="TitleBox">
                        <div className="Title">이메일 주소로 계정 찾기</div>
                        <div className="Text">가입 시 등록한 이메일 주고를 입력해주세요.</div>
                    </div>
                    <form>
                        <input className="EmailFind"
                            placeholder="이메일 주소"
                        />
                        <div className="Btn">찾기</div>
                    </form>
                </div>
                <div className="FindWrap">
                    <div className="TitleBox">
                        <div className="Title">인증메일 재발송</div>
                        <div className="Text">인증 메일을 받지 못한 경우에는 재발송이 가능합니다.</div>
                    </div>
                    <form>
                        <input className="EmailFind"
                            placeholder="이메일 주소"
                        />
                        <div className="Btn">찾기</div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Find;