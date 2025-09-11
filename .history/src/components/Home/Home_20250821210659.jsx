// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { texts } from '../../common/texts/texts.jsx';

// import video from  './video/homeVideo.mp4';
// import MenuIcon from '@mui/icons-material/Menu';

// import styles from './Home.module.css';
// import Loader from '../../common/Loader/Loader.jsx';
// import AgeVerification from '../../common/AgeVerification/AgeVerification.jsx';
// import cx from 'classnames';

// function Home({ lang, setLang }) {
//   const [ isVisible, setIsVisible ] = useState(true);
//   const [isSectionClosed, setIsSectionClosed] = useState(true);
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     }
//   }, [])

//   function loaded() {
//     setIsVisible(false)
//   }

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
//     <div className={styles.container}>
//       <div className={styles.after}></div>
//       <AgeVerification />
//       { isVisible  && <Loader /> }
//       <div className={!isVisible ? styles.hidden : undefined}>
//         <video onLoadedData={loaded} className={styles.video} src="https://d2dyoi7emzmazg.cloudfront.net/video.MP4" autoPlay loop playsInline muted/>
//         <div className={cx(styles.sections, {[styles.sectionsHideen]: isSectionClosed})}>
//           <div className={styles.wrapper}>
//             <MenuIcon className={styles.icon} onClick={() => setIsSectionClosed(!isSectionClosed)}/>
//             <div className={styles.languages}>
//               <span onClick={changeLangEn}>EN</span>|
//               <span onClick={changeLangRu}>RU</span>|
//               <span onClick={changeLangAm}>AM</span>
//             </div>
//           </div>
//           { !isSectionClosed &&
//             <>
//               <NavLink to='history' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['history']}</div>
//               </NavLink>
//               <NavLink to='tours' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['tours']}</div>
//               </NavLink>
//               <NavLink to='grapes' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['grapes']}</div>
//               </NavLink>
//               <NavLink to='wines' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['wines']}</div>
//               </NavLink>
//             </>
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { texts } from '../../common/texts/texts.jsx';

// import video from './video/homeVideo.mp4';
// import MenuIcon from '@mui/icons-material/Menu';

// import styles from './Home.module.css';
// import Loader from '../../common/Loader/Loader.jsx';
// import AgeVerification from '../../common/AgeVerification/AgeVerification.jsx';
// import cx from 'classnames';

// function Home({ lang, setLang }) {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isSectionClosed, setIsSectionClosed] = useState(true);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     }
//   }, []);

//   function loaded() {
//     setIsVisible(false);
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.after}></div>
//       <AgeVerification />
//       {isVisible && <Loader />}
//       <div className={!isVisible ? styles.hidden : undefined}>
//         <video
//           onLoadedData={loaded}
//           className={styles.video}
//           src={video}
//           autoPlay
//           loop
//           playsInline
//           muted
//         />
//         <div className={cx(styles.sections, { [styles.sectionsHidden]: isSectionClosed })}>
//           <div className={styles.wrapper}>
//             <MenuIcon
//               className={styles.icon}
//               onClick={() => setIsSectionClosed(!isSectionClosed)}
//             />
//             <div className={styles.languages}>
//               <span onClick={() => setLang('en')}>EN</span>|
//               <span onClick={() => setLang('ru')}>RU</span>|
//               <span onClick={() => setLang('am')}>AM</span>
//             </div>
//           </div>
//           {!isSectionClosed && (
//             <>
//               <NavLink to="history" className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['history']}</div>
//               </NavLink>
//               <NavLink to="tours" className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['tours']}</div>
//               </NavLink>
//               <NavLink to="grapes" className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['grapes']}</div>
//               </NavLink>
//               <NavLink to="wines" className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['wines']}</div>
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { texts } from '../../common/texts/texts.jsx';

// import video from  './video/homeVideo.mp4';
// import MenuIcon from '@mui/icons-material/Menu';

// import styles from './Home.module.css';
// import Loader from '../../common/Loader/Loader.jsx';
// import AgeVerification from '../../common/AgeVerification/AgeVerification.jsx';
// import cx from 'classnames';

// function Home({ lang, setLang }) {
//   const [ isVisible, setIsVisible ] = useState(true);
//   const [isSectionClosed, setIsSectionClosed] = useState(true);
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     }
//   }, [])

//   function loaded() {
//     setIsVisible(false)
//   }

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
//     <div className={styles.container}>
//       <div className={styles.after}></div>
//       <AgeVerification />
//       { isVisible  && <Loader /> }
//       <div className={!isVisible ? styles.hidden : undefined}>
//         <video onLoadedData={loaded} className={styles.video} src="https://d2dyoi7emzmazg.cloudfront.net/video.MP4" autoPlay loop playsInline muted/>
//         <div className={cx(styles.sections, {[styles.sectionsHideen]: isSectionClosed})}>
//           <div className={styles.wrapper}>
//             <MenuIcon className={styles.icon} onClick={() => setIsSectionClosed(!isSectionClosed)}/>
//             <div className={styles.languages}>
//               <span onClick={changeLangEn}>EN</span>|
//               <span onClick={changeLangRu}>RU</span>|
//               <span onClick={changeLangAm}>AM</span>
//             </div>
//           </div>
//           { !isSectionClosed &&
//             <>
//               <NavLink to='history' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['history']}</div>
//               </NavLink>
//               <NavLink to='tours' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['tours']}</div>
//               </NavLink>
//               <NavLink to='grapes' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['grapes']}</div>
//               </NavLink>
//               <NavLink to='wines' className={styles.navLink}>
//                 <div className={styles.text}>{texts[lang]['wines']}</div>
//               </NavLink>
//             </>
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

.container {
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
} 

.hidden {
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.navLink {
  text-decoration: none;
}

.after {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.1);
  bottom: 0;
  z-index: 5;
  pointer-events: none; 
}

.video {
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  object-fit: cover;
}

.sections {
  background-color: black;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  height: 10vh;
  position: absolute;
  z-index: 11;
  opacity: 0.3;
  transition: opacity 1s;
  left: 0;
  top: 0;
  gap: 50px;
  display: flex;
}

/* Fixed: Converted nested CSS to standard CSS */
.sectionsHidden {
  background-color: transparent;
  opacity: 0.1;
}

.sections:hover {
  transition: opacity 1s;
  opacity: 1;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 15px;
}

.languages {
  color: white;
  margin-left: 5px;
  border-left: 1px solid white;
  padding-left: 10px;
}

/* Fixed: Converted nested CSS to standard CSS */
.languages span {
  cursor: pointer;
  padding: 2px 4px;
  transition: all 0.2s ease;
}

.languages span:hover {
  background: linear-gradient(to left top, transparent 47.75%, currentColor 49.5%, currentColor 25.5%, transparent 40.25%);
}

.icon {
  color: white;
  font-size: 3.5rem !important;
  cursor: pointer;
  transition: color 0.2s ease;
}

.icon:hover {
  color: #ccc;
}

.text {
  font-size: 24px;
  color: whitesmoke;
}

/* RESPONSIVE DESIGN FOR ALL DEVICES */

/* Large Desktop (1440px+) */
@media screen and (min-width: 1440px) {
  .sections {
    height: 12vh;
    gap: 80px;
  }
  
  .icon {
    font-size: 4rem !important;
  }
  
  .text {
    font-size: 28px;
  }
}

/* Desktop (1025px - 1439px) - Default styles apply */

/* Tablet styles (768px - 1024px) */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .sections {
    height: 8vh;
    padding: 0 10px;
    gap: 30px;
  }

  .icon {
    font-size: 2.5rem !important;
  }

  .text {
    font-size: 20px;
  }

  .wrapper {
    left: 10px;
  }
}

/* Mobile landscape (481px - 768px) */
@media screen and (max-width: 768px) and (min-width: 481px) {
  .sections {
    flex-direction: column;
    width: 120px;
    height: 100vh;
    left: 0;
    top: 0;
    opacity: 0.8;
    padding: 15px 10px;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
  }

  .sectionsHidden {
    transform: translateX(-90px);
    opacity: 0.2;
  }

  .wrapper {
    position: relative;
    left: 0;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .icon {
    font-size: 2rem !important;
    margin-bottom: 10px;
  }

  .languages {
    margin-left: 0;
    border-left: none;
    border-top: 1px solid white;
    padding-left: 0;
    padding-top: 8px;
    font-size: 12px;
  }

  .languages span {
    padding: 4px 6px;
    font-size: 12px;
  }

  .text {
    font-size: 16px;
    text-align: center;
  }

  .navLink {
    width: 100%;
    text-align: center;
    padding: 8px 5px;
  }
}

/* Mobile portrait (up to 480px) */
@media screen and (max-width: 480px) {
  .container {
    height: 100vh;
    height: 100dvh; /* Dynamic viewport height for mobile */
  }

  .sections {
    flex-direction: column;
    width: 100px;
    height: 100vh;
    height: 100dvh;
    left: 0;
    top: 0;
    opacity: 0.9;
    padding: 10px 5px;
    gap: 15px;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
  }

  .sectionsHidden {
    transform: translateX(-80px);
    opacity: 0.3;
  }

  .wrapper {
    position: relative;
    left: 0;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
  }

  .icon {
    font-size: 1.5rem !important;
    margin-bottom: 8px;
  }

  .languages {
    margin-left: 0;
    border-left: none;
    border-top: 1px solid white;
    padding-left: 0;
    padding-top: 6px;
    font-size: 10px;
    gap: 2px;
  }

  .languages span {
    padding: 3px 4px;
    font-size: 10px;
    border-radius: 2px;
  }

  .text {
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }

  .navLink {
    width: 100%;
    text-align: center;
    padding: 6px 3px;
    margin-bottom: 5px;
  }

  .ageVerification {
    bottom: 10px;
    left: 10px;
    padding: 6px;
    font-size: 10px;
  }
}


