import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo  from './img/logo.svg';
import grape from './img/grape.png';
import wine from './img/wine.png';
import factory from './img/factory.png';
import history from './img/history.png';
import MenuIcon from '@mui/icons-material/Menu';
import { texts } from '../../common/texts/texts.jsx';

import styles from './Header.module.scss';
import cx from 'classnames';


function Header({ setOpened, setLang, lang }) {


  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isMobileOrLaptop = window.innerWidth < 1028;

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
    <div className={cx(styles.header, {[styles.headerDisable]: isHomePage})}>
      <NavLink to={'/'}>
      <img src={logo} alt="Logo" className={styles.logo} />
        {/* <Logo className={styles.logo} /> */}
      </NavLink>
      <div className={styles.leftPart}>
        { !isMobileOrLaptop &&
          <div className={styles.sections}>
            <NavLink to={'history'} className={styles.navLink}>
              <img src={history} className={styles.shake} alt="grape" />
              <p>{texts[lang]['home']}</p>
            </NavLink>
            <NavLink to={'grapes'} className={styles.navLink}>
              <img src={grape} className={styles.shake} alt="grape" />
              <p>{texts[lang]['grapes']}</p>
            </NavLink>
            <NavLink to={'wines'} className={styles.navLink}>
              <img src={wine}  className={styles.shake} alt="grape" />
              <p>{texts[lang]['wines']}</p>
            </NavLink>
            <NavLink to={'tours'} className={styles.navLink}>
              <img src={factory} className={styles.shake} alt="grape" />
              <p>{texts[lang]['tours']}</p>
            </NavLink>
          </div>
        }
        </div>
        <div className={styles.wrapper}>
          {!isMobileOrLaptop ?
            <NavLink to={'payment'}>
              <div className={styles.btnWrapper}>
                <div className={styles.shopBtn}>Buy Tours</div>
              </div>
            </NavLink>
            :
            <MenuIcon className={styles.icon} onClick={() =>
              console.log("Menu i")
               setOpened(true)}/>
          }
          <div className={styles.languages}>
            <span onClick={changeLangEn}>EN</span>
            <span onClick={changeLangRu}>RU</span>
            <span onClick={changeLangAm}>AM</span>
          </div>
        </div>
    </div>
  );
}

export default Header;
