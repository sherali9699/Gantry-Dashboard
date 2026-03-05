import React from "react";

import Header from "../component/header";
import PositionPanel from "../component/positionPanel";
import SystemStatusPanel from "../component/statusPanel";
import MotionControlPanel from "../component/controlPanel";
import JogControlPanel from "../component/jogControls";
import SystemActionsPanel from "../component/systemActions";

function Dashboard(){

  return(
    <div className="Dashboard-wrapper">
      <Header/>

      <div className="container mt-4">

        {/* first ROW with Position and System Status Panels */}
        <div className="row">
          <div className="col-md-6">  <PositionPanel/> </div>
          <div className="col-md-6">  <SystemStatusPanel/> </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">  <MotionControlPanel/> </div>
          <div className="col-md-6">  <JogControlPanel/> </div> 
        </div>

        <div className="row mt-4">
          <div className="col-md-12">  <SystemActionsPanel/> </div>
        </div>

      </div>
    </div>

  )

}

export default Dashboard;