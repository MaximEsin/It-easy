import React from "react";
import styles from "../styles/OurProducts.module.scss";
import Button from "../UI/button/Button";
import ContactUs from "../components/ContactUs";
import Product from "../components/Product";
import one from "../images/products/1.svg";
import two from "../images/products/2.svg";
import three from "../images/products/3.svg";
import four from "../images/products/4.svg";
import five from "../images/products/5.svg";
import six from "../images/products/6.svg";
import seven from "../images/products/7.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OurProducts = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.products__container}>
      <div className={styles.products__introContainer}>
        <h1 className={styles.products__heading}>{data.ourProductsTitle}</h1>
        <p className={styles.products__description}>
          {data.ourProductsDescription}
        </p>
        <Link to="/contacts">
          <Button text={data.ourProductsButton} />
        </Link>
      </div>
      <div className={styles.products__mainContainer}>
        <p className={styles.products__mainHeading}>{data.ourProductsList}</p>
        <div className={styles.products__webNameContainer}>
          <p className={styles.products__webName}>
            {data.ourProductsWebTitle1}
          </p>
        </div>
        <div className={styles.products__web}>
          <a
            className={styles.products__link}
            href="https://www.bikesharingtai.com/"
            target="_blank"
          >
            <Product
              image={seven}
              heading={data.ourProductsTitleList7}
              description={data.ourProductsDescription7}
            />
          </a>
        </div>
        <div className={styles.products__webNameContainer}>
          <p className={styles.products__webName}>
            {data.ourProductsWebTitle2}
          </p>
        </div>
        <div className={styles.products__web}>
          <Product
            image={one}
            heading={data.ourProductsTitleList1}
            description={data.ourProductsDescription1}
          />
          <Link className={styles.products__link} to="/fire-alarm">
            <Product
              image={two}
              heading={data.ourProductsTitleList2}
              description={data.ourProductsDescription2}
            />
          </Link>
          <Product
            image={three}
            heading={data.ourProductsTitleList3}
            description={data.ourProductsDescription3}
          />
          <Product
            image={four}
            heading={data.ourProductsTitleList4}
            description={data.ourProductsDescription4}
          />
          <Link to="/security" className={styles.products__link}>
            {" "}
            <Product
              image={five}
              heading={data.ourProductsTitleList5}
              description={data.ourProductsDescription5}
            />
          </Link>
          <Product
            image={six}
            heading={data.ourProductsTitleList6}
            description={data.ourProductsDescription6}
          />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default OurProducts;
