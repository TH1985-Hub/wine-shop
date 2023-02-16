import Carousel from '../../common/Carousel/Carousel';
import { useState } from 'react';

import { texts } from '../../common/texts/texts';

import pic1 from './img/his1.jpg';
import pic2 from './img/his2.jpg';
import pic3 from './img/his3.jpg';
import pic4 from './img/his4.jpg';
import pic5 from './img/his5.jpg';
import pic6 from './img/his6.jpg';
import styles from './History.module.scss';

function History({ lang }) {

  const images = [
    {
      src: pic1,
      alt: "Image 1"
    },
    {
      src: pic2,
      alt: "Image 2"
    },
    {
      src: pic3,
      alt: "Image 3"
    },
    {
      src: pic4,
      alt: "Image 4"
    },
    {
      src: pic5,
      alt: "Image 5"
    },
    {
      src: pic6,
      alt: "Image 6"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Carousel images={images} />
        <div className={styles.description}>
          <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>
          <p className={styles.info}>{texts[lang]['historyText']}</p>
        </div>
      </div>

      {/*<div className={styles.left}>*/}
      {/*  <div className={styles.description}>*/}
      {/*    <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>*/}
      {/*    <p className={styles.info}>{texts[lang]['historyText']}</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={styles.right}>*/}
      {/*  <Carousel images={images} />*/}
      {/*</div>*/}
    </div>
  );
}

export default History;
