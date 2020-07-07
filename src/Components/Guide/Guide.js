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
                        <NavLink to="/Vehicle">
                            당사차량
                        </NavLink>
                    </div>
                    <div className="GuideBoard">
                        <NavLink to="/HanbitBoard">
                            한빛 게시판
                        </NavLink>
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