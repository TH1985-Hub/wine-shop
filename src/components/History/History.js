import Carousel from '../../common/Carousel/Carousel';
import { useState } from 'react';

import { texts } from '../../common/texts/texts';

import wine1 from '../../components/Wines/Products/img/wine1.jpg';
import wine2 from '../../components/Wines/Products/img/wine2.jpg';
import wine3 from '../../components/Wines/Products/img/wine3.jpg';
import styles from './History.module.scss';

function History({ lang }) {

  const images = [
    {
      src: wine1,
      alt: "Image 1"
    },
    {
      src: wine2,
      alt: "Image 2"
    },
    {
      src: wine3,
      alt: "Image 3"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.description}>
          <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>
          <p className={styles.info}>{texts[lang]['historyText']}</p>
        </div>
      </div>
      <div className={styles.right}>
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default History;
