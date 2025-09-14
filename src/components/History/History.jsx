

import React from 'react';
import { Typography, Image } from 'antd';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './History.module.css';
import { historyTexts } from '../../common/texts/historyTexts';


import howWineIsMade from './img/howWineIsMade.png';
import wineCreation  from './img/wineCreation.png';
import sunlightBeamingWinery from './img/sunlightBeamingWinery.png';
import armazenagem  from './img/armazenagem.png';
import cupsOfWine from './img/cupsOfWine.png';
import wineInTheField from './img/wineInTheField.png';
import maltingFloor from './img/maltingFloor.png';
import wineBarrels from './img/wineBarrels.png';
import winePantry from './img/winePantry.png';

const { Title, Paragraph } = Typography;

const History = () => {
  const { currentLanguage } = useLanguage();

  const images = [
    wineCreation,
    sunlightBeamingWinery,
    armazenagem,
    cupsOfWine,
    wineInTheField,
    maltingFloor,
    wineBarrels,
    winePantry
]
  const texts = historyTexts[currentLanguage];
  const highlights = historyTexts.highlights[currentLanguage];

  const renderHighlightedText = (content) => {
    let result = content;
    
    
    const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);
    
    sortedHighlights.forEach(word => {
      const regex = new RegExp(`{${word}}`, 'g');
      result = result.replace(
        regex, 
        `<span class="${styles.highlight}">${word}</span>`
      );
    });
    

    return { __html: result };
  };

  return (
    <section className={styles.historySection} id="history">
      <div className={styles.container}>
        <Title level={2} className={styles.title}>
          {texts.title}
        </Title>
        
        <div className={styles.contentWrapper}>
        
          <div className={styles.mainContent}>
           
            <div className={styles.mainImageContainer}>
              <Image
                src={howWineIsMade} 
                alt="Jraghatspanyan Winery Heritage" 
                className={styles.mainImage}
                preview={false}
              />
            </div>
            <div className={styles.textAndImages}>
              
              <div className={styles.textContent}>
                <div 
                  className={styles.description}
                  dangerouslySetInnerHTML={renderHighlightedText(texts.paragraphs[0].content)}
                />
              </div>
              
              
              <div className={styles.smallImagesContainer}>
                <div className={styles.smallImageContainer}>
                  <Image
                    src={howWineIsMade} 
                    alt="Vineyard Tradition" 
                    className={styles.smallImage}
                    preview={false}
                  />
                </div>
                <div className={styles.smallImageContainer}>
                  <Image
                    src={howWineIsMade} 
                    alt="Wine Production" 
                    className={styles.smallImage}
                    preview={false}
                  />
                </div>
              </div>
            </div>
          </div>
          
         
          <div className={styles.secondTextContainer}>
            <Paragraph className={styles.description}>
              {texts.paragraphs[1].content}
            </Paragraph>
          </div>

          <div className={styles.gallery}>
              {images.map((img,index) => (
                <Image preview={false} src={img} key={index} alt={'gallery'} className={styles.galleryImage} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;