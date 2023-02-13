import Carousel from '../../common/Carousel/Carousel';
import history from './img/his.jpg';
import history1 from './img/his1.jpg';
import history2 from './img/his2.jpg';
import grape from  './img/grape.svg'
import styles from './Grapes.module.scss';
import { texts } from '../../common/texts/texts';

function Grapes({ lang }) {
  const images = [
    {
      src: history,
      alt: "Image 1"
    },
    {
      src: history1,
      alt: "Image 2"
    },
    {
      src: history2,
      alt: "Image 3"
    }
  ];

  return (
    <div className={styles.container}>
      {/*<div className={styles.background}><img src={grape} alt="grape"/></div>*/}

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
