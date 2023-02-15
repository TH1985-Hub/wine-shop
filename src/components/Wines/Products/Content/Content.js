import styles from './Content.module.scss';

function Content({ img, text }) {
  return (
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img  className={styles.flipImg} src={img} alt='tours'  />
            <p className={styles.type}>REd dry</p>
          </div>
          <div className={styles.flipCardBack}>
            <p>JRAGHATSPANYAN</p>
            <p>See more about this wine.</p>
          </div>
        </div>
      </div>
  );
}

export default Content;
