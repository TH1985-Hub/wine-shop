import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Payment.module.scss'
import { useLocation } from 'react-router-dom'
import PaymentForm from '../../common/PaymentForm/PaymentForm';
import Items from '../Tours/Items/Items';

function Payment({ images, price }) {
  const location = useLocation()
  const navigate = useNavigate();
  const lang = location.state?.lang;
  const isTours = location.state?.tourId;

  const handleClick = () => {
    navigate("/tours");
  }

  console.log(lang, isTours);
  return (
    <div className={styles.container}>
      { isTours && lang ?
        <>
          <PaymentForm  isTours={isTours} lang={lang} />
          <Items
            isTours={isTours}
            lang={lang}
          />
        </> :
        <div className={styles.title}>
          Please go to the <span onClick={handleClick} className={styles.url}>tours</span> page and select what tour do you want
        </div>
      }
    </div>
  );
}

export default Payment;
