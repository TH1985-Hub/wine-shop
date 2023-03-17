import Content from './Content/Content';
import { getIsTouchDevice } from '../../../utils/getIsDeviceType';

import garanDmak from './img/garanDmak.jpg';
import redDry from './img/redDry.jpg';
import reserveDry from './img/reserveDry.jpg';
import roseDry from './img/roseDry.jpg';
import tigraniSpecial from './img/tigraniSpecial.jpg';
import whiteDry from './img/whiteDry.jpg'
import bambak1 from './img/bambak1.jpg'
import bambak2 from './img/bambak2.jpg'
import bambak3 from './img/bambak3.jpg'
import bambak4 from './img/bambak4.jpg'

import styles from './Products.module.scss';
import ComponentCarousel from '../../../common/CarouselForComponents/ComponentCarousel';

function Products({setIsWine}) {
  const isTouchDevice = getIsTouchDevice();
  const isMobileSize = window.innerWidth < 786;

  const components = [
    <div onClick={()=> setWine('1')}><Content img={garanDmak} /></div>,
    <div onClick={()=> setWine('2')}><Content img={redDry} /></div>,
    <div onClick={()=> setWine('3')}><Content img={reserveDry} /></div>,
    <div onClick={()=> setWine('4')}><Content img={roseDry} /></div>,
    <div onClick={()=> setWine('5')}><Content img={tigraniSpecial} /></div>,
    <div onClick={()=> setWine('6')}><Content img={whiteDry} /></div>,
    <div onClick={()=> setWine('7')}><Content img={bambak1} /></div>,
    <div onClick={()=> setWine('8')}><Content img={bambak2} /></div>,
    <div onClick={()=> setWine('9')}><Content img={bambak3} /></div>,
    <div onClick={()=> setWine('10')}><Content img={bambak4} /></div>,
  ]

  function setWine(ev) {
    setIsWine(ev)
    if (isTouchDevice) {
      let view = document.getElementById("wineView");
      view.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.container}>
      { isMobileSize || isTouchDevice ? <ComponentCarousel components={components}/> :
        <>
          <div className={styles.row}>
            <div onClick={()=> setWine('1')}><Content img={garanDmak} /></div>
            <div onClick={()=> setWine('2')}><Content img={redDry} /></div>
            <div onClick={()=> setWine('6')}><Content img={whiteDry} /></div>
          </div>
          <div className={styles.row}>
            <div onClick={()=> setWine('4')}><Content img={roseDry} /></div>
            <div onClick={()=> setWine('5')}><Content img={tigraniSpecial} /></div>
            <div onClick={()=> setWine('8')}><Content img={bambak2} /></div>
            {/*<div onClick={()=> setWine('10')}><Content img={bambak4} /></div>*/}
          </div>
          <div className={styles.row}>
            <div onClick={()=> setWine('3')}><Content img={reserveDry} /></div>
            <div onClick={()=> setWine('9')}><Content img={bambak3} /></div>
            <div onClick={()=> setWine('7')}><Content img={bambak1} /></div>
          </div>
        </>
      }
    </div>
  );
}

export default Products;
