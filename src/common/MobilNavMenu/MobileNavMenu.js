import React from 'react';
import cx from 'classnames';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './MobileNavMenu.module.scss';
function MobileNavMenu({setOpened}) {


  return (
      <div className={styles.container}>
        <CancelIcon className={styles.icon} onClick={() => setOpened(false)} />
        <div className={styles.sections}>
          <div className={styles.text}>Home</div>
          <div className={styles.text}>Tours</div>
          <div className={styles.text}>History</div>
          <div className={styles.text}>Wines</div>
          <div className={styles.text}>Grapes</div>
        </div>
      </div>
  );
}

export default MobileNavMenu;
