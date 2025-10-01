import React from "react";
import { useNavigate } from "react-router-dom";
import { contactInfo } from "../../common/Constants/contactInfo";
import { useLanguage } from '../../contexts/LanguageContext';
import { texts} from './titles';
import { Row, Col, Typography } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "./Social.module.css";


import winesImage from "./img/wines.png";
import logoIcon from "./img/logo.png";

const { Title } = Typography;

const Social = () => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  const socialItems = [
    {
      key: "website",
      type: "logo",
      icon: logoIcon,
      label: contactInfo.website,
      link: "https://www.jraghatspanyan.com",
    },
    {
      key: "instagram",
      type: "icon",
      icon: <InstagramOutlined className={styles.icon} />,
      label: contactInfo.instagram,
      link: "https://www.instagram.com/jraghatspanyan_winery",
    },
    {
      key: "facebook",
      type: "icon",
      icon: <FacebookOutlined className={styles.icon} />,
      label: contactInfo.facebook,
      link: "https://www.facebook.com/JraghatspanyanWinery",
    },
    {
      key: "whatsapp",
      type: "icon",
      icon: <WhatsAppOutlined className={styles.icon} />,
      label: contactInfo.whatsapp,
      link: "https://wa.me/37498506565",
    },
    {
      key: "phone",
      type: "icon",
      icon: <PhoneOutlined className={styles.icon} />,
      label: contactInfo.phone,
      link: "tel:+37498506565",
    },
    {
      key: "mail",
      type: "icon",
      icon: <MailOutlined className={styles.icon} />,
      label: contactInfo.mail,
      link: "mailto:jraghatspanyanwinery@gmail.com",
    },
  ];

  return (
    <div className={styles.container}>
    
      <div 
        className={styles.topImage}
        style={{ backgroundImage: `url(${winesImage})` }}
      ></div>

      
      <div className={styles.titleBlock}>
        <Title level={1} className={styles.title}>
          {texts[currentLanguage]?.title || "JRAGHATSPANYAN"}
        </Title>
        <Title level={3} className={styles.subtitle}>
          {texts[currentLanguage]?.subtitle || "WINERY"}
        </Title>
      </div>

     
      <div className={styles.socialBox}>
        <Row gutter={[16, 16]} justify="center">
          {socialItems.map((item) => (
            <Col xs={24} key={item.key}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                <div className={styles.linkContent}>
                  {item.type === "logo" ? (
                    <img 
                      src={item.icon} 
                      alt="Website Logo" 
                      className={styles.logoIcon}
                    />
                  ) : (
                    item.icon
                  )}
                  <span className={styles.label}>{item.label}</span>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Social;