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

// // export default Home;

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
//   const [isVisible, setIsVisible] = useState(true);
//   const [isSectionClosed, setIsSectionClosed] = useState(true);
  
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     }
//   }, [])

//   function loaded() {
//     console.log('Video loaded, hiding loader');
//     setIsVisible(false);
//   }

//   function changeLangRu() {
//     console.log('Changing language to Russian');
//     if (setLang) setLang('ru');
//   }
  
//   function changeLangEn() {
//     console.log('Changing language to English');
//     if (setLang) setLang('en');
//   }
  
//   function changeLangAm() {
//     console.log('Changing language to Armenian');
//     if (setLang) setLang('am');
//   }

//   function toggleMenu() {
//     console.log('Toggling menu, current state:', isSectionClosed);
//     setIsSectionClosed(!isSectionClosed);
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.after}></div>
//       <AgeVerification />
//       {isVisible && <Loader />}
//       <div className={isVisible ? styles.hidden : undefined}>
//         <video 
//           onLoadedData={loaded} 
//           className={styles.video} 
//           src="https://d2dyoi7emzmazg.cloudfront.net/video.MP4" 
//           autoPlay 
//           loop 
//           playsInline 
//           muted
//         />
//         {/* Fixed: Changed sectionsHideen to sectionsHidden */}
//         <div className={cx(styles.sections, {[styles.sectionsHidden]: isSectionClosed})}>
//           <div className={styles.wrapper}>
//             {/* Fixed: Added explicit onClick handler */}
//             <MenuIcon 
//               className={styles.icon} 
//               onClick={toggleMenu}
//             />
//             <div className={styles.languages}>
//               {/* Fixed: Added proper className for styling and cursor */}
//               <span onClick={changeLangEn} className={styles.langButton}>EN</span>|
//               <span onClick={changeLangRu} className={styles.langButton}>RU</span>|
//               <span onClick={changeLangAm} className={styles.langButton}>AM</span>
//             </div>
//           </div>
//           {!isSectionClosed &&
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

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { texts } from "../../common/texts/texts.jsx";

//import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import video from './video/homeVideo.mp4';
import Loader from "../../common/Loader/Loader.jsx";
import AgeVerification from "../../common/AgeVerification/AgeVerification.jsx";

import styles from "./Home.module.css";
import cx from "classnames";

function Home({lang, setLang }) {
  const [loading, setLoading] = useState(true);
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  const handleVideoLoad = () => setLoading(false);

  const changeLang = (lang) => setLang(lang);

  return (
    <div className={styles.container}>
      <div className={styles.after}></div>
      <AgeVerification />

      {loading && <Loader />}

      <div className={loading ?  styles.hidden : undefined}>
        <video
          //onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          className={styles.video}
          src="https://d2dyoi7emzmazg.cloudfront.net/video.MP4"
          autoPlay
          loop
          playsInline
          muted
           preload="auto"
        />

        {/* Top bar with menu button and languages */}
        <div className={styles.wrapper}>
          <MenuOutlined
            className={styles.icon}
            // onClick={() => setMenuOpen(true)}
            onClick={() => navigate("/homeMain")} 
          />
          <div className={styles.languages}>
            <span onClick={() => changeLang("en")}>EN</span>|
            <span onClick={() => changeLang("ru")}>RU</span>|
            <span onClick={() => changeLang("am")}>AM</span>
          </div>
        </div>

        {/* Drawer Menu */}
        {/* <Drawer
          placement="left"
          onClose={() => setMenuOpen(false)}
          open={menuOpen}
        >
          <Menu
           mode="inline" 
           selectable={false}
           items = {[ 
              {
                key: "history",
                label: <NavLink to="history">{texts[lang]["history"]}</NavLink>,
              },

              {
                key: "tours",
                label: <NavLink to="tours">{texts[lang]["tours"]}</NavLink>
              },

              {
                key: "grapes",
                label: <NavLink to="grapes">{texts[lang]["grapes"]}</NavLink>,
              },

              {
                key: "wines",
                label: <NavLink to="wines">{texts[lang]["wines"]}</NavLink>,
              },

           ]}   
         />
        </Drawer> */}
      </div>
    </div>
  );
}

export default Home;

