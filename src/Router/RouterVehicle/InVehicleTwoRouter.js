import React, { Component } from "react";
import OneCarBanner from "../../Pages/CompanyCar/function/OneCarBanner";
// import CarMenuBox from '../../Components/MenuBox/CarMenu'
import InVehicleTwo from "../../Pages/CompanyCar/function/InVehicleTwo";
import CarMenu from "../../Components/MenuBox/CarMenu";

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
        <div className="InVehicle_Contents" style={{ display: "flex" }}>
          <CarMenu {...this.props}></CarMenu>
          <InVehicleTwo></InVehicleTwo>
        </div>
      </div>
    );
  }
}

export default InVehicleRouter;
