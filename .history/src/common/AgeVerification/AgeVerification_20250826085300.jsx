import React, { useState } from 'react';
import styles from './AgeVerification.module.css';
import splashWine from './assets/red-wine-splash-dynamic-flowing-liquid.png';

import cx from 'classnames';

// function AgeVerificationModal() {
//   const [isVerified, setIsVerified] = useState(false);

//   const handleYesClick = () => {
//     setIsVerified(true);

//   };

//   const handleNoClick = () => {
//     window.location.href = 'https://www.google.com';
//   };

//   return (
//     <div className={cx(styles.ageVerificationModalContainer, {[styles.ageVerificationModalContainerDisable]: isVerified})}>
//       {!isVerified && (
//         <div className={styles.ageVerificationModal}>
//           <h2><span />Age Verification<span /></h2>
//           <p className={styles.question}>Are you at least 18 years old?</p>
//           <p className={styles.warning}>By entering this site you agree to our Privacy Policy</p>
//           <p className={styles.text}>As part of our commitment to responsible drinking, please confirm that you are of legal drinking age in your country.</p>
//           <div className={styles.ageVerificationButtons}>
//             <button onClick={handleYesClick}>Yes</button>
//             <button onClick={handleNoClick}>No</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AgeVerificationModal;


// function AgeVerification() {
  
//   const [isVerified, setIsVerified] = useState(() => {
//     return localStorage.getItem('ageVerified') === 'true';
//   });

  
//   const [isFading, setIsFading] = useState(false);

//   const handleYesClick = () => {
//     setIsFading(true);
    
//     setTimeout(() => {
//       localStorage.setItem('ageVerified', 'true');
//       setIsVerified(true);
//     }, 500);
//   };

//   const handleNoClick = () => {
//     window.location.href = 'https://www.google.com';
//   };

//   return (
//     <div
//       className={cx(styles.ageVerificationModalContainer, {
//         [styles.ageVerificationModalContainerDisable]: isVerified,
//         [styles.fadeOut]: isFading
//       })}
//     >
//         <div className = {styles.imageWrapper}>
//             <img 
//               src={splashWine} 
//               alt = 'Red wine splash' 
//               className={styles.image} 
//             />
//           </div>
//       { !isVerified && (
//         <div className={styles.ageVerificationModal}>
//           <h2>
//             <span />Age Verification<span />
//           </h2>
//           <p className={styles.question}>Are you at least 18 years old?</p>
//           <p className={styles.warning}>
//             By entering this site you agree to our Privacy Policy
//           </p>
//           <p className={styles.text}>
//             As part of our commitment to responsible drinking, please confirm that you are of legal drinking age in your country.
//           </p>
//           <div className={styles.ageVerificationButtons}>
//             <button onClick={handleYesClick}>Yes, I'm over 18</button>
//             <button onClick={handleNoClick}>No, not yet</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AgeVerification;

// function AgeVerification() {
//   const [isVerified, setIsVerified] = useState(() => {
//     return localStorage.getItem("ageVerified") === "true";
//   });

//   const handleYesClick = () => {
//     localStorage.setItem("ageVerified", "true");
//     setIsVerified(true);
//   };

//   const handleNoClick = () => {
//     window.location.href = "https://www.google.com";
//   };

//   if (isVerified) return null; // եթե արդեն հաստատված է, ոչինչ չցուցադրել

//   return (
//     <div className={styles.ageVerificationModalContainer}>
//       <div className={styles.ageVerificationContent}>
//         <div className={styles.ageVerificationModal_img}>
//           <img
//             src={splashWine}
//             alt="Red wine splash"
//             className={styles.ageVerification__img}
//           />
//         </div>
//         <h2 className={styles.ageVerification__title}>
//           <span />Age Verification<span />
//         </h2>
//         <p className={styles.question}>Are you at least 18 years old?</p>
//         <p className={styles.warning}>
//           By entering this site you agree to our Privacy Policy
//         </p>
//         <p className={styles.text}>
//           As part of our commitment to responsible drinking, please confirm
//           that you are of legal drinking age in your country.
//         </p>
//         <div className={styles.ageVerification__buttons}>
//           <button onClick={handleYesClick}>Yes, I'm over 18</button>
//           <button onClick={handleNoClick}>No, not yet</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AgeVerification; 
// Adjust the path to your image

function AgeVerification() {
  const [isVerified, setIsVerified] = useState(() => {
    return localStorage.getItem("ageVerified") === "true";
  });

  const handleYesClick = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  const handleNoClick = () => {
    window.location.href = "https://www.google.com";
  };

  if (isVerified) return null; // եթե արդեն հաստատված է, ոչինչ չցուցադրել

  return (
    <div
    className={cx(styles.ageVerificationModalContainer, {
      [styles.ageVerificationModalContainerDisable]: isVerified
    })}
  >
    <div className={styles.ageVerificationModalContainer}>
      <div className={styles.ageVerificationModal}>
        {/* Left image */}
        <div className={styles.ageVerificationModal_img}>
          <img
            src={splashWine}
            alt="Red wine splash"
            className={styles.ageVerification_img}
          />
        </div>

        {/* Right content */}
        <div c>
            <span  />Age Verification<span  />
          </h2>
          <p className={styles.question}>Are you at least 18 years old?</p>
          <p className={styles.warning}>
            By entering this site you agree to our Privacy Policy
          </p>
          <p className={styles.text}>
            As part of our commitment to responsible drinking, please confirm
            that you are of legal drinking age in your country.
          </p>

          <div className={styles.ageVerificationButtons}>
            <button onClick={handleYesClick}>Yes, I'm over 18</button>
            <button onClick={handleNoClick}>No, not yet</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AgeVerification;