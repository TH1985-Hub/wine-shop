// import React from "react";
// import { useLanguage } from "../../contexts/LanguageContext";
// import { toursTexts } from "../../common/texts/toursTexts";
// import styles from "./Tours.module.css";

// import barrelsWine from "./images/barrels-wine.png";


// const Tours = () => {
//   const { currentLanguage } = useLanguage();
//   const texts = toursTexts[currentLanguage] || toursTexts.en;

//   const handleViewPackages = () => {
//     console.log("View packages clicked");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.imageGrid}>
//           <img
//             src={barrelsWine}
//             alt="Barrels Wine"
//             className={styles.gridImage}
//             loading="lazy"
//           />
//         </div>

//         <div className={styles.textContent}>
//           <h1 className={styles.title}>{texts.title}</h1>
//           <div className={styles.description}>
//             {texts.description.map((paragraph, index) => {
//               const isCentered = index === 2 || index === 3;
              
//               return (
//                 <p 
//                   key={index} 
//                   className={isCentered ? styles.centeredText : ""}
//                   style={{ marginBottom: paragraph.trim() ? "1rem" : "0.5rem" }}
//                 >
//                   {paragraph}
//                 </p>
//               );
//             })}
//           </div>
//           <button className={styles.button} onClick={handleViewPackages} aria-label={texts.buttonText}>
//             {texts.buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tours;

// import React from "react";
// import { useLanguage } from "../../contexts/LanguageContext";
// import { toursTexts } from "../../common/texts/toursTexts";
// import styles from "./Tours.module.css";

// import barrelsWine from "./images/barrels-wine.png";

//  const Tour = () => {
//   const { currentLanguage } = useLanguage();
//   const texts = toursTexts[currentLanguage] || toursTexts.en;

//   const handleViewPackages = () => {
//     console.log("View packages clicked");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.imageGrid}>
//           <img
//             src={barrelsWine}
//             alt="Barrels Wine"
//             className={styles.gridImage}
//             loading="lazy"
//           />
//         </div>

//         <div className={styles.textContent}>
//           <h1 className={styles.title}>{texts.title}</h1>
//           <div className={styles.description}>
//             {texts.description.map((paragraph, index) => {
//               const isCentered = index === 2 || index === 3;
              
//               return (
//                 <p 
//                   key={index} 
//                   className={isCentered ? styles.centeredText : ""}
//                   style={{ marginBottom: paragraph.trim() ? "1rem" : "0.5rem" }}
//                 >
//                   {paragraph}
//                 </p>
//               );
//             })}
//           </div>
//           <button className={styles.button} onClick={handleViewPackages} aria-label={texts.buttonText}>
//             {texts.buttonText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tour;

