import React from "react";
import AccountContainer from "./AccountContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h2>BANK OF FLATIRON</h2>
      </div>
      <br />
      <br />
      <AccountContainer className="container"/>
    </div>
  );
}

export default App;
