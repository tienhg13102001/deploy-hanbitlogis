import React, { Component } from 'react';
import './style/QnAWrite.scss';
class CommunityReviewWriter extends Component {
    state = {
        title: "",
        name: "",
        password: "",
        description: "",
        checked: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheckBoxChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    render() {
        const { title, name, description, password } = this.state
        return (
            <div className="Write_HanbitBoard_Container">
                <div className="Write_HanbitBoard_Title">QnA 글쓰기</div>
                <div className="Write_HanbitBoard_table">
                    <div className="Write_Title">
                        <div className='leftmenu'>제목</div>
                        <div><input className="Title_input" name="title" value={title} onChange={this.handleChange} placeholder="제목을 입력해주세요."></input></div>
                    </div>
                    <div className="row">
                        <div>
                            <div className='leftmenu'>이름</div>
                            <div><input className="Name_input" name="name" value={name} onChange={this.handleChange} placeholder="이름을 입력해주세요."></input></div>
                        </div>
                        <div>
                            <div className='leftmenu'>비밀번호</div>
                            <div><input className="Password_input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="비밀번호를 입력해주세요."></input></div>
                        </div>
                    </div>
                    <div className="row" style={{ border: 0 }}>
                        <div className='leftmenu'>내용</div>
                        <div><input className="Text_input" name="description" value={description} onChange={this.handleChange} placeholder="내용을 입력해주세요."></input></div>
                    </div>
                </div>
                <div className="privacy-wrap">
                    <div className="title">개인정보처리방침</div>
                    <div className="privacy-box">
                        <div>1. 목적 : 제휴 제안에 따른 연락처 정보 확인</div>
                        <div>2. 항목 : 회사(기관)명, 제안자명, 전화번호, 메일주소</div>
                        <div>3. 보유기간 : 제휴 제안 사항 상담서비스를 위해 검토 완료 후 3개월 간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.</div>
                        <div>더 자세한 내용에 대해서는 [카카오 기업사이트 개인정보처리방침]을 참고하시길 바랍니다.</div>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckBoxChange} id="agree"></input>
                        <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
                    </div>
                </div>
                <div className="register-button-container">
                    <span className="register-button" onClick={this.registerButton}>
                        <p>등록</p>
                        <p>
                            {/* <img src={}></img> 이미지가 들어가야함 */}
                            &#62;
                        </p>
                    </span>
                </div>
            </div>
        );
    }
}

export default CommunityReviewWriter;