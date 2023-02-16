import tour3 from './img/tour1.jpg';
import tour2 from './img/tour2.jpg';
import tour1 from './img/tour3.jpg';
import tour from './img/tour.jpg';
import styles from './Products.module.scss';
import Content from '../../Wines/Products/Content/Content';
import { tours } from '../../../common/toursTypes/texts'

function Products({ setIsTours }) {
  return (
  <div className={styles.container}>
    <div className={styles.row}>
      <div onClick={()=> setIsTours('1')}><Content img={tour} text={tours['1']['title']}/></div>
      <div onClick={()=> setIsTours('2')}><Content img={tour1} text={tours['2']['title']}/></div>
      <div onClick={()=> setIsTours('3')}><Content img={tour2} text={tours['3']['title']}/></div>
    </div>
    <div className={styles.row}>
      <div onClick={()=> setIsTours('4')}><Content img={tour3} text={tours['4']['title']}/></div>
      <div onClick={()=> setIsTours('5')}><Content img={tour2} text={tours['5']['title']}/></div>
      <div onClick={()=> setIsTours('6')}><Content img={tour3} text={tours['6']['title']}/></div>
    </div>
  </div>
  );
}

export default Products;
