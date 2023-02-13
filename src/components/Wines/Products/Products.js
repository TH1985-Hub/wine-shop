import Content from './Content/Content';

import wine1 from './img/wine1.jpg';
import wine2 from './img/wine2.jpg';
import wine3 from './img/wine3.jpg';
import wine4 from './img/wine4.jpg';
import wine5 from './img/wine5.jpg';
import reserve from './img/reserve.jpg'

import styles from './Products.module.scss';

function Products({setIsWine}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('1')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('2')}><Content img={wine2} /></div>
        <div onClick={()=> setIsWine('3')}><Content img={wine3} /></div>
      </div>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('4')}><Content img={wine4} /></div>
        <div onClick={()=> setIsWine('5')}><Content img={wine5} /></div>
        <div onClick={()=> setIsWine('6')}><Content img={wine1} /></div>
      </div>

      {/* ---- This part for 9 wine products showing ---- */}
      {/*<div className={styles.row}>*/}
      {/*  <div onClick={()=> setIsWine('7')}><Content img={wine1} /></div>*/}
      {/*  <div onClick={()=> setIsWine('8')}><Content img={wine1} /></div>*/}
      {/*  <div onClick={()=> setIsWine('9')}><Content img={wine1} /></div>*/}
      {/*</div>*/}
    </div>
  );
}

export default Products;
