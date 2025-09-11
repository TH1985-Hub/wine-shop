import React from 'react';
import { Typography } from 'antd';
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
    <div className={cx(styles.footer, {[styles.footerDisable]: isHomePage})}>
      <a href="https://www.facebook.com/JraghatspanyanWinery?mibextid=ZbWKwL" target="_blank"><FacebookIcon /></a>
      <a href="mailto:jraghatspanyanwinery@gmail.com" target="_blank"><EmailIcon /></a>
      <a href="https://www.instagram.com/jraghatspanyan_winery/?igshid=YmMyMTA2M2Y%3D" target="_blank"><InstagramIcon /></a>
      <a href="tel:+37498506565" target="_blank"><CallIcon /></a>
      <a className={styles.privacy} href={privacyPDF} target="_blank" rel="noreferrer">| Privacy and Policy</a>
    </div>
  
  
// const Footer = () => {
//   const { lang } = useLang();

//   return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {/* Logo */}
        <div className={styles.footer__logo-wrapper}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        {/* Columns */}
        <div className={styles.footer__columns}>
          {/* Find Us */}
          <div className={styles.footer__column}>
            <Typography.Paragraph className={styles.footer__column-title}>
              {texts[lang]['findUs']}
            </Typography.Paragraph>
            <a
              href={contactInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Facebook
            </a>
            <a
              href={contactInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              Instagram
            </a>
            <a
              href={contactInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              YouTube
            </a>
          </div>

          {/* Information */}
          <div className={styles.footer__column}>
            <Typography.Paragraph className={styles.footer__column-title}>
              {texts[lang]['information']}
            </Typography.Paragraph>
            <NavLink to="/about" className={styles.footer__link}>
              {texts[lang]['about']}
            </NavLink>
            <NavLink to="/grapes" className={styles.footer__link}>
              {texts[lang]['grapes']}
            </NavLink>
            <NavLink to="/team" className={styles.footer__link}>
              {texts[lang]['team']}
            </NavLink>
          </div>

          {/* Feedback */}
          <div className={styles.footer__column}>
            <Typography.Paragraph className={styles.footer__column-title}>
              {texts[lang]['feedback']}
            </Typography.Paragraph>
            <a
              href={contactInfo.socialLinks.address}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              {texts[lang]['address']}
            </a>
            <a
              href={`tel:${contactInfo.phoneHref}`}
              className={styles.footer__link}
            >
              {texts[lang]['phoneNumber']}
            </a>
            <a
              href="mailto:jraghatspanyanwinery@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer__link}
            >
              {texts[lang]['emailAddress']}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};



export default Footer;
