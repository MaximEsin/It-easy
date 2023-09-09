import React from "react";
import styles from "./Product.module.scss";

const Product = ({ image, heading, description }) => {
  return (
    <div className={styles.product__container}>
      <img src={image} alt="Image of product" className={styles.product__img} />
      <p className={styles.product__heading}>{heading}</p>
      <p className={styles.product__description}>{description}</p>
      <button className={styles.product__btn}>Подробнее</button>
    </div>
  );
};

export default Product;
