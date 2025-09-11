import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { texts } from '../../common/texts/texts.';

import video from  './video/homeVideo.mp4';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Home.module.css';
import Loader from '../../common/Loader/Loader.jsx';
import AgeVerification from '../../common/AgeVerification/AgeVerification.jsx';
import cx from 'classnames';

function Home({ lang, setLang }) {
  const [ isVisible, setIsVisible ] = useState(true);
  const [isSectionClosed, setIsSectionClosed] = useState(true);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  function loaded() {
    setIsVisible(false)
  }

  function changeLangRu() {
    setLang('ru');
  }
  function changeLangEn() {
    setLang('en');
  }
  function changeLangAm() {
    setLang('am');
  }

  return (
    <div className={styles.container}>
      <div className={styles.after}></div>
      <AgeVerification />
      { isVisible  && <Loader /> }
      <div className={!isVisible ? styles.hidden : undefined}>
        <video onLoadedData={loaded} className={styles.video} src="https://d2dyoi7emzmazg.cloudfront.net/video.MP4" autoPlay loop playsInline muted/>
        <div className={cx(styles.sections, {[styles.sectionsHideen]: isSectionClosed})}>
          <div className={styles.wrapper}>
            <MenuIcon className={styles.icon} onClick={() => setIsSectionClosed(!isSectionClosed)}/>
            <div className={styles.languages}>
              <span onClick={changeLangEn}>EN</span>|
              <span onClick={changeLangRu}>RU</span>|
              <span onClick={changeLangAm}>AM</span>
            </div>
          </div>
          { !isSectionClosed &&
            <>
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
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
