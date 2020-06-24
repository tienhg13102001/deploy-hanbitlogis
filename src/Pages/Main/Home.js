import React, { Component } from 'react';
import './style/Home.scss';
import MenuList from '../../Components/MenuList/MenuList';

class Home extends Component {
    render() {
        return (
            <div className="HomeContainer">
                <MenuList></MenuList>
            </div>
        );
    }
}

export default Home;