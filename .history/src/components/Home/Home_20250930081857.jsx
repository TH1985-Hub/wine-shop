
import React from "react";
import { Typography, Button} from "antd";
import {useLanguage} from '../../contexts/LanguageContext';

import {texts} from '../../common/texts/texts';
import WineGrid from "./WineGrid/WineGrid";
import {wines} from "../../common/winesInfo/texts";
import History from "../History/History";
import TerroirTickets from "./TerroirTickets/TerroirTickets";
import styles from "./Home.module.css";

const { Title } = Typography;

function Home() {
  const { currentLanguage} = useLanguage();
  return (
    <section className={styles.home}>
    <div className={styles.illustration}></div>
    <div className={styles.underContent}>
        <Title level={2} className={styles.title}>
         {texts[currentLanguage].wines || " WINES"}
        </Title>
     
        <Button
          type="primary"
          size="large"
          className={styles.exploreBtn}
        >
          {texts[currentLanguage].exploreMore || "Explore More"}
        </Button>
      </div>
      <div className={styles.gridSection}>
        <WineGrid wines={wines} />
      </div>

      <History />
      <TerroirTickets />

  </section>
);
}



export default Home;
