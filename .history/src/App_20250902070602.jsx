// import React, {useCallback, useEffect, useState} from 'react';
// import {Route, Routes, Navigate, useLocation} from "react-router-dom";
// import "antd/dist/reset.css";

// import Home from './components/Home/Home';
// import Header from './common/Header/Header';
// import Footer from './common/Footer/Footer';
// import Tours from './components/Tours/Tours';
// import History from './components/History/History';
// import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu';
// import Wines from './components/Wines/Wines';
// import Grapes from './components/Grapes/Grapes';
// import Payment from './components/Payment/Payment';
// import OrderStatus from './components/OrderStatus/OrderStatus';
// import Collaborators from './components/Collaborators/Collaborators';

// import './App.module.scss';
// import styles from './App.module.scss';
// import SocialShare from './components/SocialShare/SocialShare';

// function App() {
//   const location = useLocation();
//   const isSocialPage = location.pathname === '/share';
//   const [ opened, setOpened ] = useState(false);
//   const open = useCallback(setOpened, [])
//   const [ lang, setLang ] = useState('am');

//   return (
//     <div className={styles.app}>
//       { opened ? <MobileNavMenu lang={lang} setOpened={setOpened} /> :
//         <>
//           {!isSocialPage && <Header setOpened={open} setLang={setLang} lang={lang} />}
//             <div>
//                <Routes>
//                  <Route index element={<Home lang={lang} setLang={setLang} />}/>
//                  <Route path='/tours' element={<Tours lang={lang}/>}/>
//                  <Route path='/history' element={<History lang={lang}/>}/>
//                  <Route path='/wines' element={<Wines lang={lang}/>}/>
//                  <Route path='/grapes' element={<Grapes lang={lang}/>}/>
//                  <Route path='/payment' element={<Payment />}/>
//                  <Route path='/orderStatus' element={<OrderStatus />}/>
//                  <Route path='/collaborators' element={<Collaborators />}/>
//                  <Route path='/share' element={<SocialShare />}/>
//                  <Route path='*' element={<Navigate to="/"/>}/>
//                </Routes>
//             </div>
//           {!isSocialPage && <Footer />}
//         </>
//       }
//     </div>
//   );
// }

// export default App; 

import React, {useCallback, useState} from 'react';
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import "antd/dist/reset.css";

import Home from './components/Home/Home';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import HomeMain from './components/HomeMain/HomeMain';

import Tours from './components/Tours/Tours';
import History from './components/History/History';
import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu';
import Wines from './components/Wines/Wines';
import Grapes from './components/Grapes/Grapes';
import Payment from './components/Payment/Payment';
import OrderStatus from './components/OrderStatus/OrderStatus';
import Collaborators from './components/Collaborators/Collaborators';

import './App.module.scss';
import styles from './App.module.scss';
import SocialShare from './components/SocialShare/SocialShare';

function App() {
  const location = useLocation();
  const isSocialPage = location.pathname === '/share';
  const isHomePage = location.pathname === '/'; 
  const [ opened, setOpened ] = useState(false);
  const open = useCallback(setOpened, [])
  const [ lang, setLang ] = useState('am');

  return (
    <div className={styles.app}>
      { opened ? <MobileNavMenu lang={lang} setOpened={setOpened} /> :
        <>
          {/* Show header everywhere except Home and Share pages */}
          {!isSocialPage && !isHomePage && (
            <Header setOpened={open} setLang={setLang} lang={lang} />
          )}

          <div>
            <Routes>
              <Route index element={<Home lang={lang} setLang={setLang} />}/>
              <Route path='/homeMain' element={<lang} />}/>
              <Route path='/tours' element={<Tours lang={lang}/>}/>
              <Route path='/history' element={<History lang={lang}/>}/>
              <Route path='/wines' element={<Wines lang={lang}/>}/>
              <Route path='/grapes' element={<Grapes lang={lang}/>}/>
              <Route path='/payment' element={<Payment />}/>
              <Route path='/orderStatus' element={<OrderStatus />}/>
              <Route path='/collaborators' element={<Collaborators />}/>
              <Route path='/share' element={<SocialShare />}/>
              <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>
          </div>

          {!isSocialPage && <Footer />}
        </>
      }
    </div>
  );
}

export default App;

