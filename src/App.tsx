import RollArea from "./components/RollArea";
import RollLog from "./components/RollLog";
import Placeholder from "./components/Placeholder";
import PoolResults from "./components/PoolResults";
import "./styles/App.css";
import { useState, createContext } from "react";

function App() {
  const [count, setCount] = useState<number[]>([0, 0, 0]);
  const [d20Result, setD20Result] = useState<number[]>([]);
  const [combatResult, setCombatResult] = useState<number[]>([]);
  const [locationResult, setLocationResult] = useState<number[]>([]);
  const [d20Rolled, setD20Rolled] = useState<boolean>();
  const [combatRolled, setCombatRolled] = useState<boolean>();
  const [locationRolled, setLocationRolled] = useState<boolean>();
  const [hasBeenRolled, setHasBeenRolled] = useState<boolean>(false);
  const [isResultsVisible, setIsResultsVisible] = useState<boolean>(false);
  const [d20List, setD20List] = useState<string[]>([]);
  const [combatList, setCombatList] = useState<string[]>([]);
  const [locationList, setLocationList] = useState<string[]>([]);
  const [isAnimatingPool, setIsAnimatingPool] = useState<boolean>(false);
  const [noDiceSelected, setNoDiceSelected] = useState<boolean>(false);
  const [blablabla, setblablabla] = useState<boolean>(false);

  return (
    <section>
      <Context.Provider
        value={{
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
          isResultsVisible,
          setIsResultsVisible,
          d20List,
          setD20List,
          combatList,
          setCombatList,
          locationList,
          setLocationList,
          isAnimatingPool,
          setIsAnimatingPool,
          noDiceSelected,
          setNoDiceSelected,
          blablabla,
          setblablabla,
        }}
      >
        <RollLog />
        <RollArea />
        <Placeholder />
        {isResultsVisible ? <PoolResults /> : null}
      </Context.Provider>
    </section>
  );
}

export const Context = createContext<any>({});
export default App;
