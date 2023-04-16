import React, { useCallback, useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Tours from './components/Tours/Tours';
import History from './components/History/History';
import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu';
import Wines from './components/Wines/Wines';
import Grapes from './components/Grapes/Grapes';
import Payment from './components/Payment/Payment';
import OrderStatus from './components/OrderStatus/OrderStatus';

import './App.module.scss';
import styles from './App.module.scss';

function App() {
  const [ opened, setOpened ] = useState(false);

  const open = useCallback(setOpened, [])
  const [ lang, setLang ] = useState('am');

  return (
    <div className={styles.app}>
      { opened ? <MobileNavMenu lang={lang} setOpened={setOpened} /> :
        <>
          <Header setOpened={open} setLang={setLang} lang={lang} />
            <div>
               <Routes>
                 <Route index element={<Home lang={lang} setLang={setLang} />}/>
                 <Route path='/tours' element={<Tours lang={lang}/>}/>
                 <Route path='/history' element={<History lang={lang}/>}/>
                 <Route path='/wines' element={<Wines/>}/>
                 <Route path='/grapes' element={<Grapes lang={lang}/>}/>
                 <Route path='/payment' element={<Payment />}/>
                 <Route path='/orderStatus' element={<OrderStatus />}/>
                 <Route path='*' element={<Navigate to="/"/>}/>
               </Routes>
            </div>
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
