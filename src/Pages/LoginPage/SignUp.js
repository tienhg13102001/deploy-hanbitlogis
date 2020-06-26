import React, { Component } from 'react';
import './style/SignUp.scss'


class SignUp extends Component {
    state = {
        adress: '',
        email: '',
        password: '',
        confilm: '',
        name: '',
        nickname: '',
        checked: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    render() {
        return (
            <div className="SignContainer">
                <div className="TextBox">
                    <div className="SignTitle">회원가입</div>
                    <div className="SignText">회원가입에 필요한 정보를 입력해주세요.</div>
                </div>
                <form className="SignBox">
                    <div className="Wrap">
                        <div className="Text">
                            주소<span>*</span>
                        </div>
                        <input className="Adress"
                            placeholder="주소"
                            value={this.state.adress}
                            onChange={this.handleChange}
                            name="adress"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            비밀번호<span>*</span>
                        </div>
                        <input className="Password"
                            placeholder="비밀번호"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            비밀번호 확인<span>*</span>
                        </div>
                        <input className="PasswordConfilm"
                            placeholder="비밀번호 확인"
                            value={this.state.passwordconfilm}
                            onChange={this.handleChange}
                            name="passwordconfilm"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            이메일 주소<span>*</span>
                        </div>
                        <input className="Email"
                            placeholder="이메일 주소"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            이름<span>*</span>
                        </div>
                        <input className="Name"
                            placeholder="이름"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            닉네임<span>*</span>
                        </div>
                        <input className="NickName"
                            placeholder="닉네임"
                            value={this.state.nickname}
                            onChange={this.handleChange}
                            name="nickname"
                        />
                    </div>
                    <div className="Wrap">
                        <div className="Text">
                            생일<span>*</span>
                        </div>
                        <input className="Birth"
                            placeholder="생일"
                            value={this.state.birth}
                            onChange={this.handleChange}
                            name="birth"
                        />
                    </div>
                </form>
                <div className="BtnBox">
                    <div className="Registration">등록</div>
                        <div className="Cancellation">취소</div>
                </div>
            </div>
        );
    }
}

export default SignUp;