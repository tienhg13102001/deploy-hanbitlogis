import React, { Component } from 'react';
import './style/Guide.scss'
import { NavLink } from "react-router-dom";

class Guide extends Component {
    render() {
        return (
            <div className="GuideContainer">
                <div className="GuideTop">
                    <div className="GuideAbout" onClick={() => this.props.onClick("Intro")}>
                        <div to="/Intro">
                            회사소개
                        </div>
                    </div>
                    <div className="GuideInfo"  onClick={() => this.props.onClick("Info")}>
                        <div to="/Info">
                            지입정보
                        </div>
                    </div>
                    <div className="GuideCar"  onClick={() => this.props.onClick("Vehicle")}>
                        <div to="/Vehicle">
                            당사차량
                        </div>
                    </div>
                    <div className="GuideBoard"  onClick={() => this.props.onClick("HanbitBoard")}>
                        <div to="/HanbitBoard">
                            한빛 게시판
                        </div>
                    </div>
                    <div className="GuideNotice"  onClick={() => this.props.onClick("Notice")}>
                        <div to="/Notice">
                            공지사항
                        </div>
                    </div>
                    <div className="GuideQnA"  onClick={() => this.props.onClick("QnA")}>
                        <div to="/QnA">
                        QnA
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guide;