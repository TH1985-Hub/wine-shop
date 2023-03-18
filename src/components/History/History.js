import Carousel from '../../common/Carousel/Carousel';
import { texts } from '../../common/texts/texts';

import styles from './History.module.scss';

function History({ lang }) {

  const images = [
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist1.jpg',
      alt: "Image 1"
    },
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist2.jpg',
      alt: "Image 2"
    },
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist3.jpg',
      alt: "Image 3"
    },
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist4.jpg',
      alt: "Image 4"
    },
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist5.jpg',
      alt: "Image 5"
    },
    {
      src: 'https://wine85.s3.eu-central-1.amazonaws.com/hist6.jpg',
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
