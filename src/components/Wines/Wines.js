import { useState } from 'react';
import { ReactComponent as Logo } from '../../common/Header/img/logo.svg';

import Items from './Items/Items';
import Products from './Products/Products';

import { wines } from '../../common/winesInfo/texts';
import styles from './Wines.module.scss';

function Wines() {
  const [isAllShow, setIsShowAll] = useState(false);
  const [isWine, setIsWine] = useState('2');

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Items img={wines[isWine]['img']} text={wines[isWine]['text']} title={wines[isWine]['title']}/>
      </div>
      <div className={styles.right}>
        { isAllShow
          ? <Products setIsWine={setIsWine} /> :
          <div className={styles.allWines}>
            <div>
              <h2 className={styles.title}>Click For Show All Wines</h2>
              <div className={styles.imgContainer}>
                <Logo className={styles.allWinesImg} onClick={() => setIsShowAll(!isAllShow)}/>
                {/*<img src={wine} className={styles.allWinesImg} alt="gif" onClick={() => setIsShowAll(!isAllShow)}/>*/}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Wines;
