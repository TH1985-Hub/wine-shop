import React, {useCallback, useState} from 'react';
import {Route, Routes, Navigate, useLocation} from "react-router-dom"; 
import "antd/dist/reset.css"; 

import { LanguageProvider } from './contexts/LanguageContext'; 
import Home from './components/Home/Home'; 
import Header from './common/Header/Header'; 
import  Footer from './common/Footer/Footer'; 
import About from './components/About/About'; 
import Tours from './components/Tours/Tours'; 
import TourDetails from './components/TourDetails/TourDetails'; 
import Contact from './components/Contact/Contact'; 
import Payment from './components/Payment/Payment'; 
import OrderStatus from './components/OrderStatus/OrderStatus'; 
import Collaborators from './components/Collaborators/Collaborators'; 
import AgeVerification from './common/AgeVerification/AgeVerification'; 
import SocialShare from './components/SocialShare/SocialShare'; 
import styles from './App.module.scss'; 

// function App() { const location = useLocation(); 
//   const isSocialPage = location.pathname === '/share'; 
//   const isAgeVerificationPage = location.pathname === '/age-verification'; 
//   const [ opened, setOpened ] = useState(false); 
//   const open = useCallback(() => setOpened(true), []); 
//   //const open = useCallback(setOpened, []) 

//   const isVerified = localStorage.getItem('isVerified') === 'true'; 
//   if (!isVerified && location.pathname !== '/age-verification') 
//     { return <Navigate to="/age-verification" replace />; } 

//    return (
//      <LanguageProvider> 
//       <div className={styles.app}> 
//         { opened ? 
//         <MobileNavMenu setOpened={setOpened} /> :
//            <> 
//            {!isSocialPage && !isAgeVerificationPage && <Header setOpened={open} />} 

//     <div> 
//       <Routes>
//          <Route path="/age-verification" element={<AgeVerification />}/> 
//          <Route index element={<Home />}/> 
//          <Route path='/about' element={<About />}/> 
//          <Route path='/tours' element={<Tours />}/> 
//          <Route path='/wines' element={<Wines />}/> 
//          <Route path='/grapes' element={<Grapes />}/> 
//          <Route path='/terroir' element={<Terroir />}/> 
//          <Route path='/team' element={<Team />}/> 
//          <Route path='/contact' element={<Contact />}/> 
//          <Route path='/tour-details' element = {<TourDetails/>}/> 
//          <Route path='/payment' element={<Payment />}/> 
//          <Route path='/orderStatus' element={<OrderStatus />}/> 
//          <Route path='/collaborators' element={<Collaborators />}/> 
//          <Route path='/share' element={<SocialShare />}/> 
//          <Route path='*' element={<Navigate to="/"/>}/>
//       </Routes> 
//       </div>
//        {!isSocialPage && !isAgeVerificationPage && <Footer />} 
//        </> 
//        } 
//        </div> 
//       </LanguageProvider> 
//       ); 
//     }


// export default App;

function App() { 
  const location = useLocation(); 
  const isSocialPage = location.pathname === '/share'; 
  const isAgeVerificationPage = location.pathname === '/age-verification'; 
  const [opened, setOpened] = useState(false); 
  const open = useCallback(() => setOpened(true), []); 

  const isVerified = localStorage.getItem('isVerified') === 'true'; 

  // Age verification logic
  if (!isVerified) {
    if (location.pathname === '/age-verification') {
      // Allow access to age verification page
      return (
        <LanguageProvider>
          <div className={styles.app}>
            <AgeVerification />
          </div>
        </LanguageProvider>
      );
    } else {
      // Redirect all other pages to age verification
      return <Navigate to="/age-verification" replace />;
    }
  }

  // If verified, show the normal app
  return (
    <LanguageProvider> 
      <div className={styles.app}> 
        {opened ? (
          <MobileNavMenu setOpened={setOpened} />
        ) : (
          <> 
            {!isSocialPage && <Header setOpened={open} />} 
            <div> 
              <Routes>
                <Route index element={<Home />}/> 
                <Route path='/about' element={<About />}/> 
                <Route path='/tours' element={<Tours />}/> 
                <Route path='/wines' element={<Wines />}/> 
                <Route path='/grapes' element={<Grapes />}/> 
//          <Route path='/terroir' element={<Terroir />}/> 
//          <Route path='/team' element={<Team />}/> 
//          <Route path='/contact' element={<Contact />}/> 
          <Route path='/tour-details' element = {<TourDetails/>}/> 
         <Route path='/payment' element={<Payment />}/> 
         <Route path='/orderStatus' element={<OrderStatus />}/> 
          <Route path='/collaborators' element={<Collaborators />}/> 
         <Route path='/share' element={<SocialShare />}/> 
         <Route path='*' element={<Navigate to="/"/>}/>
                {/* ... other routes */}
              </Routes> 
            </div>
            {!isSocialPage && <Footer />} 
          </> 
        )} 
      </div> 
    </LanguageProvider> 
  ); 
}

export default App
