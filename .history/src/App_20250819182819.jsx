import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes, Navigate, useLocation} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Header from './common/Header/Header.jsx';
import Footer from './common/Footer/Footer.jsx';
import Tours from './components/Tours/Tours.jsx';
import History from './components/History/History.jsx';
import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu.jsx';
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
  const [ opened, setOpened ] = useState(false);
  const open = useCallback(setOpened, [])
  const [ lang, setLang ] = useState('am');

  return (
    <div className={styles.app}>
      { opened ? <MobileNavMenu lang={lang} setOpened={setOpened} /> :
        <>
          {!isSocialPage && <Header setOpened={open} setLang={setLang} lang={lang} />}
            <div>
               <Routes>
                 <Route index element={<Home lang={lang} setLang={setLang} />}/>
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
