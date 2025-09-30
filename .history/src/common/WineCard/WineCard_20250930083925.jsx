import React from "react";
import { Typography } from "antd";
import { useLanguage } from '../../contexts/LanguageContext';
import styles from "./WineCard.module.css";

const { Title, Paragraph } = Typography;

const WineCard = ({ image, title, description }) => {
  const { currentLanguage } = useLanguage();

  const getText = (textObj) => {
    if (typeof textObj === "string") return textObj;
    if (!textObj || typeof textObj !== "object") return "";
    return textObj[currentLanguage] || textObj.en;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={getText(title)} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <Title level={4} className={styles.title}>
          {getText(title)}
        </Title>
        <Paragraph className={styles.description}>
          {getText(description)}
        </Paragraph>
      </div>
    </div>
  );
};

export default WineCard;
