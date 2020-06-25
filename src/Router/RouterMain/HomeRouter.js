import React, { Component } from 'react';
import MainBanner from '../../Pages/Main/MainBanner'
import MainInfo from '../../Pages/Main/MainInfo';
import MainContents from '../../Pages/Main/MainContents';
import MainSlick from '../../Pages/Main/MainSlick';
import MainBoard from '../../Pages/Main/MainBoard';

class HomeRouter extends Component {
    render() {
        return (
            <div>
                <MainBanner></MainBanner>
                <MainBoard></MainBoard>
                <MainInfo></MainInfo>
                <MainContents></MainContents>
                <MainSlick></MainSlick>
            </div>
        );
    }
}

export default HomeRouter;