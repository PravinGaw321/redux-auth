import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Dashboard from "./Component/Dashboard";
import Demo from "./Component/Demo";
function App() {
  return (
    <div className="App">
     <Login/>
     <Register/>
     <Dashboard/>
     <Demo/>
    </div>
  );
}

export default App;
