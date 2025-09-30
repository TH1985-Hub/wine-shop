import React from "react";
;
import WineCard from "../../commonWineCard/WineCard";
import styles from "./WineGrid.module.css";

const WineGrid = ({ wines }) => {
  return (
    <div className={styles.gridContainer}>
      {wines.map((wine) => (
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
