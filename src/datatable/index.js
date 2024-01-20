import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Table from "./DataTable";

import "./styles.css";

function App() {
  const clickhandler = name => console.log("delete", name);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data} click={clickhandler} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
