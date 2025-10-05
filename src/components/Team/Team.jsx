import React, { useMemo } from "react";
import { Row, Col } from "antd";
import { useLanguage } from '../../contexts/LanguageContext';
import {teamTexts}  from './teamTexts';
import styles from "./Team.module.css";

import annaImage from "./images/annaSargsyan.png";
import lusineImage from "./images/lusineSargsyan.png";
import lilitImage from "./images/lilitSargsyan.png";
import narineImage from "./images/narineSargsyan.png";

const teamData = [
  {
    id: "anna",
    img: annaImage, 
  },
  {
    id: "lusine", 
    img: lusineImage, 
  },
  {
    id: "lilit",
    img: lilitImage, 
  },
  {
    id: "narine",
    img: narineImage, 
  },
];

function TeamSection({ texts }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{texts.header}</h2>
      <div className={styles.grid}>
        <Row gutter={[32, 40]}>
          {teamData.map((member, index) => {
            const memberTexts = texts.members[member.id];
            
            if (!memberTexts) {
              console.warn (`Missing text data for team member: ${member.id}`);
              return null;
            }

            const colClass = index % 2 === 1 ? styles.offset : "";

            return (
              <Col key={member.id} xs={24} sm={12} lg={6} className={colClass}>
                <div className={styles.card}>
                  <div className={styles.photo}>
                    <img
                      src={member.img}
                      alt={memberTexts.name || member.id}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback")) {
                          const fallback = document.createElement("div");
                          fallback.className = `${styles.fallback} fallback`;
                          fallback.textContent = "Image";
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div className={styles.textBlock}>
                    <div className={styles.name}>{memberTexts.name}</div>
                    <div className={styles.role}>{memberTexts.role}</div>
                    {memberTexts.email && (
                      <a href={`mailto:${memberTexts.email}`} className={styles.email}>
                        {memberTexts.email}
                      </a>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

function Team() {
  const { currentLanguage } = useLanguage();
  
  const texts = useMemo(() => {
    const langTexts = teamTexts[currentLanguage] || teamTexts.en;
    return {
      members: langTexts.members || {},
      header: langTexts.header || "Our Team"
    };
  }, [currentLanguage]);

  if (!texts.members || Object.keys(texts.members).length === 0) {
    return (
      <main>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2>Team information is currently unavailable.</h2>
        </div>
      </main>
    );
  }

  return (
    <main>
     
      <TeamSection texts={texts} />
      
      
      <TeamSection texts={texts} />
    </main>
  );
}


export default Team;