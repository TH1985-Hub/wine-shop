import React from 'react';
import  { useLocation } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import styles from './Footer.module.scss';
import cx from 'classnames';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={cx(styles.footer, {[styles.footerDisable]: isHomePage})}>
      <CallIcon />
      <EmailIcon />
      <InstagramIcon />
      <FacebookIcon />
    </div>
  );
}

export default Footer;
