import { createContext, useContext, useState } from "react";
import "../styles/components/RollArea.css";
import RollButton from "./RollArea/RollButton";
import CurrentRoll from "./RollArea/CurrentRoll";
import { Context } from "../App";

function RollArea() {
  const { noDiceSelected, blablabla } = useContext(Context);
  return (
    <div className="RollArea">
      {noDiceSelected ? (
        <div
          className="RollAlert"
          style={{
            transform: blablabla ? "" : "translateY(-12rem)",
          }}
        >
          <h3>No dice selected</h3>
        </div>
      ) : null}
      <div className="Title">
        <h1>Mirelucky</h1>
        <h2>Fallout 2d20 Dice Roller</h2>
      </div>
      <CurrentRoll />
      <RollButton />
    </div>
  );
}

export default RollArea;
