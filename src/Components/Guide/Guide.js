import React, { Component } from 'react';
import './style/Guide.scss'
import { NavLink } from "react-router-dom";

class Guide extends Component {
    render() {
        return (
            <div className="GuideContainer">
                <div className="GuideTop">
                    <div className="GuideAbout">
                        <NavLink to="/Intro">
                            회사소개
                        </NavLink>
                    </div>
                    <div className="GuideInfo">
                        <NavLink to="/Info">
                            지입정보
                        </NavLink>
                    </div>
                    <div className="GuideCar">
                        당사차량
                    </div>
                    <div className="GuideBoard">
                        한빛 게시판
                    </div>
                    <div className="GuideNotice">
                        공지사항
                    </div>
                    <div className="GuideQnA">
                        QnA
                    </div>
                </div>
            </div>
        );
    }
}

export default Guide;