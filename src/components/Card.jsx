import React from "react";
import styles from "./Card.module.scss"
import img from "../images/vremeno.svg"

const Card = () => {
  return <div className={styles.card}>
        <img className={styles.card__img} src={img} alt="img" />
        <div className={styles.card__text}>
        <h1 className={styles.card__heading}>dfdjfvjJNBHVHJV  dgsrsfd</h1>
        <p className={styles.card__description}>SFVSFDVFVsfvdfvdfvd</p>
        </div>
      </div>
};

export default Card;
