import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import './style/Navigation.scss'

import menuicon from '../../_asset/image/common/menu-icon.png'
class Navigation extends Component {
    render() {
        return (
            <div className="NaviContainer">
                <div className="TopNavi">
                    <div className="Menu_Logo">
                        <img src={""} alt='Logo'></img>
                    </div>
                    <div className="Member_Box">
                        <div className="Login">
                            로그인
                        </div>
                        <div className="Sign_Up">
                            회원가입
                        </div>
                    </div>
                    <Menu className="Menu_Button" right customCrossIcon={<img src={""} alt='closeicon' />} customBurgerIcon={<img className='MenuIcon' src={menuicon} alt=""></img>}>
                        <NavLink onClick={() => this.closeMenu()} exact={true} id="home" ClassName="menu-item" to="/">한빛로지스</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="ourstory" ClassName="menu-item" to="/ourStory">회사소개</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="consulting" ClassName="menu-item" to="/consulting">지입정보</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="curriculum" ClassName="menu-item" to="/curriculum">당사차량</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="ingredients" ClassName="menu-item" to="/ingredients">한빛게시판</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="equipments" ClassName="menu-item" to="/equipment">공지사항</NavLink>
                        <NavLink onClick={() => this.closeMenu()} id="equipments" ClassName="menu-item" to="/equipment">QnA</NavLink>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Navigation;



