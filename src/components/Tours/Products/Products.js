import Content from './Content/Content';
import tour from './img/tour.jpg';
import tour1 from './img/tour1.jpg';
import tour2 from './img/tour2.jpg';
import tour3 from './img/tour3.jpg';
import styles from './Products.module.scss';

function Products({ setIsTours }) {
  return (
  <div className={styles.container}>
    <div>
      <div onClick={()=> setIsTours('1')}><Content img={tour} text={'Click For Details'} /></div>
      <div onClick={()=> setIsTours('2')}><Content img={tour1} text={'Click For Details'} /></div>
    </div>
    <div>
      <div onClick={()=> setIsTours('3')}><Content img={tour2} text={'Click For Details'} /></div>
      <div onClick={()=> setIsTours('4')}><Content img={tour3} text={'Click For Details'} /></div>
    </div>
  </div>
  );
}

export default Products;
