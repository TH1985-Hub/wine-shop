import Content from './Content/Content.jsx';
import { getIsTouchDevice } from '../../../utils/getIsDeviceType';

import styles from './ProductsForBambaks.module.scss';
import ComponentCarousel from '../../../common/CarouselForComponents/ComponentCarousel';

function ProductsForBambak({setIsWine}) {
  const bambak1 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak1.jpg'
  const bambak2 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak2.jpg'
  const bambak3 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak3.jpg'
  const bambak4 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak4.jpg'

  const isTouchDevice = getIsTouchDevice();
  const isMobileSize = window.innerWidth < 786;

  const components = [
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
            <div onClick={()=> setWine('7')}><Content img={bambak1} /></div>
            <div onClick={()=> setWine('8')}><Content img={bambak2} /></div>
          </div>
          <div className={styles.row}>
            <div onClick={()=> setWine('9')}><Content img={bambak3} /></div>
            <div onClick={()=> setWine('10')}><Content img={bambak4} /></div>
          </div>
        </>
      }
    </div>
  );
}

export default ProductsForBambak;
