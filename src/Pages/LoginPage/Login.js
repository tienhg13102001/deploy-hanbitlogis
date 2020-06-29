import React, { Component } from 'react';

import './style/Login.scss'
import { NavLink } from 'react-router-dom';

class Login extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        checked: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheck = (e) => {
        const { target: { checked } } = e;
        this.setState({ checked });
    }
    render() {
        return (
            <div className="LoginContainer">
                <div className="TextBox">
                    <div className="LoginTitle">로그인</div>
                </div>
                <form className="LoginBox">
                    <input className="Id"
                        placeholder="아이디"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <input className="Password"
                        placeholder="비밀번호"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />
                    <div className="Middle">
                        <input className="CheckBox"
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.handleCheck}
                        />
                        <div className="MiddleText">
                            로그인 상태 유지
                    </div>
                    </div>
                    <div className="LogBtn">
                        로그인
                    </div>
                    <div className="Account">
                        <NavLink to="/Find">
                        <div className="Find">ID / PW 찾기</div>
                        </NavLink>
                        <div>|</div>
                        <NavLink to="/Sign">
                        <div className="Sign">회원가입</div>
                        </NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;