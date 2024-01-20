import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Explore from "./routes/Explore";
import Dashboard from "./routes/Dashboard";
import CourseDetails from "./routes/CourseDetails";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/explore" element={<Explore/>}/>
    <Route path="/course/:id" element={<CourseDetails/>}/>
  </Routes>
  </>;
}

export default App;
