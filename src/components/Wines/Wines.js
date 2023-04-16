import { useState } from 'react';
import { ReactComponent as Logo } from '../../common/Header/img/logo.svg';

import Items from './Items/Items';
import Products from './Products/Products';

import { wines } from '../../common/winesInfo/texts';
import styles from './Wines.module.scss';
import ProductsForBambak from './ProductsForBambak/ProductsForBambak';

function Wines() {
  const [isWine, setIsWine] = useState('2');
  const [isShowBambak, setIsShowBambak] = useState(false);

  return (
    <div className={styles.container}>
      <Items img={wines[isWine]['img']} />
      <div className={styles.description}>
        <div onClick={() => setIsShowBambak(!isShowBambak)} className={styles.show}>To show The Bambak Wines</div>
        <h1>{wines[isWine]['title']}</h1>
        <div>{wines[isWine]['text']}</div>
      </div>
      { isShowBambak ?
        <ProductsForBambak setIsWine={setIsWine} /> :
        <Products setIsWine={setIsWine} />
      }
    </div>
  );
}

export default Wines;
