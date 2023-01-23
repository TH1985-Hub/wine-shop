import Content from './Content/Content';
import reserve from './img/reserve.jpg';
import styles from './Products.module.scss';
import grape from '../../Grapes/img/grape.jpg';
import grape2 from '../../Grapes/img/grape2.jpg';
import grape3 from '../../Grapes/img/grape3.jpg';
import grape4 from '../../Grapes/img/grape4.jpg';
import Items from '../Items/Items';

function Products({setIsWine}) {
  return (
  <div className={styles.container}>
    <div className={styles.left}>
      <Content img={reserve} />
      <Content img={reserve} />
    </div>
    <div className={styles.right}>
      <Content img={reserve} />
      <Content img={reserve} />
    </div>
  </div>
  );
}

export default Products;
