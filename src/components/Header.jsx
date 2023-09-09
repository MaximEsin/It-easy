import React from "react";
import styles from "./Header.module.scss";
import logo from "../images/logo.jpeg";
import ThaiFlag from "../images/ThaiFlag.webp";
import UKFlag from "../images/UKFlag.webp";
import RusFlag from "../images/RusFlag.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <Link className={styles.header__logoContainer} to="/">
        <img src={logo} alt="It easy logo" className={styles.header__img} />
        <p className={styles.header__companyName}>it-easy international</p>
      </Link>

      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>ИТ-Услуги</li>
          <li className={styles.header__navItem}>Наши продукты</li>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/about">
              О компании
            </Link>
          </li>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header__languageContainer}>
        <img
          src={ThaiFlag}
          alt="Flag of Thailand"
          className={styles.header__flag}
        />
        <img
          src={UKFlag}
          alt="Flag of England"
          className={styles.header__flag}
        />
        <img
          src={RusFlag}
          alt="Flag of Russia"
          className={styles.header__flag}
        />
      </div>
    </div>
  );
};

export default Header;
