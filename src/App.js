import React, {useState} from 'react';
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

  return (
    <div className={styles.app}>
      { opened ? <MobileNavMenu setOpened={setOpened}/> :
       <>
         <Header setOpened={setOpened}/>
         {/*<Home />*/}
         <Tours />
         {/*<History />*/}
         {/*<Wines />*/}
         {/*<Grapes />*/}
         <Footer />
       </>
      }
    </div>
  );
}

export default App;
