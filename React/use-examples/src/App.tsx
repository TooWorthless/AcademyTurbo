import React from "react";
import logo from "./logo.svg";
import Notification from "./useState/Notifications";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notification message="msg" type="error" onClose={() => console.log("close")}/>
      </header>
    </div>
  );
}

export default App;
