import styles from './Items.module.scss';

function Items({ img  }) {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img src={img} className={styles.wineImg} alt='tours'/>
        </div>
    </div>
  );
}

export default Items;
