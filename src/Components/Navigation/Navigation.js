import React, { Component } from 'react';
import { slide as BurMenu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import './style/Navigation.scss'

import logo from '../../_asset/image/common/logo.png'
import menuicon from '../../_asset/image/common/menu-icon.png'
import Guide from '../Guide/Guide';



class Navigation extends Component {
    

    render() {
        return (
            <div className="NaviContainer">
                <div className="TopNavi">
                        <div className="Menu_Logo">
                            <img src={logo} alt='Logo'></img>
                        </div>
                        <Guide />
                    <div className="Member_Box">
                        <div className="Login">로그인</div>
                        <div className="Sign_Up">회원가입</div>

                        <BurMenu className="Menu_Button" right customCrossIcon={<img src={""} alt='closeicon' />} customBurgerIcon={<img className='MenuIcon' src={menuicon} alt=""></img>}>
                            <NavLink onClick={() => this.closeMenu()} exact={true} id="home" ClassName="menu-item" to="/">한빛로지스</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="Company" ClassName="menu-item" to="/Company">회사소개</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="Info" ClassName="menu-item" to="/Info">지입정보</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="Car" ClassName="menu-item" to="/Car">당사차량</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="Board" ClassName="menu-item" to="/Board">한빛게시판</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="Notice" ClassName="menu-item" to="/Notice">공지사항</NavLink>
                            <NavLink onClick={() => this.closeMenu()} id="QnA" ClassName="menu-item" to="/QnA">QnA</NavLink>
                        </BurMenu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;



