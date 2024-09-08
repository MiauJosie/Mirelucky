import { useState, useEffect, useContext } from "react";
import "../../styles/components/RollArea/RollOptions.css";
import { Context } from "./RollButton";

interface RollOptionsProps {
  isVisible: boolean;
}

function RollOptions({ isVisible }: RollOptionsProps) {
  const [bounces, setBounces] = useState<boolean[]>([false, false, false]);
  const [count, setCount, setRollAvailable] = useContext(Context);

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
    <div
      className="RollOptions"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "" : "translateY(2rem)",
      }}
    >
      <div className="OptionWrapper">
        <h2>{count[0]}</h2>
        <img
          onClick={(event) => handleClick(0, event)}
          onContextMenu={(event) => handleContextMenu(0, event)}
          className={bounces[0] ? "bounce" : ""}
          style={{
            cursor: isVisible ? "pointer" : "default",
          }}
          src="../../src/assets/d20.png"
          alt="d20"
        />
      </div>
      <div className="OptionWrapper">
        <h2>{count[1]}</h2>
        <img
          onClick={(event) => handleClick(1, event)}
          onContextMenu={(event) => handleContextMenu(1, event)}
          className={bounces[1] ? "bounce" : ""}
          style={{
            cursor: isVisible ? "pointer" : "default",
          }}
          src="../../src/assets/combatdice.png"
          alt="combat dice"
        />
      </div>
      <div className="OptionWrapper">
        <h2>{count[2]}</h2>
        <img
          onClick={(event) => handleClick(2, event)}
          onContextMenu={(event) => handleContextMenu(2, event)}
          className={bounces[2] ? "bounce" : ""}
          style={{
            cursor: isVisible ? "pointer" : "default",
          }}
          src="../../src/assets/locationdice.png"
          alt="location dice"
        />
      </div>
    </div>
  );
}

export default RollOptions;
