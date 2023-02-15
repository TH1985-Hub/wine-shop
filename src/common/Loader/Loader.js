import React from 'react';
import logo from './img/logo.svg';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} />
      </div>
    </div>
  );
}


export default Loader;
