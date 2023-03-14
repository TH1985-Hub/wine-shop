import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { texts } from '../../common/texts/texts';

import video from './video/homeVideo.mp4'

import styles from './Home.module.scss';
import Loader from '../../common/Loader/Loader';

function Home({ lang }) {
  const [ isVisible, setIsVisible ] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  function loaded() {
    setIsVisible(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.after}></div>
      { isVisible  && <Loader /> }
      <div className={!isVisible ? styles.hidden : undefined}>
        <video onLoadedData={loaded} className={styles.video} src="https://d2dyoi7emzmazg.cloudfront.net/homeVideo.mp4" autoPlay loop playsInline muted/>
        <div className={styles.sections}>
          <NavLink to='history' className={styles.navLink}>
            <div className={styles.text}>{texts[lang]['home']}</div>
          </NavLink>
          <NavLink to='history' className={styles.navLink}>
            <div className={styles.text}>{texts[lang]['history']}</div>
          </NavLink>
          <NavLink to='tours' className={styles.navLink}>
            <div className={styles.text}>{texts[lang]['tours']}</div>
          </NavLink>
          <NavLink to='grapes' className={styles.navLink}>
            <div className={styles.text}>{texts[lang]['grapes']}</div>
          </NavLink>
          <NavLink to='wines' className={styles.navLink}>
            <div className={styles.text}>{texts[lang]['wines']}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
