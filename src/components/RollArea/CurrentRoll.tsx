import { useContext, useEffect, useState } from "react";
import { Count } from "../RollArea";
import "../../styles/components/RollArea/CurrentRoll.css";

function CurrentRoll() {
  const [
    _count,
    _setCount,
    d20Result,
    _setD20Result,
    combatResult,
    _setCombatResult,
    locationResult,
    _setLocationResult,
    d20Rolled,
    _setD20Rolled,
    combatRolled,
    _setCombatRolled,
    locationRolled,
    _setLocationRolled,
    hasBeenRolled,
    _setHasBeenRolled,
  ] = useContext(Count);

  const [d20List, setD20List] = useState<string[]>([]);
  const [combatList, setCombatList] = useState<string[]>([]);
  const [locationList, setLocationList] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const d20Images = await Promise.all(
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((d20) =>
          import(`../../assets/d20-${d20}.png`).then((module) => module.default)
        )
      );

      const combatImages = await Promise.all(
        [1, 2, 3, 4, 5, 6].map((combat) =>
          import(`../../assets/combat-${combat}.png`).then(
            (module) => module.default
          )
        )
      );

      const locationImages = await Promise.all(
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((location) =>
          import(`../../assets/location-${location}.png`).then(
            (module) => module.default
          )
        )
      );

      setD20List(d20Images);
      setCombatList(combatImages);
      setLocationList(locationImages);
    };

    loadImages();
  }, []);

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
          <div className="Dices">
            {d20Result.map((result: number, index: number) => (
              <img
                style={{
                  transform: hasBeenRolled ? "" : "translateY(5rem)",
                  opacity: hasBeenRolled ? "" : "0",
                }}
                key={index}
                src={d20List[result - 1]} // Use result to index into d20List (subtract 1 since arrays are 0-indexed)
                alt={`d20-${result}`}
              />
            ))}
          </div>
        </div>
      ) : null}

      {combatRolled ? (
        <div
          className="Container"
          style={{ opacity: hasBeenRolled ? "" : "0" }}
        >
          <h3>Combat Dice</h3>
          <div className="Dices">
            {combatResult.map((result: number, index: number) => (
              <img
                style={{
                  transform: hasBeenRolled ? "" : "translateY(5rem)",
                  opacity: hasBeenRolled ? "" : "0",
                }}
                key={index}
                src={combatList[result - 1]} // Combat dice result (1-6) corresponds to the index in combatDiceList
                alt={`combat-${result}`}
              />
            ))}
          </div>
        </div>
      ) : null}

      {locationRolled ? (
        <div
          className="Container"
          style={{ opacity: hasBeenRolled ? "" : "0" }}
        >
          <h3>Hit Location</h3>
          <div className="Dices">
            {locationResult.map((result: number, index: number) => (
              <img
                style={{
                  transform: hasBeenRolled ? "" : "translateY(5rem)",
                  opacity: hasBeenRolled ? "" : "0",
                }}
                key={index}
                src={locationList[result - 1]} // Location dice result (1-20) corresponds to the index in locationDiceList
                alt={`location-${result}`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CurrentRoll;
