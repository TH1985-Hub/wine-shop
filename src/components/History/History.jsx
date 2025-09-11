import Carousel from '../../common/Carousel/Carousel';
import { texts } from '../../common/texts/texts';

import styles from './History.module.scss';

function History({ lang }) {

  const images = [
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist1.jpg',
      alt: "Image 1"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist2.jpg',
      alt: "Image 2"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist3.jpg',
      alt: "Image 3"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist4.jpg',
      alt: "Image 4"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist5.jpg',
      alt: "Image 5"
    },
    {
      src: 'https://d2dyoi7emzmazg.cloudfront.net/hist6.jpg',
      alt: "Image 6"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.description}>
          <h1 className={styles.title}>{texts[lang]['historyTitle']}</h1>
          <p className={styles.info}>{texts[lang]['historyText']}</p>
        </div>
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default History;
