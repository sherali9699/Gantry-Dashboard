import React, { useEffect, useState } from "react";
import { getStatus } from "../services/robotApi";

function PositionPanel() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    z: 0
  });

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await getStatus();
        const data = response.data;
        console.log("Position data:", data);

        setPosition({
          x: data.x ?? 0,
          y: data.y ?? 0,
          z: data.z ?? 0
        });
      } catch (error) {
        console.error("Failed to fetch position:", error);
      }
    };

    fetchPosition();

    const interval = setInterval(fetchPosition, 100000);

    return () => clearInterval(interval);
  }, []);

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













// import React from "react";

// function PositionPanel() {

//   const position = {
//     x: 120,
//     y: 340,
//     z: 25
//   };

//   return (

//     <div className="panel">

//       <div className="section-title">
//         Position
//       </div>

//       <div className="row mb-2">

//         <div className="col-6 position-label">
//           X
//         </div>

//         <div className="col-6 position-value">
//           {position.x} mm
//         </div>

//       </div>

//       <div className="row mb-2">

//         <div className="col-6 position-label">
//           Y
//         </div>

//         <div className="col-6 position-value">
//           {position.y} mm
//         </div>

//       </div>

//       <div className="row">

//         <div className="col-6 position-label">
//           Z
//         </div>

//         <div className="col-6 position-value">
//           {position.z} mm
//         </div>

//       </div>

//     </div>

//   );

// }

// export default PositionPanel;