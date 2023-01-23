import React, {useState} from 'react';
import cx from 'classnames';

import { ReactComponent as Logo } from './img/logo.svg';
import grape from './img/grape.png';
import wine from './img/wine.png';
import factory from './img/factory.png';
import history from './img/history.png';

import styles from './Header.module.scss';
import { texts } from '../texts/texts';
import WidgetsIcon from '@mui/icons-material/Widgets';


function Header({setOpened}) {
  const [ lang, setLang ] = useState('en');
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
    <div className={cx(styles.header)}>
      <Logo className={styles.logo} />
      <div className={styles.leftPart}>
        { !isMobileOrLaptop ?
          <div className={styles.sections}>
            <img src={history} className={styles.shake} alt="grape"/>
            <img src={factory} className={styles.shake} alt="grape"/>
            <img src={grape}  className={styles.shake}alt="grape"/>
            <img src={wine} className={styles.shake} alt="grape"/>
          </div>
          : <WidgetsIcon className={styles.icon} onClick={() => setOpened(true)} />
        }
        </div>
      <div className={styles.shopBtn}>Buy Tours</div>
    </div>
  );
}

export default Header;
