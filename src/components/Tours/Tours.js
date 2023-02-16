import  {useState } from 'react';

import Items from './Items/Items';
import Products from './Products/Products';

import { texts } from '../../common/texts/texts';
import { tours } from '../../common/toursTypes/texts';

import styles from './Tours.module.scss';

function Tours({ lang }) {
  const [isTours, setIsTours] = useState('1');

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Products setIsTours={setIsTours} />
      </div>
      <div className={styles.right}>
        <div className={styles.description}>
          <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>
          <p className={styles.info}>{texts[lang]['historyText']}</p>
        </div>
        <Items
          img={tours[isTours]['img']}
          title={tours[isTours]['title']}
          price={tours[isTours]['price']}
          text={tours[isTours]['text']}
          description={tours[isTours]['description']}
        />
      </div>
    </div>
  );
}

export default Tours;
