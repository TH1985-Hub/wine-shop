import React from 'react';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { 
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled 
} from '@ant-design/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { footerTexts } from '../../common/texts/footerTexts';
import logo from './img/logo.png';
import styles from './Footer.module.css';


const Footer = () => {
  const { currentLanguage} = useLanguage();
  const texts = footerTexts?.[currentLanguage] || footerTexts.en;


  
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>

        {/* Logo Section */}
        <div className={styles['logo-section']}>
          <div className={styles['logo-wrapper']}>
            <img src={logo} alt="Jraghatspanyan Wines" className={styles.logo} />
          </div>
          <div className={styles['social-icons']}>
            <a href="#" aria-label="Facebook">
              <FacebookFilled />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramFilled />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeFilled />
            </a>
          </div>
        </div>

      
        <div className={styles['footer-section']}>
          <Typography.Title level={5} className={styles['column-header']}>
            {texts.findUs}
          </Typography.Title>
          <div className={styles.links}>
            <NavLink to="/facebook" className={styles.link}>
              {texts.facebook}
            </NavLink>
            <NavLink to="/instagram" className={styles.link}>
              {texts.instagram}
            </NavLink>
            <NavLink to="/youtube" className={styles.link}>
              {texts.youtube}
            </NavLink>
          </div>
        </div>

        <div className={styles['footer-section']}>
          <Typography.Title level={5} className={styles['column-header']}>
            {texts.information}
          </Typography.Title>
          <div className={styles.links}>
            <NavLink to="/aboutUs" className={styles.link}>
              {texts.aboutUs}
            </NavLink>

            <NavLink to="/terror" className={styles.link}>
              {texts.terroir}
            </NavLink>
            <NavLink to="/team" className={styles.link}>
              {texts.team}
            </NavLink>
          </div>
        </div>

        <div className={styles['footer-section']}>
          <Typography.Title level={5} className={styles['column-header']}>
            {texts.feedback}
          </Typography.Title>
          <div className={styles.links}>
            <NavLink to="/address" className={styles.link}>
              {texts.address}
            </NavLink>
            <NavLink to="/Phone Number" className={styles.link}>
              {texts.phoneNumber}
            </NavLink>
            <NavLink to="/email" className={styles.link}>
              {texts.emailAddress}
            </NavLink>
          </div>
        </div>
      </div>

    
      <div className={styles.copyright}>
        <Typography.Text>
          {texts.copyright}
          © 2025 Jraghatspanyan Wines. All rights reserved.
        </Typography.Text>
      </div>
    </footer>
  );
};

export default Footer;

