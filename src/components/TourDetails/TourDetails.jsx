import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography, Row, Col } from "antd";
import { useLanguage } from "../../contexts/LanguageContext";
import { tourDetailsText } from "./tourDetailsTexts";
import { texts } from "../../common/texts/texts";
import styles from "./TourDetails.module.css";

const { Title, Text } = Typography;

const TourDetails = () => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const tickets = tourDetailsText[currentLanguage] || tourDetailsText.en;
  
  const t = (key) => {
    return texts[currentLanguage]?.[key] || texts.en[key];
  };

  const handleBuyTicket = (ticketId, ticketType, ticketPrice) => {
    navigate('/payment', { 
      state: { 
        ticketId,
        ticketType,
        ticketPrice
      } 
    });
  };

  return (
    <div className={styles.tourDetailsContainer}>
      <div className={styles.topBackground}></div>

      <div className={styles.headerSection}>
        <Title level={1} className={styles.mainTitle}>
          {t("tour_tickets")}
        </Title>
      </div>

      <div className={styles.ticketsGrid}>
        <Row gutter={[24, 24]} justify="center">
          {tickets.map((ticket) => (
            <Col key={ticket.id} xs={24} sm={12} lg={8} className={styles.ticketColumn}>
              <Card className={styles.ticketCard}>
                <div className={styles.cardHeader}>
                  <Title level={4} className={styles.ticketType}>
                    {ticket.type}
                  </Title>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.priceSection}>
                    <Text className={styles.priceLabel}>{t("price_per_person")}</Text>
                    <Title level={3} className={styles.price}>
                      {ticket.price.toLocaleString()} {t("currency")}
                    </Title>
                  </div>

                  <div className={styles.includesSection}>
                    <Text className={styles.includesLabel}>{t("ticket_includes")}</Text>
                    <Text className={styles.includesText}>{ticket.includes}</Text>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Button 
                    type="primary" 
                    size="large" 
                    className={styles.buyButton} 
                    block
                    onClick={() => handleBuyTicket(ticket.id, ticket.type, ticket.price)}
                  >
                    {t("buy_ticket")}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className={styles.bottomBackground}></div>
    </div>
  );
};

export default TourDetails;