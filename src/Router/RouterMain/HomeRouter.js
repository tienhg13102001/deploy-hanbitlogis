import React, { Component } from 'react';
import MainBanner from '../../Pages/Main/MainBanner'
import MainInfo from '../../Pages/Main/MainInfo';
import MainContents from '../../Pages/Main/MainContents';

class HomeRouter extends Component {
    render() {
        return (
            <div>
                <MainBanner></MainBanner>
                <MainInfo></MainInfo>
                <MainContents></MainContents>
            </div>
        );
    }
}

export default HomeRouter;