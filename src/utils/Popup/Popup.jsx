import React from 'react';
import styles from './Popup.module.scss';

function Popup({ isOpen, handleClose, title, children }) {
  return (
    <div className={`${styles.popupOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Popup;
