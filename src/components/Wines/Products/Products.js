import Content from './Content/Content';
import { getIsTouchDevice } from '../../../utils/getIsDeviceType';

import garanDmak from './img/garanDmak.jpg';
import redDry from './img/redDry.jpg';
import reserveDry from './img/reserveDry.jpg';
import roseDry from './img/roseDry.jpg';
import tigraniSpecial from './img/tigraniSpecial.jpg';
import whiteDry from './img/whiteDry.jpg'

import styles from './Products.module.scss';

function Products({setIsWine}) {
  const isTouchDevice = getIsTouchDevice();

  function setWine(ev) {
    setIsWine(ev)
    if (isTouchDevice) {
      let view = document.getElementById("wineView");
      view.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div onClick={()=> setWine('1')}><Content img={garanDmak} /></div>
        <div onClick={()=> setWine('2')}><Content img={redDry} /></div>
        <div onClick={()=> setWine('3')}><Content img={reserveDry} /></div>
      </div>
      <div className={styles.row}>
        <div onClick={()=> setWine('4')}><Content img={roseDry} /></div>
        <div onClick={()=> setWine('5')}><Content img={tigraniSpecial} /></div>
        <div onClick={()=> setWine('6')}><Content img={whiteDry} /></div>
      </div>
    </div>
  );
}

export default Products;
