import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from './img/logo.svg';
import grape from './img/grape.png';
import wine from './img/wine.png';
import factory from './img/factory.png';
import history from './img/history.png';
import MenuIcon from '@mui/icons-material/Menu';


import styles from './Header.module.scss';
import cx from 'classnames';


function Header({ setOpened, setLang }) {


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
        <Logo className={styles.logo} />
      </NavLink>
      <div className={styles.leftPart}>
        { !isMobileOrLaptop ?
          <div className={styles.sections}>
            <NavLink to={'history'}>
              <img src={history} className={styles.shake} alt="grape" />
            </NavLink>
            <NavLink to={'tours'}>
              <img src={factory} className={styles.shake} alt="grape" />
            </NavLink>
            <NavLink to={'grapes'}>
              <img src={grape} className={styles.shake} alt="grape" />
            </NavLink>
            <NavLink to={'wines'}>
              <img src={wine}  className={styles.shake} alt="grape" />
            </NavLink>
          </div>
          : <MenuIcon className={styles.icon} onClick={() => setOpened(true)} />
        }
        </div>
      { !isMobileOrLaptop &&
        <div className={styles.wrapper}>
          <NavLink to={'payment'}>
            <div className={styles.btnWrapper}><div className={styles.shopBtn}>Buy Tours</div></div>
          </NavLink>
          <div className={styles.languages}>
            <span onClick={changeLangEn}>EN</span>
            <span onClick={changeLangRu}>RU</span>
            <span onClick={changeLangAm}>AM</span>
          </div>
        </div>
      }
    </div>
  );
}

export default Header;
