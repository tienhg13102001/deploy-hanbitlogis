import React, { Component } from "react";
import OneCarBanner from "../../Pages/CompanyCar/function/OneCarBanner";
// import CarMenuBox from '../../Components/MenuBox/CarMenu'
import InVehicle from "../../Pages/CompanyCar/function/InVehicle";

class InVehicleRouter extends Component {
  componentWillMount = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div className="Vehicle_Contatiner">
        <div className="TopBanner">
          <OneCarBanner></OneCarBanner>
        </div>
        <div className="InVehicle_Contents">
          <InVehicle></InVehicle>
        </div>
      </div>
    );
  }
}

export default InVehicleRouter;
