import React, {useCallback, useState} from 'react';
import {Route, Routes, Navigate } from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import Home from './components/Home/Home';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Tours from './components/Tours/Tours';
import History from './components/History/History';
import MobileNavMenu from './common/MobilNavMenu/MobileNavMenu';
import Wines from './components/Wines/Wines';
import Grapes from './components/Grapes/Grapes';

function App() {
  const [ opened, setOpened ] = useState(false);

  const open = useCallback(setOpened, [])
  const [ lang, setLang ] = useState('en');

  return (
    <div className={styles.app}>
      { opened ? <MobileNavMenu lang={lang} setOpened={setOpened}/> :
       <>
         <Header setOpened={open} setLang={setLang} />
         <div>
           <Routes>
             <Route index element={<Home lang={lang} />} />
             <Route path='/tours' element={<Tours lang={lang} />} />
             <Route path='/history' element={<History lang={lang} />} />
             <Route path='/wines' element={<Wines />} />
             <Route path='/grapes' element={<Grapes  lang={lang}/>} />
             <Route path='*' element={<Navigate to={<Home />} />} />
           </Routes>
         </div>
         <Footer />
       </>
      }
    </div>
  );
}

export default App;
