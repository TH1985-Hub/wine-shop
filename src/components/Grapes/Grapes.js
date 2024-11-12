import Carousel from '../../common/Carousel/Carousel';

import history from './img/his.jpg';
import history1 from './img/his1.jpg';
import history2 from './img/his2.jpg';

import { texts } from '../../common/texts/texts';

import styles from './Grapes.module.scss';

function Grapes({ lang }) {
  const images = [
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/his1.jpg',
      alt: "Image 1"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/his.jpg',
      alt: "Image 2"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/his2.jpg',
      alt: "Image 3"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.description}>
          <h1 className={styles.title}>{texts[lang]['grapesTitle']}</h1>
          <p className={styles.info}>{texts[lang]['grapesText']}</p>
        </div>
      </div>
      <div className={styles.right}>
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default Grapes;
