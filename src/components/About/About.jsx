"use client"

import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import styles from "./About.module.css"
import { aboutTexts } from "./aboutTexts"

const About = ({ language = "en" }) => {
  const navigate = useNavigate()
  const texts = aboutTexts[language] || aboutTexts.en

  const handleDiscoverWines = () => {
    navigate("/wines")
  }

  return (
    <div className={styles.aboutContainer}>
      {/* Upper background image section */}
      <div className={styles.upperBackground}>
        <img src="/placeholder.svg?height=400&width=1487" alt="Vineyard landscape" className={styles.upperImage} />
      </div>

      {/* Middle section with text and button */}
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
