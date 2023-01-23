import styles from './Tours.module.scss';
import Items from './Items/Items';
import Products from './Products/Products';

function Tours() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Items />
      </div>
      <div className={styles.right}>
        <Products />
      </div>
    </div>
  );
}

export default Tours;
