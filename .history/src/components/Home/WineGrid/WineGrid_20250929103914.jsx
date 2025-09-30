// import React from "react"
// import WineCard from "../../../common/WineCard/WineCard";
// import styles from "./WineGrid.module.css";

// const WineGrid = ({ wines }) => {
//   return (
//     <div className={styles.gridContainer}>
//       {wines.map((wine) => (
//         <WineCard
//           key={wine.id}
//           image={wine.img}
//           title={wine.title}
//           description={wine.text}
//         />
//       ))}
//     </div>
//   );
// };

// export default WineGrid;

import React from "react";
import WineCard from "../../../common/WineCard/WineCard";
import styles from "./WineGrid.module.css";

const WineGrid = ({ wines }) => {
  const wineIdsToShow = [1, 7, 8, 4]; // Change these IDs to the wines you want to show
  
  const displayedWines = wines.filter(wine => wineIdsToShow.includes(wine.id));

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
