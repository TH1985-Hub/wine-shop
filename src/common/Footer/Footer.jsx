



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
import logo from './assets/logo.png';
import styles from './Footer.module.css';

const { Title, Text } = Typography;

const Footer = () => {
  const { currentLanguage } = useLanguage();
  
 
  const texts = footerTexts?.[currentLanguage] || footerTexts.en;

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
       
        <div className={styles['logo-wrapper']}>
          <img 
            src={logo}
             alt="Jraghatspanyan Wine" 
            className={styles.logo}
          />
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
        
        
        <div className={styles.columns}>
          
          <div className={`${styles.column} ${styles['column--1']}`}>
            <Title level={4} className={styles['column-header']}>{texts.findUs}</Title>
            <div className={styles.links}>
              <a href="#" className={styles.link}>{texts.facebook}</a>
              <a href="#" className={styles.link}>{texts.instagram}</a>
              <a href="#" className={styles.link}>{texts.youtube}</a>
            </div>
          </div>
          
        
          <div className={`${styles.column} ${styles['column--2']}`}>
            <Title level={4} className={styles['column-header']}>{texts.information}</Title>
            <div className={styles.links}>
              <NavLink to="/about" className={styles.link}>{texts.aboutUs}</NavLink>
              <NavLink to="/terroir" className={styles.link}>{texts.terroir}</NavLink>
              <NavLink to="/team" className={styles.link}>{texts.team}</NavLink>
            </div>
          </div>
         
          <div className={`${styles.column} ${styles['column--3']}`}>
            <Title level={4} className={styles['column-header']}>{texts.feedback}</Title>
            <div className={styles.links}>
              <NavLink to="/contact" className={styles.link}>{texts.address}</NavLink>
              <a href="tel:+1234567890" className={styles.link}>{texts.phoneNumber}</a>
              <a href="mailto:info@jraghatspanyan.com" className={styles.link}>{texts.emailAddress}</a>
            </div>
          </div>
        </div>
      </div>
      
    
      <div className={styles.copyright}>
        <Text>© {new Date().getFullYear()} Jraghatspanyan Wines. All rights reserved.</Text>
      </div>
    </div>
  );
};

export default Footer;