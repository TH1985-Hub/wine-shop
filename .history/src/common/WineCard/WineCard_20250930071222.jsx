// import React from "react";
// import { Card, Typography, Flex } from "antd";
// import styles from "./WineCard.module.css";

// const { Title, Paragraph } = Typography;

// const WineCard = ({ image, title, description }) => {
//   return (
//     <Card
//       hoverable
//       className={styles.card}
//       cover={
//         <Flex justify="center" align="center" className={styles.imageWrapper}>
//           <img alt={title} src={image} className={styles.image} />
//         </Flex>
//       }
//     >
//       <Typography>
//         <Title level={4} className={styles.title}>
//           {title}
//         </Title>
//         <Paragraph className={styles.description}>
//           {description}
//         </Paragraph>
//       </Typography>
//     </Card>
//   );
// };

// export default WineCard;

// import React from "react";
// import { Card, Typography, Flex } from "antd";
// import { useLanguage } from '../../contexts/LanguageContext';
// import styles from "./WineCard.module.css";

// const { Title, Paragraph } = Typography;

// const WineCard = ({ image, title, description }) => {
//   const { language } = useLanguage();

//   const getLocalizedText = (textObj) => {
//     if (typeof textObj === 'string') return textObj;
//     if (!textObj || typeof textObj !== 'object') return '';
    
//     return textObj[language] || textObj.en || textObj.am || textObj.ru || '';
//   };

//   const titleText = getLocalizedText(title);
//   const descriptionText = getLocalizedText(description);

//   return (
//     <Card
//       hoverable
//       className={styles.card}
//       cover={
//         <Flex justify="center" align="center" className={styles.imageWrapper}>
//           <img alt={titleText} src={image} className={styles.image} />
//         </Flex>
//       }
//     >
//       <Typography>
//         <Title level={4} className={styles.title}>
//           {titleText}
//         </Title>
//         <Paragraph className={styles.description}>
//           {descriptionText}
//         </Paragraph>
//       </Typography>
//     </Card>
//   );
// };

// export default WineCard;

// import React from "react";
// import { Card, Typography, Flex } from "antd";
// import { useLanguage } from '../../contexts/LanguageContext';
// import styles from "./WineCard.module.css";

// const { Title, Paragraph } = Typography;

// const WineCard = ({ image, title, description }) => {
//   const { currentLanguage } = useLanguage();

//   const getLocalizedText = (textObj) => {
//     if (typeof textObj === 'string') return textObj;
//     if (!textObj || typeof textObj !== 'object') return '';
    
//     return textObj[currentLanguage] || textObj.en;
//   };

//   const titleText = getLocalizedText(title);
//   const descriptionText = getLocalizedText(description);

//   return (
//     <Card
//       hoverable
//       className={styles.card}
//       cover={
//         <Flex justify="center" align="center" className={styles.imageWrapper}>
//           <img alt={titleText} src={image} className={styles.image} />
//         </Flex>
//       }
//     >
//       <Typography>
//         <Title level={4} className={styles.title}>
//           {titleText}
//         </Title>
//         <Paragraph className={styles.description}>
//           {descriptionText}
//         </Paragraph>
//       </Typography>
//     </Card>
//   );
// };

// export default WineCard;

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
