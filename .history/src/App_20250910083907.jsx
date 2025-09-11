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
import About from './components/About/About';
import Tours from './components/Tours/Tours';
import Team from './components/Team/Team';
import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu';
import Wines from './components/Wines/Wines';
import Grapes from './components/Grapes/Grapes';
//import SocialShare from './components/SocialShare/SocialShare';
import 
import Contact from './components/Contact/Contact';
import Payment from './components/Payment/Payment';
import OrderStatus from './components/OrderStatus/OrderStatus';
import Collaborators from './components/Collaborators/Collaborators';
import AgeVerification from './common/AgeVerification/AgeVerification'; 


import './App.module.scss';
import styles from './App.module.scss';
import SocialShare from './components/SocialShare/SocialShare';

function App() {
  const location = useLocation();
  const isSocialPage = location.pathname === '/share';
  const isAgeVerificationPage = location.pathname === '/age-verification';

  // const isHomePage = location.pathname === '/'; 
  const [ opened, setOpened ] = useState(false);
  const open = useCallback(setOpened, [])
  const [ lang, setLang ] = useState('am');

  

  const isVerified = localStorage.getItem('isVerified') === 'true';

  if (!isVerified && location.pathname !== '/age-verification') {
    return <Navigate to="/age-verification" replace />;
  }

  // // Show AgeVerification only on that page
  // if (location.pathname === '/age-verification' && !isVerified) {
  //   return <AgeVerification />;
  // }

  return (
    <div className={styles.app}>
     
      { opened ? <MobileNavMenu lang={lang} setOpened={setOpened} /> :
        <>
          {/* Show header everywhere except Home and Share pages */}
          {!isSocialPage && !isAgeVerificationPage &&
         (
            <Header setOpened={open} setLang={setLang} lang={lang} />
          )}

          <div>
            <Routes>
              <Route path = "/age-verification"  element={<AgeVerification />}/>
              <Route index element={<Home lang={lang}/>}/>
              <Route path='/about' element={<About  lang={lang} />}/>
              <Route path='/tours' element={<Tours lang={lang}/>}/>
              {/* <Route path='/history' element={<History lang={lang}/>}/> */}
              <Route path='/wines' element={<Wines lang={lang}/>}/>
              <Route path='/grapes' element={<Grapes lang={lang}/>}/>
              <Route path='/terroir' element={<Terroir lang={lang}/>}/>
              <Route path='/team' element={<Team lang={lang}/>}/>
              <Route path='/contact' element={<Contact lang={lang}/>}/>
              <Route path='/payment' element={<Payment />}/>
              <Route path='/orderStatus' element={<OrderStatus />}/>
              <Route path='/collaborators' element={<Collaborators />}/>
              <Route path='/share' element={<SocialShare />}/>
              <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>
          </div>

          {!isSocialPage && !isAgeVerificationPage && <Footer />}
        </>
      }
    </div>
  );
}

export default App;

