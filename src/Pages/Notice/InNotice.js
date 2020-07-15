import React, { Component } from 'react';
import './style/InNotice.scss';
import BoardPreview from '../../Common/BoardPrewView';


class InNotice extends Component {
    render() {
        return (
            <div className="InNotice_Container">
                <div className="InNotice_TitleBox">
                    <div className="InNotice_Title">
                        한빛게시판
                    </div>
                    <div className="InNotice_Btn">
                        목록으로
                    </div>
                </div>
                <div className="InNotice_Board">
                    <div className="In_TitleBox">
                        <div className="In_Title">
                            글 제목이 들어갑니다.
                        </div>
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

export default InNotice;