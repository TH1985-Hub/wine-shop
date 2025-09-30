// import {useEffect, useState} from 'react';
// import logo from '../../common/Header/img/logo.svg';

// import Items from './Items/Items.jsx';
// import Products from './Products/Products.jsx';

// import { wines } from '../../common/winesInfo/texts.jsx';
// import styles from './Wines.module.scss';
// import ProductsForBambak from './ProductsForBambak/ProductsForBambak.jsx';

// function Wines({ lang }) {
//   const [isWine, setIsWine] = useState('2');
//   const [isHasSelectedItem, setIsHasSelectedItem] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = "auto";
//   },[])

//   return (
//     <div className={styles.container} id="wine">
//       {isHasSelectedItem ?
//         <div className={styles.info}>
//           <div className={styles.description}>
//           <img src={logo} alt="Logo" className={styles.logo} />
//             <div onClick={() => setIsHasSelectedItem(false)} className={styles.back}>Back To All Wines</div>
//             <h1>{wines[isWine]['title']}</h1>
//             <div>{wines[isWine]['text']}</div>
//           </div>
//           <Items img={wines[isWine]['img']}/>
//         </div> :
//         // <ProductsForBambak setIsWine={setIsWine} /> :
//         <Products setIsHasSelectedItem={setIsHasSelectedItem} setIsWine={setIsWine} lang={lang} />
//       }
//     </div>
//   );
// }

// export default Wines;    
// Wines.jsx
// import React from "react";
// import { Typography } from "antd";
// import Product from "./Product";
// import styles from "./wines.module.css";

// const { Title } = Typography;

// export default function Wines() {
//   return (
//     <div className={styles.wrapper}>
//       <Title className={styles.title}>Wines</Title>
//       <Product />
//     </div>
//   );
// }
