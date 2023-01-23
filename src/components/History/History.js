import styles from './History.module.scss';
import background from './img/background.png';
import history from './img/history.jpg';
import history1 from './img/history1.jpg';
import history2 from './img/history2.jpg';

function History() {
  return (
    <div className={styles.container}>
      <img src={background} className={styles.background}  alt='tours'/>
      <div className={styles.content}>
        <div className={styles.description}>
          <p>Jraghatspanyan Winery is a wine production company located in the Armavir Region of Armenia. </p>
          <p>The family has been involved in wine making for many years. Two years ago they invested in the business and acquired new technologies to keep update with quality standards.</p>
          <p>They are striving to combine the cherished traditions and modern approaches. Jraghatspanyan wines, ripen and mature acquiring exclusive tones in an ancient cellar built in the 1890s.</p>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.historyImg} src={history} alt='tours'/>
          <img className={styles.historyImg}src={history1} alt='tours'/>
          <img className={styles.historyImg} src={history2} alt='tours'/>
        </div>
      </div>

    </div>
  );
}

export default History;
