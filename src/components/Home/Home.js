import React from 'react';
import { NavLink } from 'react-router-dom';
import { texts } from '../../common/texts/texts';

import video from './video/homeVideo.mp4'

import styles from './Home.module.scss';

function Home({ lang }) {
  return (
    <div className={styles.container}>
      <div className={styles.after}></div>
      <video src={video} className={styles.video} autoPlay loop playsInline muted />
      <>
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
      </>
    </div>
  );
}

export default Home;
