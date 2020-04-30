import React from "react";
import "./styles.css";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";

export default function App() {
  return (
    <div className="App">
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
      <UseTitle />
      <hr />
    </div>
  );
}
