import React from "react";
import RollArea from "./components/RollArea";
import RollLog from "./components/RollLog";
import "./styles/App.css";

function App() {
  return (
    <section>
      <RollLog />
      <RollArea />
    </section>
  );
}

export default App;
