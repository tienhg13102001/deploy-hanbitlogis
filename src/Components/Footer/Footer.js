import React, { Component } from 'react';
import './Footer.scss'

import logo from '../../_asset/image/common/logo.png'

class Footer extends Component {
    render() {
        return (
            <div className="FooterContainer">
                <div className="Box">
                    <div className="Footer_wrap">
                        <div className="LogoBox"><img src={logo} alt='배너 로고'></img></div>
                        <div className="Info">
                            한빛로지스 (주)  대표이사 : 이정화  사업자번호 : 120-86-31723  TEL : 1599-9954  FAX : 02-517-1493<br />
                            주소 : 서울특별시 강남구 학동로 56길 8, 301 (삼성동, 한양빌딩)  e-mail : hanbitlogis@naver.com<br />
                            copyright (c) hanbitlogis. all rights reserved
                        </div>
                    </div>
                    <div className="TermsBox">
                        <div className="One">이용약관</div>
                        <div className="Two">개인정보처리방침</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;