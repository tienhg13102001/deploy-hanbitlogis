import React, { Component } from 'react';
import { slide as BurMenu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import './style/Navigation.scss'

import closeicon from '../../_asset/image/common/xbotton.png'
import logo from '../../_asset/image/common/logo.png'
import menuicon from '../../_asset/image/common/menu-icon.png'
import Guide from '../Guide/Guide';




class Navigation extends Component {
    state = {
        isClickedMenu: false,
        clickedMenu: ""
    }
    movePage = (pageName) => {
        this.props.history.push({
            pathname: pageName
        })
    }
    handleClickMenu = (clickedMenu) => {
        const { clickedMenu: clickedMeneName, isClickedMenu } = this.state
        if (clickedMeneName === clickedMenu && isClickedMenu) {
            this.setState({ isClickedMenu: false })
        } else {
            this.setState({ clickedMenu, isClickedMenu: true })
        }

    }
    renderSubMenu = (clickedMenu) => {
        let subMenu;
        const { isClickedMenu } = this.state
        if (clickedMenu === "Intro") {
            subMenu = [
                { name: "회사소개", key: "/intro/ceo" },
                { name: "경영 방침", key: "/intro/policy" },
                { name: "회사 연혁", key: "/intro/history" },
                { name: "오시는길", key: "/intro/come" }
            ]
        } else if (clickedMenu === "Info") {
            subMenu = [
                { name: "지입정보", key: "/Info/analysis" },
                { name: "차량운용분석", key: "/Info/operation" },
                { name: "자격증 가이드", key: "/Info/testguide" },
            ]
        }
        else if (clickedMenu === "Vehicle") {
            subMenu = [
                { name: "당사차량[1톤]", key: "/Vehicle/onevehicle" },
                { name: "당사차량[2.5톤]", key: "/Vehicle/twovehicle" },
                { name: "지입정보[4.5톤]", key: "/Vehicle/threevehicle" },
                { name: "지입정보[5톤]", key: "/Vehicle/fourvehicle" },
            ]
        }
        else if (clickedMenu === "HanbitBoard") {
            subMenu = [
                { name: "한빛게시판", key: "/HanbitBoard" }
            ]
        }
        else if (clickedMenu === "Notice") {
            subMenu = [
                { name: "공지사항", key: "/Notice" }
            ]
        }
        else if (clickedMenu === "QnA") {
            subMenu = [
                { name: "QnA", key: "/QnA" },
            ]
        }
        return (
            isClickedMenu && <div className="NaviContainer_submenu_container">
                <div className="NaviContainer_submenu_wrap">
                    {
                        subMenu && subMenu.map(item => {
                            return (
                                <NavLink className="Submenu_link" key={item.key} to={item.key}>{item.name}</NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    render() {
        const { clickedMenu } = this.state
        return (
            <div className="NaviContainer">
                {
                    this.renderSubMenu(clickedMenu)
                }

                <div className="NaviWrap">
                    <div className="TopNavi">
                        <div className="TopNaviWrap">
                            <div onClick={() => this.movePage("/")} className="Menu_Logo">
                                <img src={logo} alt='Logo'></img>
                            </div>
                            <Guide onClick={this.handleClickMenu} />
                        </div>
                        <div className="Member_Box">
                            <BurMenu className="Menu_Button" right customCrossIcon={<img src={closeicon} alt='closeicon' />} customBurgerIcon={<img className='MenuIcon' src={menuicon} alt=""></img>}>
                                <NavLink exact={true} id="home" className="menu-item" to="/">한빛로지스</NavLink>
                                <NavLink id="Company" className="menu-item" to="/Intro">회사소개</NavLink>
                                <NavLink id="Info" className="menu-item" to="/Info">지입정보</NavLink>
                                <NavLink id="Car" className="menu-item" to="/Vehicle">당사차량</NavLink>
                                <NavLink id="Board" className="menu-item" to="/HanbitBoard">한빛게시판</NavLink>
                                <NavLink id="Notice" className="menu-item" to="/Notice">공지사항</NavLink>
                                <NavLink id="QnA" className="menu-item" to="/QnA">QnA</NavLink>
                            </BurMenu>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navigation;



