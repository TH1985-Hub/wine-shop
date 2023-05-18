import React, { useEffect, useState } from "react";
import styles from "./Collaborators.module.scss";
import img from '../../components/Grapes/img/his1.jpg'

function Collaborators() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img}/>
      </div>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img} />
      </div>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img} />
      </div>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img}/>
      </div>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img} />
      </div>
      <div className={styles.content}>
        <h1>Antinori</h1>
        <img src={img} />
      </div>
    </div>
  );
}

export default Collaborators;
