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
import { Link } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className={styles.products__container}>
      <div className={styles.products__introContainer}>
        <h1 className={styles.products__heading}>Наши продукты</h1>
        <p className={styles.products__description}>
          Готовые прикладные решения, адаптируемые <br />
          под бизнес-задачи различных отраслей
        </p>
        <Link to="/contacts">
          <Button text="Связаться с нами" />
        </Link>
      </div>
      <div className={styles.products__mainContainer}>
        <p className={styles.products__mainHeading}>Наши продукты</p>
        <div className={styles.products__web}>
          <Product
            image={one}
            heading="Архимед"
            description="qqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
          />
          <Link className={styles.products__link} to="/fire-alarm">
            <Product
              image={two}
              heading="Мониторинг пожарной сигнализации"
              description="qqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
            />
          </Link>
          <Product
            image={three}
            heading="Цифровая трансформаци государства"
            description="qqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
          />
          <Product
            image={four}
            heading="Цифровой ассистент сотрудника"
            description="qqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
          />
          <Product
            image={five}
            heading="Управление учетными записями и правами доступа"
            description="qqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
          />
          <Product
            image={six}
            heading="Сбор и анализ информации СМИ"
            description="qqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqq"
          />
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default OurProducts;
