import styles from './Grapes.module.scss';
import grape from './img/grape.jpg';
import grape2 from './img/grape2.jpg';
import grape3 from './img/grape3.jpg';
import grape4 from './img/grape4.jpg';

import Content from './content/Content';
const text = "The best Grape";

function Grapes() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Content img={grape} text={text}  />
      </div>
      <div className={styles.right}>
        <Content img={grape2} text={text}  />
      </div>
      <div className={styles.left}>
        <Content img={grape3} text={text}  />
      </div>
      <div className={styles.right}>
        <Content img={grape4} text={text}  />
      </div>
    </div>
  );
}

export default Grapes;
