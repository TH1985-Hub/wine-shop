import React from 'react';
import { NavLink } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './MobileNavMenu.module.scss';
import { texts } from '../../common/texts/texts';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function MobileNavMenu({ setOpened, lang }) {

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
          <CallIcon />
          <EmailIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>

  );
}

export default MobileNavMenu;
