import React from 'react';
import cx from 'classnames';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={cx(styles.footer)}>
      <CallIcon />
      <EmailIcon />
      <InstagramIcon />
      <FacebookIcon />
    </div>
  );
}

export default Footer;
