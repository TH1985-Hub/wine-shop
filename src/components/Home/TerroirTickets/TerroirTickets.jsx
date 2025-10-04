
import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { terroirTicketsTexts }  from '../../../common/texts/terroirTicketsTexts'; 
import { Typography, Button } from 'antd';
import styles from './TerroirTickets.module.css'; 

const { Title, Paragraph } = Typography;

const TerroirTickets = () => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const texts = terroirTicketsTexts[currentLanguage]; 

  const handleButtonClick = () => {
    navigate( "/tour-details");
  };

  return (
    <div className={styles.terroirTickets_container}> {/* Use styles object */}
      <Title level={2} className={styles.terroirTickets_title}>
        {texts.title} 
      </Title>
      
      <Paragraph className={styles.terroirTickets_description}>
        {texts.description} 
      </Paragraph>
      
      <Button 
        type="primary" 
        className={styles.terroirTickets_button}
        size="large"
        onClick={handleButtonClick}
      >
        {texts.button} 
      </Button>
    </div>
  );
};

export default TerroirTickets;