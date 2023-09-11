import React from "react";
import styles from "./Product.module.scss";
import { useSelector } from "react-redux";

const Product = ({ image, heading, description }) => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.product__container}>
      <img src={image} alt="Image of product" className={styles.product__img} />
      <p className={styles.product__heading}>{heading}</p>
      <p className={styles.product__description}>{description}</p>
      <button className={styles.product__btn}>{data.ourProductsButtonList}</button>
    </div>
  );
};

export default Product;
