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

// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { texts } from "../../common/texts/texts.jsx";

// import logo from "./img/logo.svg";


// import { Drawer, Menu } from "antd";
// import { MenuOutlined } from "@ant-design/icons";

// import styles from "./Header.module.css";
// import cx from "classnames";



// function Header({ setLang, lang }) {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const [menuOpen, setMenuOpen] = useState(false);

//   //const changeLang = (lng) => setLang(lng);

//   return (
//     <header className={cx(styles.header, { [styles.headerDisable]: isHomePage })}>
//       {/* Logo */}
//       <NavLink to={"/"}>
//         <img src={logo} alt="Logo" className={styles.logo} />
//       </NavLink>

//        {/* Desktop Navigation */}
//        <nav className={styles.navDesktop}>
//         {navItems.map( (item) => (
//           <NavLink key={item.key} to={item.path} className={styles.navLink}>
//             <img src={item.icon} alt={item.label} className={styles.iconImg} />
//             <span>{texts[lang][item.label]}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Right Actions */}
//       <div className={styles.actions}>
//         <NavLink to="payment" className={styles.shopBtn}>
//           Buy Tours
//         </NavLink>

//         <div className={styles.langSelector}>
//           {["en", "ru", "am"].map((lng) => (
//             <span key={lng} onClick={() => setLang(lng)}>
//               {lng.toUpperCase()}
//             </span>
//           ))}
//         </div>

//         {/* Mobile Menu Icon */}
//         <MenuOutlined className={styles.menuIcon} onClick={() => setMenuOpen(true)} />
//       </div>

//       {/* Mobile Drawer */}
//       <Drawer placement="left" onClose={() => setMenuOpen(false)} open={menuOpen}>
//         <Menu mode="inline" selectable={false}>
//           {navItems.map((item) => (
//             <Menu.Item key={item.key}>
//               <NavLink to={item.path}>{texts[lang][item.label]}</NavLink>
//             </Menu.Item>
//           ))}
//           <Menu.Item key="payment">
//             <NavLink to="payment">Buy Tours</NavLink>
//           </Menu.Item>
//         </Menu>
//       </Drawer>
//     </header>
//   );
// }

// export default Header;

// Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "./img/logo.svg";
import { texts } from "../../common/texts/texts.jsx";

import styles from  './Header.module.css';

function Header({ lang, setLang }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1028);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1028);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLeft = [
    { to: "/", key: "home", label: texts[lang].home },
    { to: "/history", key: "history", label: texts[lang].history },
    { to: "/tours", key: "tours", label: texts[lang].tours },
    { to: "/wines", key: "wines", label: texts[lang].wines },
  ];

  const navRight = [
    { to: "/grapes", key: "grapes", label: texts[lang].grapes },
    { to: "/team", key: "team", label: texts[lang].team },
    { to: "/contact", key: "contact", label: texts[lang].contact },
  ];

  const changeLang = (l) => {
    setLang(l);
    setIsLangOpen(false);
  };

  const renderNavLinks = (items) =>
    items.map((item) => (
      <NavLink
        key={item.key}
        to={item.to}
        className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
        onClick={() => isMobile && setDrawerOpen(false)}
      >
        {item.label}
      </NavLink>
    ));

  return (
    <header className={styles.header}>
      {!isMobile && <nav className={styles.navLink + " " + styles.left}>{renderNavLinks(navLeft)}</nav>}

      <NavLink to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </NavLink>

      {!isMobile && (
        <nav className={styles.navLink + " " + styles.right}>
          {renderNavLinks(navRight)}

          <div className={styles.languageWrapper}>
            <GlobalOutlined
              className={styles.iconButton}
              onClick={() => setIsLangOpen(!isLangOpen)}
            />
            {isLangOpen && (
              <div className={styles.languageDropdown}>
                <span onClick={() => changeLang("en")}>EN</span>
                <span onClick={() => changeLang("ru")}>RU</span>
                <span onClick={() => changeLang("am")}>AM</span>
              </div>
            )}
          </div>
        </nav>
      )}

      {isMobile && (
        <MenuOutlined
          className={styles.iconButton}
          onClick={() => setDrawerOpen(!drawerOpen)}
        />
      )}

      {isMobile && drawerOpen && (
        <div className={styles.mobileDrawer}>
          {renderNavLinks([...navLeft, ...navRight])}

          <div className={styles.languageWrapper}>
            <GlobalOutlined
              className={styles.iconButton}
              onClick={() => setIsLangOpen(!isLangOpen)}
            />
            {isLangOpen && (
              <div className={styleslanguageDropdown">
                <span onClick={() => changeLang("en")}>EN</span>
                <span onClick={() => changeLang("ru")}>RU</span>
                <span onClick={() => changeLang("am")}>AM</span>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
