import styles from './Items.module.scss';
import tours from './img/tours.jpg';
import wine from './img/wine.png';

function Items({ img ,text, title }) {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img src={img} className={styles.wineImg} alt='tours'/>
        </div>

        <div className={styles.description}>
          <h1>{title}</h1>
          <div>{text}</div>
        </div>
    </div>
  );
}

export default Items;
