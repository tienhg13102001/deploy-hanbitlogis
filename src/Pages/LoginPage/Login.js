import React, { Component } from "react";

import "./style/Login.scss";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    checked: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCheck = (e) => {
    const {
      target: { checked },
    } = e;
    this.setState({ checked });
  };
  render() {
    return (
      <div className="LoginContainer">
        <div className="TextBox">
          <div className="LoginTitle">직원 로그인</div>
        </div>
        <form className="LoginBox">
          <input
            type="text"
            className="Id"
            placeholder="아이디"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input
            type="password"
            className="Password"
            placeholder="비밀번호"
            // value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <div className="Middle">
            <input
              className="CheckBox"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheck}
            />
            <div className="MiddleText">로그인 상태 유지</div>
          </div>
          <div className="LogBtn">로그인</div>
        </form>
        <div className="Login_Text">
          이 페이지는 직원 전용 페이지입니다.
          <br /> 아이디가 없을 경우에 관리자에게 문의해주세요.
        </div>
      </div>
    );
  }
}

export default Login;
