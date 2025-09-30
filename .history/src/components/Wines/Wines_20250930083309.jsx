import React from "react";
import { Typography } from "antd";
import Product from "./Products/Products";
import { wineTitle } from "../../common/winesInfo/titles";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./Wines.module.css";

const { Title } = Typography;

export default function Wines() {
  const { language, currentLanguage } = useLanguage();
  const lang = language || currentLanguage || "en";

  const titleText = wineTitle?.[lang] || wineTitle?.en || "Wines";

  return (
    <div className={styles.wrapper}>
      <Title className={styles.wineTitle}>{titleText}</Title>
      <Product />
    </div>
  );
}

