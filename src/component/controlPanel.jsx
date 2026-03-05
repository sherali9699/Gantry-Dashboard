import React, { useState } from "react";

function MotionControlPanel(){

  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [z,setZ] = useState(0);

  const handleMove = () => {

    console.log("Move to:", x, y, z);

  };

  return(

    <div className="panel">

      <div className="section-title">
        Motion Control
      </div>

      <div className="row mb-3">

        <div className="col-3 control-label">
          X
        </div>

        <div className="col-9">

          <input
            className="control-input"
            value={x}
            onChange={(e)=>setX(e.target.value)}
          />

        </div>

      </div>

      <div className="row mb-3">

        <div className="col-3 control-label">
          Y
        </div>

        <div className="col-9">

          <input
            className="control-input"
            value={y}
            onChange={(e)=>setY(e.target.value)}
          />

        </div>

      </div>

      <div className="row mb-3">

        <div className="col-3 control-label">
          Z
        </div>

        <div className="col-9">

          <input
            className="control-input"
            value={z}
            onChange={(e)=>setZ(e.target.value)}
          />

        </div>

      </div>

      <div className="row">

        <div className="col text-center">

          <button
            className="move-button"
            onClick={handleMove}
          >

            MOVE

          </button>

        </div>

      </div>

    </div>

  );

}

export default MotionControlPanel;