import { useEffect, useContext } from "react";
import { Context } from "../App";

export const useImages = () => {
  const { setD20List, setCombatList, setLocationList } = useContext(Context);
  useEffect(() => {
    const loadImages = async () => {
      const d20Images = await Promise.all(
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((d20) =>
          import(`../assets/d20-${d20}.png`).then((module) => module.default)
        )
      );

      const combatImages = await Promise.all(
        [1, 2, 3, 4, 5, 6].map((combat) =>
          import(`../assets/combat-${combat}.png`).then(
            (module) => module.default
          )
        )
      );

      const locationImages = await Promise.all(
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((location) =>
          import(`../assets/location-${location}.png`).then(
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
};
