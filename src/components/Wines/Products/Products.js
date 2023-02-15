import Content from './Content/Content';

import garanDmak from './img/garanDmak.jpg';
import redDry from './img/redDry.jpg';
import reserveDry from './img/reserveDry.jpg';
import roseDry from './img/roseDry.jpg';
import tigraniSpecial from './img/tigraniSpecial.jpg';
import whiteDry from './img/whiteDry.jpg'

import styles from './Products.module.scss';

function Products({setIsWine}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('1')}><Content img={garanDmak} /></div>
        <div onClick={()=> setIsWine('2')}><Content img={redDry} /></div>
        <div onClick={()=> setIsWine('3')}><Content img={reserveDry} /></div>
      </div>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('4')}><Content img={roseDry} /></div>
        <div onClick={()=> setIsWine('5')}><Content img={tigraniSpecial} /></div>
        <div onClick={()=> setIsWine('6')}><Content img={whiteDry} /></div>
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
