import styles from './Content.module.scss';

function Content({img, text}) {
  return (
    <div className={styles.container}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img  className={styles.flipImg} src={img} alt='tours'  />
          </div>
          <div className={styles.flipCardBack}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
