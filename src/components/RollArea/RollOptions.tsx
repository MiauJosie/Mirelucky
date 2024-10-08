import React from "react";
import { useState, useEffect, useContext } from "react";
import "../../styles/components/RollArea/RollOptions.css";
import { RollAvailable } from "./RollButton";
import { Context } from "../../App";
import d20Img from "../../assets/d20.png";
import combatImg from "../../assets/combatdice.png";
import locationImg from "../../assets/locationdice.png";

function RollOptions() {
  const [bounces, setBounces] = useState<boolean[]>([false, false, false]);
  const [setRollAvailable] = useContext(RollAvailable);
  const { count, setCount } = useContext(Context);

  useEffect(() => {
    setRollAvailable(count[0] > 0 || count[1] > 0 || count[2] > 0);
  }, [count]);

  const handleContextMenu = (index: number, event: React.MouseEvent) => {
    event.preventDefault();

    const newCount = [...count];
    count[index] > 0 ? (newCount[index] -= 1) : null;
    setCount(newCount);

    animate(index);
  };

  const handleClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault();

    const newCount = [...count];
    newCount[index] += 1;
    setCount(newCount);

    animate(index);
  };

  const handleWheel = (index: number, event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      const newCount = [...count];
      count[index] > 0 ? (newCount[index] -= 1) : null;
      setCount(newCount);

      animate(index);
    } else {
      const newCount = [...count];
      newCount[index] += 1;
      setCount(newCount);

      animate(index);
    }
  };

  const animate = (index: number) => {
    setBounces((prevBounces) => {
      const newBounces = [...prevBounces];
      newBounces[index] = true;
      return newBounces;
    });

    setTimeout(() => {
      setBounces((prevBounces) => {
        const newBounces = [...prevBounces];
        newBounces[index] = false;
        return newBounces;
      });
    }, 100);
  };

  return (
    <div className="RollOptions">
      <div className="OptionWrapper">
        <h2>{count[0]}</h2>
        <img
          onClick={(event) => handleClick(0, event)}
          onContextMenu={(event) => handleContextMenu(0, event)}
          onWheel={(event) => handleWheel(0, event)}
          className={bounces[0] ? "bounce" : ""}
          src={d20Img}
          alt="d20"
        />
      </div>
      <div className="OptionWrapper">
        <h2>{count[1]}</h2>
        <img
          onClick={(event) => handleClick(1, event)}
          onContextMenu={(event) => handleContextMenu(1, event)}
          onWheel={(event) => handleWheel(1, event)}
          className={bounces[1] ? "bounce" : ""}
          src={combatImg}
          alt="combat dice"
        />
      </div>
      <div className="OptionWrapper">
        <h2>{count[2]}</h2>
        <img
          onClick={(event) => handleClick(2, event)}
          onContextMenu={(event) => handleContextMenu(2, event)}
          onWheel={(event) => handleWheel(2, event)}
          className={bounces[2] ? "bounce" : ""}
          src={locationImg}
          alt="location dice"
        />
      </div>
    </div>
  );
}

export default RollOptions;
