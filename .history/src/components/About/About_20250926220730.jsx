
import React from 'react';
import { Button } from "antd";
import {useLanguage } from '../../contexts/LanguageContext'
import { useNavigate } from "react-router-dom"
import styles from "./About.module.css"
import { aboutTexts } from "./aboutTexts"

const About = ({ language = "en" }) => {
  const navigate = useNavigate()
  const texts = aboutTexts[currentLanguage] || aboutTexts.en

  const handleDiscoverWines = () => {
    navigate("/wines")
  }

  return (
    <div className={styles.aboutContainer}>
     
      <div className={styles.upperBackground}>
        <img src="./images/bg-upper.pn" alt="Vineyard landscape" className={styles.upperImage} />
      </div>

     
      <div className={styles.middleSection}>
        <div className={styles.textContainer}>
          {texts.content.map((paragraph, index) => (
            <p key={index} className={styles.aboutText}>
              {paragraph}
            </p>
          ))}
          <Button className={styles.discoverButton} size="large" onClick={handleDiscoverWines}>
            {texts.buttonText}
          </Button>
        </div>
      </div>

      {/* Bottom background image section */}
      <div className={styles.bottomBackground}>
        <img
          src="/placeholder.svg?height=203&width=1487"
          alt="Vineyard rows landscape"
          className={styles.bottomImage}
        />
      </div>
    </div>
  )
}

export default About
