import Content from './Content/Content';
import reserve from './img/reserve.jpg';
import styles from './Products.module.scss';

function Products({setIsWine}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('1')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('2')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('3')}><Content img={reserve} /></div>
      </div>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('4')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('5')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('6')}><Content img={reserve} /></div>
      </div>
      <div className={styles.row}>
        <div onClick={()=> setIsWine('7')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('8')}><Content img={reserve} /></div>
        <div onClick={()=> setIsWine('9')}><Content img={reserve} /></div>
      </div>
    </div>
  );
}

export default Products;
