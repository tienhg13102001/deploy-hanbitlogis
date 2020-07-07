import React, { Component } from 'react';
import { slide as BurMenu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import './style/Navigation.scss'

import closeicon from '../../_asset/image/common/xbotton.png'
import logo from '../../_asset/image/common/logo.png'
import menuicon from '../../_asset/image/common/menu-icon.png'
import Guide from '../Guide/Guide';



class Navigation extends Component {
    movePage = (pageName) => {
        this.props.history.push({
            pathname: pageName
        })
    }
    render() {
        return (
            <div className="NaviContainer">
                <div className="TopNavi">
                        <div onClick={() => this.movePage("/")} className="Menu_Logo">
                            <img src={logo} alt='Logo'></img>
                        </div>
                        <Guide />
                    <div className="Member_Box">
                        <div onClick={() => this.movePage("/Login")} className="Login">로그인</div>
                        <div onClick={() => this.movePage("/Sign")} className="Sign_Up">회원가입</div>

                        <BurMenu className="Menu_Button" right customCrossIcon={<img src={closeicon} alt='closeicon' />} customBurgerIcon={<img className='MenuIcon' src={menuicon} alt=""></img>}>
                            <NavLink exact={true} id="home" ClassName="menu-item" to="/">한빛로지스</NavLink>
                            <NavLink id="Company" ClassName="menu-item" to="/Intro">회사소개</NavLink>
                            <NavLink id="Info" ClassName="menu-item" to="/Info">지입정보</NavLink>
                            <NavLink id="Car" ClassName="menu-item" to="/Vehicle">당사차량</NavLink>
                            <NavLink id="Board" ClassName="menu-item" to="/HanbitBoard">한빛게시판</NavLink>
                            <NavLink id="Notice" ClassName="menu-item" to="/Notice">공지사항</NavLink>
                            <NavLink id="QnA" ClassName="menu-item" to="/QnA">QnA</NavLink>
                        </BurMenu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;



