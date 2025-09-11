import styles from './Category.module.scss';
import Products from '../Products/Products.jsx';
import ProductsForBambak from '../ProductsForBambak/ProductsForBambak';

function Category({ setIsWine }) {

  return (
    <div className={styles.container}>
        <Products />
        <ProductsForBambak/>
    </div>
  );
}

export default Category;
