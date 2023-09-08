import React from "react";
import styles from "./Header.module.scss";
import logo from "../images/logo.jpeg";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <img src={logo} alt="It easy logo" className={styles.header__img} />
      <p className={styles.header__companyName}>It-easy international</p>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>ИТ-Услуги</li>
          <li className={styles.header__navItem}>Наши продукты</li>
          <li className={styles.header__navItem}>О компании</li>
          <li className={styles.header__navItem}>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
