import  { useState } from 'react';

import Items from './Items/Items';
import Products from './Products/Products.jsx';

// import { tours } from '../../common/toursTypes/texts';

import styles from './Tours.module.scss';

function Tours({ lang }) {
  const [isTours, setIsTours] = useState('1');

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Products setIsTours={setIsTours} lang={lang} />
      </div>
      <div className={styles.right}>
        {/*<div className={styles.description}>*/}
        {/*  <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>*/}
        {/*  <p className={styles.info}>{texts[lang]['historyText']}</p>*/}
        {/*</div>*/}
        <Items
          isTours={isTours}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default Tours;
