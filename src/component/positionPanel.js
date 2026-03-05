import React from "react";

function PositionPanel() {

  const position = {
    x: 120,
    y: 340,
    z: 25
  };

  return (

    <div className="panel">

      <div className="section-title">
        Position
      </div>

      <div className="row mb-2">

        <div className="col-6 position-label">
          X
        </div>

        <div className="col-6 position-value">
          {position.x} mm
        </div>

      </div>

      <div className="row mb-2">

        <div className="col-6 position-label">
          Y
        </div>

        <div className="col-6 position-value">
          {position.y} mm
        </div>

      </div>

      <div className="row">

        <div className="col-6 position-label">
          Z
        </div>

        <div className="col-6 position-value">
          {position.z} mm
        </div>

      </div>

    </div>

  );

}

export default PositionPanel;