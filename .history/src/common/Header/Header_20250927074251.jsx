

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useLanguage } from '../../contexts/LanguageContext';
import logo from "./img/logo.svg"; 
import styles from "./Header.module.css";
import { texts } from "../../common/texts/texts.jsx";

function Header({ setOpened }) {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const navItemsLeft = [
    { to: "/", key: "home", label: texts[currentLanguage].home},
    { to: "/about", key: "about", label: texts[currentLanguage].about },
    { to: "/tours", key: "tours", label: texts[currentLanguage].tours },
    { to: "/wines", key: "wines", label: texts[currentLanguage].wines },
  ];

  const navItemsRight = [
    { to: "/share", key: "social", label: texts[currentLanguage].social},
    { to: "/terroir", key: "terroir", label: texts[currentLanguage].terroir },
    { to: "/team", key: "team", label: texts[currentLanguage].team },
    { to: "/contact", key: "contact", label: texts[currentLanguage].contact},
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <header className={styles.header}>
     
      {!isMobile && (
        <nav className={styles.nav}>
        
          <div className={styles.navSection}>
            {navItemsLeft.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>

        
          <div className={styles.navSection}>
            {navItemsRight.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className={styles.languageWrapper}>
              <GlobalOutlined
                className={styles.iconButton}
                onClick={() => setIsLangOpen(!isLangOpen)}
              />
              {isLangOpen && (
                <div className={styles.languageDropdown}>
                  <span onClick={() => handleLanguageChange("en")}>EN</span>
                  <span onClick={() => handleLanguageChange("ru")}>RU</span>
                  <span onClick={() => handleLanguageChange("am")}>AM</span>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}

      
      {isMobile && (
        <div className={styles.mobileHeader}>
          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>

          <div className={styles.mobileControls}>
            <div className={styles.languageWrapper}>
              <GlobalOutlined
                className={styles.iconButton}
                onClick={() => setIsLangOpen(!isLangOpen)}
              />
              {isLangOpen && (
                <div className={styles.languageDropdown}>
                  <span onClick={() => handleLanguageChange("en")}>EN</span>
                  <span onClick={() => handleLanguageChange("ru")}>RU</span>
                  <span onClick={() => handleLanguageChange("am")}>AM</span>
                </div>
              )}
            </div>

            {menuOpen ? (
              <CloseOutlined
                className={styles.iconButton}
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MenuOutlined
                className={styles.iconButton}
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          {menuOpen && (
            <nav className={styles.mobileNav}>
              {[...navItemsLeft, ...navItemsRight].map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;



