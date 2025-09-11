// import Content from '../../Wines/Products/Content/Content';
import Content from './Content/Content.jsx';

import { getIsTouchDevice } from '../../../utils/getIsDeviceType.jsx';
import { tours } from '../../../common/toursTypes/texts.jsx'

import styles from './Products.module.scss';
import ComponentCarousel from '../../../common/CarouselForComponents/ComponentCarousel';

function Products({ setIsTours, lang }) {
  const tour = 'https://d2dyoi7emzmazg.cloudfront.net/tour.jpg'
  const tour1 = 'https://d2dyoi7emzmazg.cloudfront.net/tour1.jpg'
  const tour2 = 'https://d2dyoi7emzmazg.cloudfront.net/tour2.jpg'
  const tour3 = 'https://d2dyoi7emzmazg.cloudfront.net/tour3.jpg'

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
