import Content from '../../Wines/Products/Content/Content';

import { getIsTouchDevice } from '../../../utils/getIsDeviceType';
import { tours } from '../../../common/toursTypes/texts'

import tour3 from './img/tour1.jpg';
import tour2 from './img/tour2.jpg';
import tour1 from './img/tour3.jpg';
import tour from './img/tour.jpg';

import styles from './Products.module.scss';
import ComponentCarousel from '../../../common/CarouselForComponents/ComponentCarousel';
import pic1 from '../../History/img/his1.jpg';
import pic2 from '../../History/img/his2.jpg';
import pic3 from '../../History/img/his3.jpg';
import pic4 from '../../History/img/his4.jpg';
import pic5 from '../../History/img/his5.jpg';
import pic6 from '../../History/img/his6.jpg';

function Products({ setIsTours, lang }) {
  const isTouchDevice = getIsTouchDevice();
  const isMobileSize = window.innerWidth < 786;

  function setTour(ev) {
    setIsTours(ev)
    if (isTouchDevice) {
      let view = document.getElementById("tourView");
      view.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const components = [
    <div onClick={()=> setTour('1')}><Content img={tour} text={tours[lang]['1']['title']}/></div>,
    <div onClick={()=> setTour('2')}><Content img={tour1} text={tours[lang]['2']['title']}/></div>,
    <div onClick={()=> setTour('3')}><Content img={tour2} text={tours[lang]['3']['title']}/></div>,
    <div onClick={()=> setTour('4')}><Content img={tour3} text={tours[lang]['4']['title']}/></div>,
    <div onClick={()=> setTour('5')}><Content img={tour2} text={tours[lang]['5']['title']}/></div>,
    <div onClick={()=> setTour('6')}><Content img={tour3} text={tours[lang]['6']['title']}/></div>,
  ];

  return (
  <div className={styles.container}>
    { isMobileSize || isTouchDevice ? <ComponentCarousel components={components}/> :
      <>
        <div className={styles.row}>
          <div onClick={()=> setTour('1')}><Content img={tour} text={tours[lang]['1']['title']}/></div>
          <div onClick={()=> setTour('2')}><Content img={tour1} text={tours[lang]['2']['title']}/></div>
          <div onClick={()=> setTour('3')}><Content img={tour2} text={tours[lang]['3']['title']}/></div>
        </div>
        <div className={styles.row}>
          <div onClick={()=> setTour('4')}><Content img={tour3} text={tours[lang]['4']['title']}/></div>
          <div onClick={()=> setTour('5')}><Content img={tour2} text={tours[lang]['5']['title']}/></div>
          <div onClick={()=> setTour('6')}><Content img={tour3} text={tours[lang]['6']['title']}/></div>
        </div>
      </>
    }
  </div>
  );
}

export default Products;
