import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Dashboard from "./Component/Dashboard";
function App() {
  return (
    <div className="App">
     <Login/>
     <Register/>
     <Dashboard/>
    </div>
  );
}

export default App;
