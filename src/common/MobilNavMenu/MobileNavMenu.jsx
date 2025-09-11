import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { texts } from '../../common/texts/texts';
import privacyPDF from '../Files/policy.pdf';

import CancelIcon from '@mui/icons-material/Cancel';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './MobileNavMenu.module.scss';

function MobileNavMenu({ setOpened, lang }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  return (
      <div className={styles.container}>
        <CancelIcon className={styles.icon} onClick={() => setOpened(false)} />
        <div className={styles.sections}>
        <NavLink to={'history'} onClick={() => setOpened(false)}>
          <div className={styles.text}>{texts[lang]['history']}</div>
        </NavLink>
        <NavLink to={'tours'} onClick={() => setOpened(false)}>
          <div className={styles.text}>{texts[lang]['tours']}</div>
        </NavLink>
        <NavLink to={'grapes'} onClick={() => setOpened(false)}>
          <div className={styles.text}>{texts[lang]['grapes']}</div>
        </NavLink>
        <NavLink to={'wines'} onClick={() => setOpened(false)}>
          <div className={styles.text}>{texts[lang]['wines']}</div>
        </NavLink>
        </div>
        <div className={styles.mobileFooter}>
          <a href="https://www.facebook.com/JraghatspanyanWinery?mibextid=ZbWKwL" target="_blank"><FacebookIcon /></a>
          <a href="mailto:jraghatspanyanwinery@gmail.com" target="_blank"><EmailIcon /></a>
          <a href="https://www.instagram.com/jraghatspanyan_winery/?igshid=YmMyMTA2M2Y%3D" target="_blank"><InstagramIcon /></a>
          <a href="tel:+37498506565" target="_blank"><CallIcon /></a>
          <a className={styles.privacy} href={privacyPDF} target="_blank" rel="noreferrer">| Privacy and Policy</a>
        </div>
      </div>

  );
}

export default MobileNavMenu;
