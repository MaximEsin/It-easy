import React from "react";
import styles from "./Header.module.scss";
import logo from "../images/logo.jpeg";
import ThaiFlag from "../images/ThaiFlag.webp";
import UKFlag from "../images/UKFlag.webp";
import RusFlag from "../images/RusFlag.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLanguage } from "../services/actions";
import { English, Russian } from "../data/Data";

const Header = () => {
  const { data } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  return (
    <div className={styles.header__container}>
      <Link className={styles.header__logoContainer} to="/">
        <img src={logo} alt="It easy logo" className={styles.header__img} />
        <p className={styles.header__companyName}>it-easy international</p>
      </Link>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/services">
              {data.navOne}
            </Link>
          </li>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/products">
              {data.navTwo}
            </Link>
          </li>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/about">
              {data.navThree}
            </Link>
          </li>
          <li className={styles.header__navItem}>
            <Link className={styles.header__navItem} to="/contacts">
              {data.navFour}
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
          onClick={() => {
            dispatch(getLanguage(English));
            localStorage.setItem("language", "English");
          }}
        />
        <img
          src={RusFlag}
          alt="Flag of Russia"
          className={styles.header__flag}
          onClick={() => {
            dispatch(getLanguage(Russian));
            localStorage.setItem("language", "Russian");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
