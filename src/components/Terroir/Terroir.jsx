import React from "react";
import { Row, Col } from "antd";
import { useLanguage } from "../../contexts/LanguageContext";
import terroirTexts from "../../common/texts/terroirTexts";
import styles from "./Terroir.module.css";

import wineMore from "./images/wine-more.png";
import wineBarrels from "./images/wine-barrels.png";


const Terroir = () => {
  const { currentLanguage } = useLanguage();
  const texts = terroirTexts[currentLanguage] || terroirTexts.en;

  const sections = [
    {
      id: 1,
      textPosition: "left",
      imagePosition: "right",
      image: wineMore,
      title: texts.section1.title,
      content: texts.section1.content,
      imageAlt: "Wine More",
    },
    {
      id: 2,
      textPosition: "right",
      imagePosition: "left",
      image: wineBarrels,
      content: texts.section2.content,
      imageAlt: "Wine Barrels",
    },
  ];

  const renderSection = (section) => {
    const textContent = (
      <div className={styles.textContent}>
        {section.title && <h2 className={styles.title}>{section.title}</h2>}
        <div className={styles.text}>
          {section.content.split("\n").map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "16px" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );

    const imageContent = (
      <div className={styles.imageContent}>
        <div className={styles.imageWrapper}>
          <img
            src={section.image}
            alt={section.imageAlt}
            className={section.id === 1 ? styles.image : styles.imageSecond}
          />
        </div>
      </div>
    );

    return (
      <div key={section.id} className={styles.section}>
        <Row gutter={[48, 32]} align="middle">
          {section.textPosition === "left" ? (
            <>
              <Col xs={24} lg={12}>
                {textContent}
              </Col>
              <Col xs={24} lg={12}>
                {imageContent}
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} lg={12}>
                {imageContent}
              </Col>
              <Col xs={24} lg={12}>
                {textContent}
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  };

  return <div className={styles.container}>{sections.map(renderSection)}</div>;
};

export default Terroir;