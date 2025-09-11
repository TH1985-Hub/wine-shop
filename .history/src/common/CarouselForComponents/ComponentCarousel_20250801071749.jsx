import React, { useState, useRef } from "react";
import { getIsTouchDevice } from '../../utils/getIsDeviceType';

import styles from './ComponentCarousel.module.scss'
import cx from 'classnames';

function ComponentCarousel({ components }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isTouchDevice = getIsTouchDevice();

  const handlePrev = () => {
    setIndex((index + components.length - 1) % components.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % components.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  return (
    <div className={styles.carousel}
         onTouchStart={handleTouchStart}
         onTouchEnd={handleTouchEnd}>
      <button className={styles.btnPrev} onClick={handlePrev}>
        &#8249;
      </button>
      {components[index]}
      <button className={styles.btnNext} onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
}

export default ComponentCarousel;
