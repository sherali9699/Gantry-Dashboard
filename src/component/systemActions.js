import React from "react";

function SystemActionsPanel(){

  const home = () => {
    console.log("HOME command");
  };

  const stop = () => {
    console.log("STOP command");
  };

  const reset = () => {
    console.log("RESET command");
  };

  const emergencyStop = () => {
    console.log("EMERGENCY STOP");
  };

  return(

    <div className="panel">

      <div className="section-title">
        System Actions
      </div>

      <div className="row mb-3">

        <div className="col-6">

          <button
            className="action-button action-home"
            onClick={home}
          >
            HOME
          </button>

        </div>

        <div className="col-6">

          <button
            className="action-button action-stop"
            onClick={stop}
          >
            STOP
          </button>

        </div>

      </div>

      <div className="row">

        <div className="col-6">

          <button
            className="action-button action-reset"
            onClick={reset}
          >
            RESET
          </button>

        </div>

        <div className="col-6">

          <button
            className="action-button action-emergency"
            onClick={emergencyStop}
          >
            EMERGENCY
          </button>

        </div>

      </div>

    </div>

  );

}

export default SystemActionsPanel;