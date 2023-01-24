import styles from './Items.module.scss';
import tours from './img/tours.jpg';

function Items() {
  return (
      <div className={styles.card}>
        <img src={tours} alt="kar" className={styles.img} />
          <h1 className={styles.title}>Tour to Abovyans</h1>
          <p className={styles.price}>$19.99</p>
          <p className={styles.description}>The wines of the Jarghatspanyan wine factory will be presented in the tasting hall of Dalan Abovyan 12 restaurant. </p>
            <button className={styles.btn}>Buy Tour</button>
      </div>
  );
}

export default Items;
