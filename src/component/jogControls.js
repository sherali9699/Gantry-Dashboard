import React from "react";
import { jogRobot } from "../services/robotApi";

function JogControlPanel(){

  const jog = async (axis, direction) => {

    try{

      await jogRobot(axis, direction);

      console.log("Jog command:", axis, direction);

    } catch(error){

      console.error("Jog failed:", error);

    }

  };

  return(

    <div className="panel">

      <div className="section-title">
        Jog Control
      </div>

      <div className="jog-container">

        <div className="row mb-2">
          <div className="col text-center">
            <button
              className="jog-button"
              onClick={()=>jog("Y","+")}
            >
              ↑
            </button>
          </div>
        </div>

        <div className="row mb-2">

          <div className="col text-end">
            <button
              className="jog-button"
              onClick={()=>jog("X","-")}
            >
              ←
            </button>
          </div>

          <div className="col text-center">
            <div className="jog-center"></div>
          </div>

          <div className="col text-start">
            <button
              className="jog-button"
              onClick={()=>jog("X","+")}
            >
              →
            </button>
          </div>

        </div>

        <div className="row mb-3">
          <div className="col text-center">
            <button
              className="jog-button"
              onClick={()=>jog("Y","-")}
            >
              ↓
            </button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col text-center">
            <button
              className="jog-button"
              onClick={()=>jog("Z","+")}
            >
              Z+
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <button
              className="jog-button"
              onClick={()=>jog("Z","-")}
            >
              Z-
            </button>
          </div>
        </div>

      </div>

    </div>

  )

}

export default JogControlPanel;










// import React from "react";

// function JogControlPanel(){

//   const jog = (axis, direction) => {

//     console.log("Jog:", axis, direction);

//   };

//   return(

//     <div className="panel">

//       <div className="section-title">
//         Jog Control
//       </div>

//       <div className="jog-container">

//         {/* Y+ */}
//         <div className="row mb-2">

//           <div className="col text-center">

//             <button
//               className="jog-button"
//               onClick={()=>jog("Y","+")}
//             >
//               ↑
//             </button>

//           </div>

//         </div>

//         {/* X-  Center  X+ */}
//         <div className="row mb-2">

//           <div className="col text-end">

//             <button
//               className="jog-button"
//               onClick={()=>jog("X","-")}
//             >
//               ←
//             </button>

//           </div>

//           <div className="col text-center">

//             <div className="jog-center"></div>

//           </div>

//           <div className="col text-start">

//             <button
//               className="jog-button"
//               onClick={()=>jog("X","+")}
//             >
//               →
//             </button>

//           </div>

//         </div>

//         {/* Y- */}
//         <div className="row mb-3">

//           <div className="col text-center">

//             <button
//               className="jog-button"
//               onClick={()=>jog("Y","-")}
//             >
//               ↓
//             </button>

//           </div>

//         </div>

//         {/* Z+ */}
//         <div className="row mb-2">

//           <div className="col text-center">

//             <button
//               className="jog-button"
//               onClick={()=>jog("Z","+")}
//             >
//               Z+
//             </button>

//           </div>

//         </div>

//         {/* Z- */}
//         <div className="row">

//           <div className="col text-center">

//             <button
//               className="jog-button"
//               onClick={()=>jog("Z","-")}
//             >
//               Z-
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>

//   )

// }

// export default JogControlPanel;