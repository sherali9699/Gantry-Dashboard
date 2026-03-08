import axios from "axios";

const API = axios.create({
  baseURL: "https://wailful-myrtle-fibroblastic.ngrok-free.dev",
  headers: {
    "ngrok-skip-browser-warning": "69420", // This bypasses the Ngrok landing page
    "Content-Type": "application/json",
  },
  //baseURL: "http://localhost:8000"
});

export const moveRobot = (x,y,z) =>
  API.post("/robot/move", {x,y,z});

export const jogRobot = (axis,direction) =>
  API.post("/robot/jog", {axis,direction});

export const homeRobot = () =>
  API.post("/robot/home");

export const stopRobot = () =>
  API.post("/robot/stop");

export const getStatus = () =>
  API.get("/robot/status");