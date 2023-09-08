import React from "react";
import styles from "./Card.module.scss"

const Card = ({heading, description, img}) => {
  return <div className={styles.card}>
        <img className={styles.card__img} src={img} alt="img" />
        <div className={styles.card__text}>
        <h1 className={styles.card__heading}>{heading}</h1>
        <p className={styles.card__description}>{description}</p>
        </div>
      </div>
};

export default Card;
