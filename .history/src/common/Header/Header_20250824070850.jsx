// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// import logo  from './img/logo.svg';
// import grape from './img/grape.png';
// import wine from './img/wine.png';
// import factory from './img/factory.png';
// import history from './img/history.png';
// import MenuIcon from '@mui/icons-material/Menu';
// import { texts } from '../../common/texts/texts.jsx';

// import styles from './Header.module.scss';
// import cx from 'classnames';


// function Header({ setOpened, setLang, lang }) {


//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   const isMobileOrLaptop = window.innerWidth < 1028;

//   function changeLangRu() {
//     setLang('ru');
//   }
//   function changeLangEn() {
//     setLang('en');
//   }
//   function changeLangAm() {
//     setLang('am');
//   }

//   return (
//     <div className={cx(styles.header, {[styles.headerDisable]: isHomePage})}>
//       <NavLink to={'/'}>
//       <img src={logo} alt="Logo" className={styles.logo} />
//         {/* <Logo className={styles.logo} /> */}
//       </NavLink>
//       <div className={styles.leftPart}>
//         { !isMobileOrLaptop &&
//           <div className={styles.sections}>
//             <NavLink to={'history'} className={styles.navLink}>
//               <img src={history} className={styles.shake} alt="grape" />
//               <p>{texts[lang]['home']}</p>
//             </NavLink>
//             <NavLink to={'grapes'} className={styles.navLink}>
//               <img src={grape} className={styles.shake} alt="grape" />
//               <p>{texts[lang]['grapes']}</p>
//             </NavLink>
//             <NavLink to={'wines'} className={styles.navLink}>
//               <img src={wine}  className={styles.shake} alt="grape" />
//               <p>{texts[lang]['wines']}</p>
//             </NavLink>
//             <NavLink to={'tours'} className={styles.navLink}>
//               <img src={factory} className={styles.shake} alt="grape" />
//               <p>{texts[lang]['tours']}</p>
//             </NavLink>
//           </div>
//         }
//         </div>
//         <div className={styles.wrapper}>
//           {!isMobileOrLaptop ?
//             <NavLink to={'payment'}>
//               <div className={styles.btnWrapper}>
//                 <div className={styles.shopBtn}>Buy Tours</div>
//               </div>
//             </NavLink>
//             :
//             <MenuIcon className={styles.icon} onClick={() =>{
//               console.log("Menu icon clicked")
//                setOpened(true)}}/>
//           }
//           <div className={styles.languages}>
//             <span onClick={changeLangEn}>EN</span>
//             <span onClick={changeLangRu}>RU</span>
//             <span onClick={changeLangAm}>AM</span>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { texts } from "../../common/texts/texts.jsx";

import logo from "./img/logo.svg";
import grape from "./img/grape.png";
import wine from "./img/wine.png";
import factory from "./img/factory.png";
import history from "./img/history.png";

import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from "./Header.module.css";
import cx from "classnames";

const navItems = [
  { key: "history", label: "home", icon: history, path: "history" },
  { key: "grapes", label: "grapes", icon: grape, path: "grapes" },
  { key: "wines", label: "wines", icon: wine, path: "wines" },
  { key: "tours", label: "tours", icon: factory, path: "tours" },
];

function Header({ setLang, lang }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);

  //const changeLang = (lng) => setLang(lng);

  return (
    <div className={cx(styles.header, { [styles.headerDisable]: isHomePage })}>
      {/* Logo */}
      <NavLink to={"/"}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </NavLink>

      {/* {/* Desktop navigation
      <div className={styles.leftPart}>
        <div className={styles.sections}>
          <NavLink to={"history"} className={styles.navLink}>
            <img src={history} className={styles.shake} alt="history" />
            <p>{texts[lang]["home"]}</p>
          </NavLink>
          <NavLink to={"grapes"} className={styles.navLink}>
            <img src={grape} className={styles.shake} alt="grape" />
            <p>{texts[lang]["grapes"]}</p>
          </NavLink>
          <NavLink to={"wines"} className={styles.navLink}>
            <img src={wine} className={styles.shake} alt="wine" />
            <p>{texts[lang]["wines"]}</p>
          </NavLink>
          <NavLink to={"tours"} className={styles.navLink}>
            <img src={factory} className={styles.shake} alt="factory" />
            <p>{texts[lang]["tours"]}</p>
          </NavLink>
        </div>
      </div>

      {/* Right side */}
      {/* <div className={styles.wrapper}>
        {/* Desktop button */}
        {/* <div className={styles.btnWrapper}>
          <NavLink to={"payment"}>
            <div className={styles.shopBtn}>Buy Tours</div>
          </NavLink>
        </div> */}

        {/* Mobile menu icon */}
        {/* <MenuOutlined
          className={styles.icon}
          onClick={() => setMenuOpen(true)}
        />

        {/* Language selector */}
        {/* <div className={styles.languages}>
          <span onClick={() => changeLang("en")}>EN</span>
          <span onClick={() => changeLang("ru")}>RU</span>
          <span onClick={() => changeLang("am")}>AM</span>
        </div>
      </div> */} 

      {/* Drawer for mobile menu */}
      {/* <Drawer
        placement="left"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
      > */}
        <Menu mode="inline" selectable={false}>
          <Menu.Item key="history">
            <NavLink to="history">{texts[lang]["home"]}</NavLink>
          </Menu.Item>
          <Menu.Item key="grapes">
            <NavLink to="grapes">{texts[lang]["grapes"]}</NavLink>
          </Menu.Item>
          <Menu.Item key="wines">
            <NavLink to="wines">{texts[lang]["wines"]}</NavLink>
          </Menu.Item>
          <Menu.Item key="tours">
            <NavLink to="tours">{texts[lang]["tours"]}</NavLink>
          </Menu.Item>
          <Menu.Item key="payment">
            <NavLink to="payment">Buy Tours</NavLink>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}  

export default Header; 
