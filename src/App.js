import React from "react";
import "./styles.css";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";

export default function App() {
  return (
    <div className="App">
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
    </div>
  );
}
