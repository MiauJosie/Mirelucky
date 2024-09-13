import { useContext, useEffect } from "react";
import "../../styles/components/RollArea/CurrentRoll.css";
import { Context } from "../../App";
import { useImages } from "../../functions/useImages";

function CurrentRoll() {
  const {
    d20Result,
    setD20Result,
    combatResult,
    setCombatResult,
    locationResult,
    setLocationResult,
    d20Rolled,
    combatRolled,
    locationRolled,
    hasBeenRolled,
    d20List,
    combatList,
    locationList,
  } = useContext(Context);

  let d20Total: number = 0;
  let combatDamage: number = 0;
  let combatEffects: number = 0;

  combatResult.map((result: number) => {
    switch (result) {
      case 1:
        combatDamage += 1;
        break;
      case 2:
        combatDamage += 2;
        break;
      case 3:
      case 4:
        break;
      case 5:
      case 6:
        combatDamage += 1;
        combatEffects += 1;
        break;
    }
  });

  d20Result.map((result: number) => {
    d20Total += result;
  });

  useImages();

  const rerollDice = (index: number, dice: string) => {
    if (dice === "d20") {
      const newRoll = Math.floor(Math.random() * 20) + 1;
      const newResult = [...d20Result]; // Copy the current d20Result array
      newResult[index] = newRoll; // Update the specific dice at the index
      setD20Result(newResult); // Update the state with the new array
    } else if (dice === "combat") {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      const newResult = [...combatResult]; // Copy the current d20Result array
      newResult[index] = newRoll; // Update the specific dice at the index
      setCombatResult(newResult); // Update the state with the new array
    } else {
      const newRoll = Math.floor(Math.random() * 20) + 1;
      const newResult = [...locationResult]; // Copy the current d20Result array
      newResult[index] = newRoll; // Update the specific dice at the index
      setLocationResult(newResult); // Update the state with the new array
    }
  };

  const getLocationName = (result: number): string => {
    if (result >= 1 && result <= 2) return "Head";
    if (result >= 3 && result <= 8) return "Torso";
    if (result >= 9 && result <= 11) return "Right Arm";
    if (result >= 12 && result <= 14) return "Left Arm";
    if (result >= 15 && result <= 17) return "Right Leg";
    if (result >= 18 && result <= 20) return "Left Leg";
    return "Unknown";
  };

  const getLocationCounts = () => {
    const counts: { [key: string]: number } = {}; // Use body parts as keys

    // Iterate over locationResult and count the occurrences of each location name
    locationResult.forEach((result: number) => {
      const locationName = getLocationName(result); // Get the location name based on the roll result
      if (counts[locationName]) {
        counts[locationName] += 1; // If the location name is already in counts, increment the count
      } else {
        counts[locationName] = 1; // If not, initialize it with 1
      }
    });

    return counts; // Return the counts object with body part names as keys
  };

  const getLocationCountsString = () => {
    const counts = getLocationCounts(); // Get the location counts
    return (
      <>
        {Object.entries(counts).map(([location, count]) => (
          <h4 key={location}>
            <span>{location}</span> {count}
          </h4>
        ))}
      </>
    );
  };

  return (
    <div className="CurrentRoll">
      {d20Rolled || combatRolled || locationRolled ? null : (
        <h2>Try Your Luck!</h2>
      )}

      {d20Rolled ? (
        <div
          className="Container"
          style={{ opacity: hasBeenRolled ? "" : "0" }}
        >
          <h3>D20</h3>
          <div className="Count">
            <h3>[x{d20Result.length}]</h3>
          </div>
          <div className="Wrapper">
            <div className="Dices">
              {d20Result.map((result: number, index: number) => (
                <img
                  style={{
                    transform: hasBeenRolled ? "" : "translateY(5rem)",
                    opacity: hasBeenRolled ? "" : "0",
                  }}
                  key={index}
                  onClick={() => rerollDice(index, "d20")}
                  src={d20List[result - 1]}
                  alt={`d20-${result}`}
                />
              ))}
            </div>
          </div>
          <div className="Total">
            <h4>
              <span>TOTAL</span> {d20Total}
            </h4>
          </div>
        </div>
      ) : null}

      {combatRolled ? (
        <div
          className="Container"
          style={{ opacity: hasBeenRolled ? "" : "0" }}
        >
          <h3>Combat Dice</h3>
          <div className="Count">
            <h3>[x{combatResult.length}]</h3>
          </div>
          <div className="Wrapper">
            <div className="Dices">
              {combatResult.map((result: number, index: number) => (
                <img
                  style={{
                    transform: hasBeenRolled ? "" : "translateY(5rem)",
                    opacity: hasBeenRolled ? "" : "0",
                  }}
                  key={index}
                  onClick={() => rerollDice(index, "combat")}
                  src={combatList[result - 1]}
                  alt={`combat-${result}`}
                />
              ))}
            </div>
          </div>
          <div className="Total">
            <h4>
              <span>DAMAGE</span> {combatDamage}
            </h4>
            <h4>
              <span>EFFECTS</span> {combatEffects}
            </h4>
          </div>
        </div>
      ) : null}

      {locationRolled ? (
        <div
          className="Container"
          style={{ opacity: hasBeenRolled ? "" : "0" }}
        >
          <h3>Hit Location</h3>
          <div className="Count">
            <h3>[x{locationResult.length}]</h3>
          </div>
          <div className="Wrapper">
            <div className="Dices">
              {locationResult.map((result: number, index: number) => (
                <img
                  style={{
                    transform: hasBeenRolled ? "" : "translateY(5rem)",
                    opacity: hasBeenRolled ? "" : "0",
                  }}
                  key={index}
                  onClick={() => rerollDice(index, "location")}
                  src={locationList[result - 1]}
                  alt={`location-${result}`}
                />
              ))}
            </div>
          </div>
          <div className="Total">{getLocationCountsString()}</div>
        </div>
      ) : null}
    </div>
  );
}

export default CurrentRoll;
