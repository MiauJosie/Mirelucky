import { createContext, useState } from "react";
import "../../styles/components/RollArea/RollButton.css";
import ImgOpen from "../../assets/rollbutton.png";
import ImgRoll from "../../assets/rollbuttonready.png";
import ImgClose from "../../assets/rollbuttonclose.png";
import RollOptions from "./RollOptions";

function RollButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number[]>([0, 0, 0]);
  const [rollAvailable, setRollAvailable] = useState<boolean>(false);

  const toggleRollOptions = () => {
    setIsVisible((isVisible) => !isVisible);
  };

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
    if (count[0] > 0) {
      const result: number[] = rollTheseDice(20, count[0]);
      console.log(count[0]);
      console.log(result);
    }

    if (count[1] > 0) {
      const result: number[] = rollTheseDice(6, count[1]);
      console.log(count[1]);
      console.log(result);
    }

    if (count[2] > 0) {
      const result: number[] = rollTheseDice(20, count[2]);
      console.log(count[2]);
      console.log(result);
    }
  };

  return (
    <Context.Provider value={[count, setCount, setRollAvailable]}>
      <div
        className="RollButton"
        style={{ transform: isVisible ? "translateY(-2rem)" : "" }}
      >
        <RollOptions isVisible={isVisible} />
        <img
          src={isVisible ? (rollAvailable ? ImgRoll : ImgClose) : ImgOpen}
          alt="RollButton"
          onClick={
            isVisible
              ? rollAvailable
                ? rollSelectedDice
                : toggleRollOptions
              : toggleRollOptions
          }
        />
      </div>
    </Context.Provider>
  );
}

export const Context = createContext<any[]>([]);
export default RollButton;
