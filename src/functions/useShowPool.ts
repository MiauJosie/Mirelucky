import { useContext } from "react";
import { Context } from "../App";

export const useShowPool = () => {
  const { isResultsVisible, setIsResultsVisible, setIsAnimatingPool } =
    useContext(Context);
  return () => {
    if (isResultsVisible === false) {
      setIsResultsVisible(true);
      setTimeout(() => {
        setIsAnimatingPool(true);
      }, 10);
    } else if (isResultsVisible === true) {
      setIsAnimatingPool(false);
      setTimeout(() => {
        setIsResultsVisible(false);
      }, 100);
    }
  };
};
