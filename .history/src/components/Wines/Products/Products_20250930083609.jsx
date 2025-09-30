
import React, { useMemo } from "react";
import { Row, Col, Typography } from "antd";
import styles from "./Products.module.css";
import { wines as importedWines } from '../../../common/winesInfo/texts';
import { wineCategoryTitles } from '../../../common/winesInfo/titles';
import WineCard from "../../../common/WineCard/WineCard";
import { useLanguage } from "../../../contexts/LanguageContext";

const { Title } = Typography;

export default function Product({ wines = importedWines, categoryTitles = wineCategoryTitles }) {
  const { language, currentLanguage } = useLanguage();
  const lang = language || currentLanguage || "en";

  const getTitle = (category) => categoryTitles[category]?.[lang] || categoryTitles[category]?.en;

  const filterCards = (category, limit) =>
    wines.filter((w) => w.category === category).slice(0, limit);

  const renderCards = (cards) => (
    <Row gutter={[24, 24]} justify="start">
      {cards.map((w) => (
        <Col key={w.id} xs={24} sm={12} md={12} lg={8} xl={6}>
          <WineCard
            image={w.img}
            title={w.title}
            description={w.text}
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <div className={styles.container}>
      <section className={styles.categorySection}>
        <Title level={3} className={styles.categoryTitle}>{getTitle('jraghatspanyan')}</Title>
        {renderCards(filterCards('jraghatspanyan', 6))}
      </section>

      <section className={styles.categorySection}>
        <Title level={3} className={styles.categoryTitle}>{getTitle('bambak')}</Title>
        {renderCards(filterCards('bambak', 4))}
      </section>
    </div>
  );
}
