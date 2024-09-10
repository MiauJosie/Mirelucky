import React from "react";
import { createContext, useState } from "react";
import "../styles/components/RollArea.css";
import RollButton from "./RollArea/RollButton";
import CurrentRoll from "./RollArea/CurrentRoll";

function RollArea() {
  const [count, setCount] = useState<number[]>([0, 0, 0]);
  const [d20Result, setD20Result] = useState<number[]>([]);
  const [combatResult, setCombatResult] = useState<number[]>([]);
  const [locationResult, setLocationResult] = useState<number[]>([]);
  const [d20Rolled, setD20Rolled] = useState<boolean>();
  const [combatRolled, setCombatRolled] = useState<boolean>();
  const [locationRolled, setLocationRolled] = useState<boolean>();
  const [hasBeenRolled, setHasBeenRolled] = useState<boolean>(false);

  return (
    <Count.Provider
      value={[
        count,
        setCount,
        d20Result,
        setD20Result,
        combatResult,
        setCombatResult,
        locationResult,
        setLocationResult,
        d20Rolled,
        setD20Rolled,
        combatRolled,
        setCombatRolled,
        locationRolled,
        setLocationRolled,
        hasBeenRolled,
        setHasBeenRolled,
      ]}
    >
      <div className="RollArea">
        <div className="Title">
          <h1>Mirelucky</h1>
          <h2>Fallout 2d20 Dice Roller</h2>
        </div>
        <CurrentRoll />
        <RollButton />
      </div>
    </Count.Provider>
  );
}

export const Count = createContext<any[]>([]);
export default RollArea;
