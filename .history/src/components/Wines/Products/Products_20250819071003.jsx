import Content from './Content/Content';
import { getIsTouchDevice } from '../../../utils/getIsDeviceType.jsx';

import styles from './Products.module.scss';
import ComponentCarousel from '../../../common/CarouselForComponents/ComponentCarousel';
import { texts } from '../../../common/texts/texts';

function Products({ setIsWine, setIsHasSelectedItem, lang }) {
  const garanDmak = 'https://d2dyoi7emzmazg.cloudfront.net/garanDmak.jpg';
  const redDry = 'https://d2dyoi7emzmazg.cloudfront.net/redDry.jpg';
  const reserveDry = 'https://d2dyoi7emzmazg.cloudfront.net/reserveDry.jpg';
  const roseDry = 'https://d2dyoi7emzmazg.cloudfront.net/roseDry.jpg';
  const tigraniSpecial = 'https://d2dyoi7emzmazg.cloudfront.net/tigraniSpecial.jpg';
  const whiteDry = 'https://d2dyoi7emzmazg.cloudfront.net/whiteDry.jpg';
  const bambak1 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak1.jpg'
  const bambak2 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak2.jpg'
  const bambak3 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak3.jpg'
  const bambak4 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak4.jpg'

  const isTouchDevice = getIsTouchDevice();
  const isMobileSize = window.innerWidth < 786;

  const components = [
    <div onClick={()=> setWine('1')}><Content img={garanDmak} /></div>,
    <div onClick={()=> setWine('2')}><Content img={redDry} /></div>,
    <div onClick={()=> setWine('3')}><Content img={reserveDry} /></div>,
    <div onClick={()=> setWine('4')}><Content img={roseDry} /></div>,
    <div onClick={()=> setWine('5')}><Content img={tigraniSpecial} /></div>,
    <div onClick={()=> setWine('6')}><Content img={whiteDry} /></div>,
  ]

  const componentForBambak = [
    <div onClick={()=> setWine('7')}><Content img={bambak1} /></div>,
    <div onClick={()=> setWine('8')}><Content img={bambak2} /></div>,
    <div onClick={()=> setWine('9')}><Content img={bambak3} /></div>,
    <div onClick={()=> setWine('10')}><Content img={bambak4} /></div>,
  ]

  function setWine(ev) {
    setIsWine(ev)
    setIsHasSelectedItem(true);
    if (isTouchDevice) {
      let view = document.getElementById("wineView");
      view.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      { isMobileSize || isTouchDevice ?
        <div className={styles.carouselBlock}>
          <h1>{texts[lang]['line1']}</h1>
          <ComponentCarousel components={components}/>
          <h1>{texts[lang]['line2']}</h1>
          <ComponentCarousel components={componentForBambak}/>
        </div> :
        <div className={styles.container}>
          <div className={styles.parent}>
            <h1>{texts[lang]['line1']}</h1>
            <div className={styles.left}>
              <div className={styles.flexity}>
                <div onClick={()=> setWine('1')}><Content img={garanDmak} /></div>
                <div onClick={()=> setWine('2')}><Content img={redDry} /></div>
              </div>
              <div className={styles.flexity}>
                <div onClick={()=> setWine('3')}><Content img={reserveDry} /></div>
                <div onClick={()=> setWine('4')}><Content img={roseDry} /></div>
              </div>
              <div className={styles.flexity}>
                <div onClick={()=> setWine('5')}><Content img={tigraniSpecial} /></div>
                <div onClick={()=> setWine('6')}><Content img={whiteDry} /></div>
              </div>
            </div>
          </div>
          <div className={styles.parent}>
            <h1>{texts[lang]['line2']}</h1>
            <div className={styles.right}>
              <div className={styles.flexity}>
                <div onClick={()=> setWine('7')}><Content img={bambak1} /></div>
                <div onClick={()=> setWine('8')}><Content img={bambak2} /></div>
              </div>
            <div className={styles.flexity}>
              <div onClick={()=> setWine('9')}><Content img={bambak3} /></div>
              <div onClick={()=> setWine('10')}><Content img={bambak4} /></div>
            </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Products;
