import React from "react";

function SystemStatusPanel(){

  const status = {
    arduino: "Connected",
    motors: "Ready",
    limitSwitch: "OK",
    jobQueue: "Idle"
  };

  return(

    <div className="panel">

      <div className="section-title">
        System Status
      </div>

      <div className="row status-row">

        <div className="col-6 status-label">
          Arduino
        </div>

        <div className="col-6 status-value">

          <span className="status-dot status-green"></span>

          {status.arduino}

        </div>

      </div>

      <div className="row status-row">

        <div className="col-6 status-label">
          Motors
        </div>

        <div className="col-6 status-value">

          <span className="status-dot status-green"></span>

          {status.motors}

        </div>

      </div>

      <div className="row status-row">

        <div className="col-6 status-label">
          Limit Switch
        </div>

        <div className="col-6 status-value">

          <span className="status-dot status-green"></span>

          {status.limitSwitch}

        </div>

      </div>

      <div className="row">

        <div className="col-6 status-label">
          Job Queue
        </div>

        <div className="col-6 status-value">

          <span className="status-dot status-blue"></span>

          {status.jobQueue}

        </div>

      </div>

    </div>

  );

}

export default SystemStatusPanel;