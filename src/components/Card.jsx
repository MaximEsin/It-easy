import React from "react";
import styles from "./Card.module.scss"
import Button from "../UI/button/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({heading, description, img, text, link, target}) => {
  const { data } = useSelector((state) => state.dataReducer);
  return <div className={styles.card}>
        <img className={styles.card__img} src={img} alt="img" />
        <div className={styles.card__text}>
          <h1 className={styles.card__heading}>{heading}</h1>
          <p className={styles.card__description}>{description}</p>
          <Link target={target} to={link}>
            <Button text={text}/>
          </Link>
        </div>
      </div>
};

export default Card;
