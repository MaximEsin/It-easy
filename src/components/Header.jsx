import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../images/logo.svg";
import ThaiFlag from "../images/ThaiFlag.webp";
import UKFlag from "../images/UKFlag.webp";
import RusFlag from "../images/RusFlag.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLanguage } from "../services/actions";
import { English, Russian, Thai } from "../data/Data";
import burgerPic from "../images/burger.png";

const Header = () => {
  const { data } = useSelector((state) => state.dataReducer);
  const [burgerActive, setBurgerActive] = useState(false);
  const dispatch = useDispatch();
  const toggleBurger = () => {
    if (burgerActive === false) {
      setBurgerActive(true);
    } else {
      setBurgerActive(false);
    }
  };

  return (
    <div className={styles.header__container}>
      <div className={styles.header}>
        <div className={styles.header__burger}>
          <img
            src={burgerPic}
            alt="menu item picture"
            onClick={() => toggleBurger()}
            className={
              burgerActive ? styles.burgerPicClosed : styles.header__burgerPic
            }
          />
          <div
            className={
              burgerActive
                ? styles.header__burgerContainer
                : styles.header__burgerContainerClosed
            }
          >
            <Link className={styles.header__disabled} to="/services">
              <span
                onClick={() => toggleBurger()}
                className={styles.header__span}
              >
                {data.navOne}
              </span>
            </Link>
            <Link className={styles.header__navItem} to="/products">
              <span
                onClick={() => toggleBurger()}
                className={styles.header__span}
              >
                {data.navTwo}
              </span>
            </Link>
            <Link className={styles.header__navItem} to="/IP">
              <span
                onClick={() => toggleBurger()}
                className={styles.header__span}
              >
                {data.navFive}
              </span>
            </Link>
            <Link className={styles.header__navItem} to="/about">
              <span
                onClick={() => toggleBurger()}
                className={styles.header__span}
              >
                {data.navThree}
              </span>
            </Link>
            <Link className={styles.header__navItem} to="/contacts">
              <span
                onClick={() => toggleBurger()}
                className={styles.header__span}
              >
                {data.navFour}
              </span>
            </Link>
          </div>
        </div>
        <Link className={styles.header__logoContainer} to="/">
          <img src={logo} alt="It easy logo" className={styles.header__img} />
          <div className={styles.header__companyContainer}>
            <p className={styles.header__companyHeading}>it-easy</p>
            <p className={styles.header__companyInternational}>international</p>
          </div>
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            <li className={styles.header__disabled}>
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
              <Link className={styles.header__navItem} to="/IP">
                {data.navFive}
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
            onClick={() => {
              dispatch(getLanguage(Thai));
              localStorage.setItem("language", "English");
            }}
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
    </div>
  );
};

export default Header;
