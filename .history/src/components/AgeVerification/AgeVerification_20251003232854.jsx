import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Typography, Button } from 'antd';
import styles from './AgeVerification.module.css';
import splashWine from './assets/red-wine-splash-dynamic-flowing-liquid.png';
import Load
import cx from 'classnames';

const AgeVerification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified') === 'true';
    if (isVerified) {
      navigate('/');
    }
  }, [navigate]);

  const handleYesClick = () => {
    localStorage.setItem('isVerified', 'true');
    navigate('/');
  };

  const handleNoClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <Flex justify='center' align='center' className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={splashWine} alt='Red Wine Splash' className={styles.image} />
      </div>
      <div className={styles.content}>
        <Typography.Title level={2} className={styles.title}>
          Age Verification
        </Typography.Title>
        <p className={styles.text}>
          Like fine wine, some things are meant for those who've aged just right.
        </p>
        <p className={styles.privacy}>
          By entering this site you agree to our Privacy Policy.
        </p>
        <p className={styles.text}>
          As part of our commitment to responsible drinking, please confirm that you are of legal drinking age in your country.
        </p>
        <Flex justify='center' gap={20} className={styles.buttons}>
          <Button onClick={handleYesClick}>Yes, I'm over 18</Button>
          <Button  onClick={handleNoClick}>No, not yet</Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default AgeVerification;