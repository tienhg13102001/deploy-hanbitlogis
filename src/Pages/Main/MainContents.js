import React, { Component } from 'react';
import './style/MainContents.scss'


import CustomerService from '../../Components/CustomerService/Service';
import Location from '../../Components/LocationInfo/Location';
import License from '../../Components/ContentsMap/License';
import Test from '../../Components/ContentsMap/Test';
import Union from '../../Components/ContentsMap/Union';
import Recruitment from '../../Components/ContentsMap/Recruitment';

class MainContents extends Component {
    render() {
        return (
            <div className="Contents">
                <div className="One_Line">
                    <CustomerService></CustomerService>
                    <Location></Location>
                </div>
                <div className="Two_Line">
                    <License></License>
                    <Test></Test>
                    <Union></Union>
                    <Recruitment></Recruitment>
                </div>
            </div>
            
        );
    }
}

export default MainContents;



