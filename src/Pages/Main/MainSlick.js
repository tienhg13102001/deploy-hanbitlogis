import React, { Component } from 'react';
import './style/MainSlick.scss'

import banner01 from "../../_asset/image/main/cooperativelogo-01.png";
import banner02 from "../../_asset/image/main/cooperativelogo-02.png";
import banner03 from "../../_asset/image/main/cooperativelogo-03.png";

class MainSlick extends Component {
    render() {
        return (
            <div className="SlickContainer">
                <div className="ListBox">
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                    <img src={banner02} className="Banner" alt="강릉센터"></img>
                    <img src={banner03} className="Banner" alt="강릉센터"></img>
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                    <img src={banner02} className="Banner" alt="강릉센터"></img>
                    <img src={banner03} className="Banner" alt="강릉센터"></img>
                    <img src={banner01} className="Banner" alt="강릉센터"></img>
                </div>
            </div>
        );
    }
}

export default MainSlick;