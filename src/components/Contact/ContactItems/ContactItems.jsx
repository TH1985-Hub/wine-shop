import { useLanguage } from "../../../contexts/LanguageContext";
import {translations} from "../texts"; 
import { contactInfo } from "../../../common/Constants/contactInfo";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
 import { FaTelegram, FaTiktok } from "react-icons/fa";
import styles from "./ContactItems.module.css";

const socialLinks = [
  { name: "Facebook", icon: FacebookOutlined, url: contactInfo.social.facebook },
  { name: "Instagram", icon: InstagramOutlined, url: contactInfo.social.instagram },
  { name: "Telegram", icon: FaTelegram, url: contactInfo.social.telegram },
  { name: "Tiktok", icon: FaTiktok, url: contactInfo.social.tiktok },
  { name: "Youtube", icon: YoutubeOutlined, url: contactInfo.social.youtube },
]

export default function ContactItems() {
  const { currentLanguage } = useLanguage()
  const t = translations[currentLanguage]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.contactUs}</h1>
      <p className={styles.subtitle}>{t.contactSubtitle}</p>

      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <MailOutlined className={styles.icon} />
          </div>
          <span className={styles.contactText}>{contactInfo.email}</span>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <PhoneOutlined className={styles.icon} />
          </div>
          <span className={styles.contactText}>{contactInfo.phone}</span>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <EnvironmentOutlined className={styles.icon} />
          </div>
          <span className={styles.contactText}>{contactInfo.address}</span>
        </div>
      </div>

      <div className={styles.socialSection}>
        <h2 className={styles.socialTitle}>{t.findUsOn}</h2>
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <IconComponent className={styles.socialIcon} />
                <span className={styles.socialName}>{social.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
