import { createContext, useContext, useState } from "react";
import "../../styles/components/RollArea/RollButton.css";
import ButtonImg from "../../assets/rollbutton.png";
import RollOptions from "./RollOptions";

import { Context } from "../../App";

function RollButton() {
  const [rollAvailable, setRollAvailable] = useState<boolean>(false);
  const {
    count,
    setCount,
    setD20Result,
    setCombatResult,
    setLocationResult,
    setD20Rolled,
    setCombatRolled,
    setLocationRolled,
    setHasBeenRolled,
    noDiceSelected,
    setNoDiceSelected,
    setblablabla,
  } = useContext(Context);

  const rollThisDice = (faces: number) => {
    return Math.floor(Math.random() * faces) + 1;
  };

  const rollTheseDice = (faces: number, amount: number) => {
    const result: number[] = [];
    for (let i: number = 0; i < amount; i++) {
      result.push(rollThisDice(faces));
    }
    return result;
  };

  const rollSelectedDice = () => {
    setD20Rolled(false);
    setCombatRolled(false);
    setLocationRolled(false);

    if (count[0] > 0) {
      setD20Result(rollTheseDice(20, count[0]));
      setD20Rolled(true);
    }

    if (count[1] > 0) {
      setCombatResult(rollTheseDice(6, count[1]));
      setCombatRolled(true);
    }

    if (count[2] > 0) {
      setLocationResult(rollTheseDice(20, count[2]));
      setLocationRolled(true);
    }

    setHasBeenRolled(false);

    setTimeout(() => {
      setHasBeenRolled(true);
    }, 200);

    setCount([0, 0, 0]);
  };

  const nothing = () => {
    console.log("nothing");
  };

  const handleNoDiceSelected = () => {
    setNoDiceSelected(true);

    setblablabla(false);

    setTimeout(() => {
      setblablabla(true);
    }, 200);

    setTimeout(() => {
      setblablabla(false);
    }, 1800);

    setTimeout(() => {
      setNoDiceSelected(false);
    }, 2000);
  };

  return (
    <RollAvailable.Provider value={[setRollAvailable]}>
      <div className="RollButton">
        <RollOptions />
        <img
          src={ButtonImg}
          alt="RollButton"
          onClick={
            rollAvailable
              ? rollSelectedDice
              : noDiceSelected
              ? nothing
              : handleNoDiceSelected
          }
        />
      </div>
    </RollAvailable.Provider>
  );
}

export const RollAvailable = createContext<any>([]);
export default RollButton;
