import React, { useState } from "react";
import styles from './Carousel.module.scss'

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };


  return (
    <div className={styles.carousel}>
      <button className={styles.btnPrev} onClick={handlePrev}>
        &lt;
      </button>
      <img src={images[index].src} alt={images[index].alt} className={styles.img} />
      <button className={styles.btnNext} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
