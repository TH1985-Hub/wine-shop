import React, { useState } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
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

  const renderContent = () =>
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/tours'>
          <Tours />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/wines'>
          <Wines />
        </Route>
        <Route path='/grapes'>
          <Grapes />
        </Route>
      </Switch>
    </BrowserRouter>
  </>



  return (
    <div className={styles.app}>


      { opened ? <MobileNavMenu setOpened={setOpened}/> :
       <>
         <Header setOpened={setOpened}/>
         { renderContent() }
         <Footer />
       </>
      }
    </div>
  );
}

export default App;
