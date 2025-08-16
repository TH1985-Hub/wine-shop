import React, { useState } from 'react';
import styles from './AgeVerification.module.css';
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

