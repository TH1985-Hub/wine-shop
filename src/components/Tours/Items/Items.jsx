import React, { useState } from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './Items.module.css';

const { Text, Title } = Typography;

const TourCard = ({ tourId, showSummary = false, tourDetailsText, currentLanguage, texts }) => {
  const tours = tourDetailsText[currentLanguage] || tourDetailsText.en;
  const tour = tours.find(t => t.id === tourId) || tours[0];
  
  const t = (key) => texts[currentLanguage]?.[key] || texts.en[key];

 
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };
  
  const totalPrice = quantity * (tour?.price || 0);

  return (
    <div className={styles.container}>
      <Card className={styles.tourCard}>
        <div className={styles.cardHeader}>
          <Title level={4} className={styles.tourType}>
            {tour?.type}
          </Title>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.priceSection}>
            <Text className={styles.priceLabel}>{t('price_per_person')}</Text>
            <Title level={3} className={styles.priceValue}>
              {tour?.price?.toLocaleString()} {t('currency')}
            </Title>
          </div>
          
          <div className={styles.includesSection}>
            <Text className={styles.includesLabel}>{t('ticket_includes')}</Text>
            <Text className={styles.includesText}>{tour?.includes}</Text>
          </div>
        </div>
        
        <div className={styles.quantitySection}>
          <Space className={styles.quantityControls}>
            <Button 
              icon={<MinusOutlined />} 
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
              className={styles.quantityButton}
            />
            <Text className={styles.quantityValue}>{quantity}</Text>
            <Button 
              icon={<PlusOutlined />} 
              onClick={increaseQuantity}
              className={styles.quantityButton}
            />
          </Space>
        </div>
      </Card>

      {showSummary && (
   
        <Card className={styles.summaryCard}>
  <div className={styles.summaryContent}>
    
    <div className={styles.summaryRow}>
      <Text className={styles.summaryBigValue}>
        {totalPrice.toLocaleString()} {t('currency')}
      </Text>
    </div>
    <div className={styles.divider}></div> 

  
    <div className={styles.summaryRow}>
      <Text className={styles.summaryLabel}>{t('total')}</Text>
      <Text className={styles.summaryValue}>
        {totalPrice.toLocaleString()} {t('currency')}
      </Text>
    </div>
    <div className={styles.divider}></div> 

   
    <div className={styles.summaryRow}>
      <Text className={styles.summaryLabel}>{t('amount')}</Text>
      <Text className={styles.summaryValue}>{quantity}</Text>
    </div>
    <div className={styles.divider}></div> 
  </div>
</Card>
      )}
    </div>
  );
};

export default TourCard;
