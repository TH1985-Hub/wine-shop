import styles from './Items.module.scss';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import { tours } from '../../../common/toursTypes/texts';

function Items({ lang, isTours }) {
  console.log(isTours)
  const isPaymentPage = window.location.pathname === '/payment';

  return (
      <div id="tourView" className={styles.card}>
        <img src={tours[lang][isTours]['img']} alt="kar" className={styles.img} />
        <div className={styles.descriptionBlock}>
          <h1 className={styles.title}>{tours[lang][isTours]['title']}</h1>
          <p className={styles.price}>Per Person {tours[lang][isTours]['price']} AMD</p>
          <p className={styles.description}>{tours[lang][isTours]['text']}</p>
        <p className={styles.description}>{tours[lang][isTours]['description']}</p>
          {!isPaymentPage &&
            <Link to="/payment" state={{tourId: isTours, lang: lang}}>
              <button className={styles.btn}>Buy Tour</button>
            </Link>
          }
        </div>
      </div>
  );
}

export default Items;
