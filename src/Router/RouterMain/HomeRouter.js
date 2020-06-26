import React, { Component } from 'react';
import MainBanner from '../../Pages/Main/MainBanner'
import MainInfo from '../../Pages/Main/MainInfo';
import MainContents from '../../Pages/Main/MainContents';
import MainBoard from '../../Pages/Main/MainBoard';

class HomeRouter extends Component {
    render() {
        return (
            <div>
                <MainBanner></MainBanner>
                <MainBoard></MainBoard>
                <MainInfo></MainInfo>
                <MainContents></MainContents>
            </div>
        );
    }
}

export default HomeRouter;