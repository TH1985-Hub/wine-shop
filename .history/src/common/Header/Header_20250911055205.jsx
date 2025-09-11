

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "./img/logo.svg"; 
import styles from "./Header.module.css";
import { texts } from "../../common/texts/texts.jsx";


function Header({ lang = "en", setLang = () => {}, setOpened }) {
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
    { to: "/", key: "home", label: texts[lang].home},
    { to: "/about-us", key: "about", label: texts[lang].about  },
    { to: "/tours", key: "tours", label: texts[lang].tours },
    { to: "/wines", key: "wines", label: texts[lang].wines },
  ];

  const navItemsRight = [
    { to: "/social", key: "social", label: texts[lang].social},
    { to: "/terroir", key: "terroir", label:texts[lang].terroir },
    { to: "/team", key: "team", label: texts[lang].team },
    { to: "/contact", key: "contact", label:texts[lang].contact},
  ];

  const changeLang = (l) => {
    setLang(l);
    setIsLangOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Desktop Layout */}
      {!isMobile && (
        <nav className={styles.nav}>
          {/* Left side nav */}
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

          {/* Logo in center */}
          <NavLink to="/" className={styles.logoLink}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>

          {/* Right side nav + language */}
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

            {/* Language */}
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
          </div>
        </nav>
      )}

      {/* Mobile Layout */}
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
                  <span onClick={() => changeLang("en")}>EN</span>
                  <span onClick={() => changeLang("ru")}>RU</span>
                  <span onClick={() => changeLang("am")}>AM</span>
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



