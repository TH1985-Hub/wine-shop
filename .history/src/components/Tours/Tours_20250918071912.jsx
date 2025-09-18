// import  { useState } from 'react';

// import Items from './Items/Items.jsx';
// import Products from './Products/Products.jsx';

// // import { tours } from '../../common/toursTypes/texts';

// import styles from './Tours.module.scss';

// function Tours({ lang }) {
//   const [isTours, setIsTours] = useState('1');

//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <Products setIsTours={setIsTours} lang={lang} />
//       </div>
//       <div className={styles.right}>
//             {/*<div className={styles.description}>*/}
//         {/*  <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>*/}
//         {/*  <p className={styles.info}>{texts[lang]['historyText']}</p>*/}
//         {/*</div>*/}
    
//         <Items
//           isTours={isTours}
//           lang={lang}
//         />
//       </div>
//     </div>
//   );
// }

// export default Tours;

"use client"

import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { toursTexts } from "../../common/texts/toursTexts"
import styles from "./tour.module.css"

const Tour = () => {
  const { currentLanguage } = useContext(LanguageContext)
  const texts = toursTexts[currentLanguage]  ||  toursTexts.en

  const handleViewPackages = () => {
    // Handle view packages action
    console.log("View packages clicked")
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageGrid}>
          <img
            src="/tours-grid-image.png"
            alt="Wine cellar and vineyard tour gallery"
            className={styles.gridImage}
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>{texts.title}</h1>
          <div className={styles.description}>
            {texts.description.split("\n").map((paragraph, index) => (
              <p key={index} style={{ marginBottom: paragraph.trim() ? "1rem" : "0.5rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
          <button className={styles.button} onClick={handleViewPackages} aria-label={texts.buttonText}>
            {texts.buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tour