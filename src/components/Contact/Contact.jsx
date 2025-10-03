import { useLanguage } from "../../contexts/LanguageContext";
import {translations} from "./texts"; 
import ContactItems from "./ContactItems/ContactItems";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import styles from "./Contact.module.css";

export default function Contact() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <ContactItems />
        </div>
        <div className={styles.rightSection}>
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}
