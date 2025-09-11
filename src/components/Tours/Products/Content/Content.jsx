import styles from './Content.module.scss';

function Content({ img, text }) {
  return (
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img  className={styles.flipImg} src={img} alt='tours'  />
            <div className={styles.type}>{text}</div>
          </div>
          <div className={styles.flipCardBack}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
  );
}

export default Content;
