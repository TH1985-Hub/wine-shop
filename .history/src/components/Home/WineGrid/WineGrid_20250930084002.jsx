

import React from "react";
import WineCard from "../../../common/WineCard/WineCard";
import styles from "./WineGrid.module.css";

const WineGrid = ({ wines }) => {
  const wineIdsToShow = [1, 7, 8, 4];
  
  const displayedWines = wines
    .filter(wine => wineIdsToShow.includes(wine.id))
    .sort((a, b) => wineIdsToShow.indexOf(a.id) - wineIdsToShow.indexOf(b.id));

  return (
    <div className={styles.gridContainer}>
      {displayedWines.map((wine) => (
        <WineCard
          key={wine.id}
          image={wine.img}
          title={wine.title}
          description={wine.text}
        />
      ))}
    </div>
  );
};

export default WineGrid;
