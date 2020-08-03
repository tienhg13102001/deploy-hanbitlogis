import React, { Component } from "react";
import { slide as BurMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./style/Navigation.scss";

import closeicon from "../../_asset/image/common/xbotton.png";
import logo from "../../_asset/image/common/logo.png";
import menuicon from "../../_asset/image/common/menu-icon.png";
import Guide from "../Guide/Guide";
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import EmojiTransportationRoundedIcon from '@material-ui/icons/EmojiTransportationRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AirportShuttleRoundedIcon from '@material-ui/icons/AirportShuttleRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green } from '@material-ui/core/colors';


class Navigation extends Component {
  state = {
    isClickedMenu: false,
    clickedMenu: "",
  };
  movePage = (pageName) => {
    this.props.history.push({
      pathname: pageName,
    });
  };
  handleClickMenu = (clickedMenu) => {
    const { clickedMenu: clickedMeneName, isClickedMenu } = this.state;
    if (clickedMeneName === clickedMenu && isClickedMenu) {
      this.setState({ isClickedMenu: false });
    } else {
      this.setState({ clickedMenu, isClickedMenu: true });
    }
  };
  leaveMenu = () => {
    this.setState({ isClickedMenu: false });
  };
  renderSubMenu = (clickedMenu) => {
    let subMenu;
    const { isClickedMenu } = this.state;
    if (clickedMenu === "Intro") {
      subMenu = [
        { name: "회사소개", key: "/intro/ceo" },
        { name: "경영 방침", key: "/intro/policy" },
        { name: "회사 연혁", key: "/intro/history" },
        { name: "오시는길", key: "/intro/come" },
      ];
    } else if (clickedMenu === "Info") {
      subMenu = [
        { name: "지입정보", key: "/Info/analysis" },
        { name: "차량운용분석", key: "/Info/operation" },
        { name: "자격증 가이드", key: "/Info/testguide" },
      ];
    } else if (clickedMenu === "Vehicle") {
      subMenu = [
        { name: "1톤", key: "/Vehicle/onevehicle" },
        { name: "2.5톤", key: "/Vehicle/twovehicle" },
        { name: "4.5톤", key: "/Vehicle/threevehicle" },
        { name: "5톤", key: "/Vehicle/fourvehicle" },
      ];
    } else if (clickedMenu === "HanbitBoard") {
      subMenu = [{ name: "공지사항", key: "/HanbitBoard" }];
    }
    return (
      isClickedMenu && (
        <div className="NaviContainer_submenu_container">
          <div
            className="NaviContainer_submenu_wrap"
            onMouseLeave={this.leaveMenu}
          >
            {subMenu &&
              subMenu.map((item) => {
                return (
                  <NavLink
                    className="Submenu_link"
                    key={item.key}
                    to={item.key}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
          </div>
        </div>
      )
    );
  };
  render() {
    const { clickedMenu } = this.state;
    return (
      <div className="NaviContainer">
        {this.renderSubMenu(clickedMenu)}
        <div className="NaviWrap">
          <div className="TopNavi">
            <div className="TopNaviWrap">
              <div onClick={() => this.movePage("/")} className="Menu_Logo">
                <img src={logo} alt="Logo"></img>
              </div>
              <Guide onClick={this.handleClickMenu} />
            </div>
          </div>
        </div>
        <div className="Member_Box">
          <BurMenu
            className="Menu_Button"
            right
            customCrossIcon={<CloseRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />}
            customBurgerIcon={
              <img className="MenuIcon" src={menuicon} alt=""></img>
            }
          >
            <NavLink exact={true} id="home" className="menu-item" to="/">
              <HomeWorkRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />
              <div>홈</div>
            </NavLink>
            <NavLink id="Company" className="menu-item" to="/Intro">
              <EmojiTransportationRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />
              <div>회사소개</div>
            </NavLink>
            <NavLink id="Info" className="menu-item" to="/Info">
              <HelpOutlineRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />
              <div>지입정보</div>
            </NavLink>
            <NavLink id="Car" className="menu-item" to="/Vehicle">
              <AirportShuttleRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />
              <div>당사차량</div>
            </NavLink>
            <NavLink id="Board" className="menu-item" to="/HanbitBoard">
              <NotificationsNoneRoundedIcon style={{ color: '#dc3132' }} fontSize="small" />
              <div>공지사항</div>
            </NavLink>
          </BurMenu>
        </div>
      </div>
    );
  }
}

export default Navigation;
