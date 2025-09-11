import React from 'react';
import  { useLocation } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import privacyPDF from '../../common/Files/policy.pdf'
import styles from './Footer.module.scss';
import cx from 'classnames';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // <div className={cx(styles.footer, {[styles.footerDisable]: isHomePage})}>
    //   <a href="https://www.facebook.com/JraghatspanyanWinery?mibextid=ZbWKwL" target="_blank"><FacebookIcon /></a>
    //   <a href="mailto:jraghatspanyanwinery@gmail.com" target="_blank"><EmailIcon /></a>
    //   <a href="https://www.instagram.com/jraghatspanyan_winery/?igshid=YmMyMTA2M2Y%3D" target="_blank"><InstagramIcon /></a>
    //   <a href="tel:+37498506565" target="_blank"><CallIcon /></a>
    //   <a className={styles.privacy} href={privacyPDF} target="_blank" rel="noreferrer">| Privacy and Policy</a>
    // </div>
  );
}

export default Footer;
