import PaymentForm from "../../common/PaymentForm/PaymentForm";
import TourCard from "../../components/Tours/Items/Items";
import styles from "./Payment.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { texts } from "../../common/texts/texts";
import { tourDetailsText } from "../../components/TourDetails/tourDetailsTexts";

export default function Payment() {
  const { currentLanguage } = useLanguage();
  const t = (key) => texts[currentLanguage]?.[key] || texts.en[key];

  return (
    <div className={styles.paymentPage}>
      <div className={styles.contentContainer}>
        <div className={styles.titleSection}>
          <h1 className={styles.pageTitle}>{t("tour_tickets")}</h1>
        </div>

        <div className={styles.paymentLayout}>
        
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <p className={styles.subtitle}>{t("complete_purchase_subtitle")}</p>
            </div>
            <div className={styles.formContainer}>
              <PaymentForm isTours={true} />
            </div>
          </div>

         
          <div className={styles.itemSection}>
            <TourCard
              tourId={1}
              quantity={1}
              onQuantityChange={(newQuantity) =>
                console.log("Quantity changed:", newQuantity)
              }
              showSummary={true}
              tourDetailsText={tourDetailsText}
              currentLanguage={currentLanguage}
              texts={texts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
