import "../styles/components/RollArea.css";
import RollButton from "./RollArea/RollButton";
import CurrentRoll from "./RollArea/CurrentRoll";

function RollArea() {
  return (
    <div className="RollArea">
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
