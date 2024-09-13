import "../styles/components/PoolResults.css";
import { useShowPool } from "../functions/useShowPool";
import { Context } from "../App";
import { useContext } from "react";

function PoolResults() {
  const { isAnimatingPool } = useContext(Context);

  const showPool = useShowPool();
  return (
    <div className="PoolResults">
      <div
        className="container"
        style={{
          opacity: isAnimatingPool ? "" : "0",
          transform: isAnimatingPool ? "scale(100%)" : "scale(1%)",
        }}
      >
        <button onClick={showPool}>BOTãO</button>
      </div>
    </div>
  );
}

export default PoolResults;
