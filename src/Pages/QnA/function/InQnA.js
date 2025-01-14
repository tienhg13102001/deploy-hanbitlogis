import React, { Component } from 'react';
import './style/InQnA.scss'
import BoardPreview from '../../../Common/BoardPrewView';
import { NavLink } from 'react-router-dom';


class InQnA extends Component {
    render() {
        return (
            <div className="InQnA_Container">
                <div className="InQnA_TitleBox">
                    <div className="InQnA_Title">
                        QnA
                    </div>
                    <div className="InQnA_Btn">
                        <NavLink className="QnA_Link" to="/QnA">
                            목록으로
                        </NavLink>
                    </div>
                </div>
                <div className="InQnA_Board">
                    <div className="In_TitleBox">
                        <div className="In_Title">
                            글 제목이 들어갑니다.
                        </div>
                    </div>
                    <div className="In_Menu">
                        <div className="In_Menu_People">작성자</div>
                    </div>
                    <div className="In_Menu_Text">
                        안녕하세요.<br/>
                        한빛 게시판입니다. 이 곳에 내용이 들어갈 예정입니다.<br/>
                        <br/>
                        들어갈 내용은 한빛 게시판에 대한 내용이고,<br/>
                        한빛 게시판에 대한 내용을 제한없이 적을 수 있습니다.<br/>
                        이상 한빛 게시판에 대한 설명이었습니다.<br/>
                        <br/>
                        <br/>
                        감사합니다.
                    </div>
                </div>
                <BoardPreview />
            </div>
        );
    }
}

export default InQnA;