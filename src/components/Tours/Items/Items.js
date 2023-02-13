import styles from './Items.module.scss';

function Items({ img, title, price, text, description }) {
  return (
      <div className={styles.card}>
        <img src={img} alt="kar" className={styles.img} />
        <div className={styles.descriptionBlock}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.price}>Per Person {price} AMD</p>
          <p className={styles.description}>{text}</p>
        <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.btn}>Buy Tour</button>
      </div>
  );
}

export default Items;
