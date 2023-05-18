import styles from './Items.module.scss';
import {useEffect} from 'react';

function Items({ img  }) {
  useEffect(() => {
    document.getElementById('wine').style.height = 'unset'
  },[])

  return (
    <div id="wineView" className={styles.container}>
        <div className={styles.infoContainer}>
          <img src={img} className={styles.wineImg} alt='tours'/>
        </div>
    </div>
  );
}

export default Items;
