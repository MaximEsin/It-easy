import React from "react";
import styles from "./Footer.module.scss";
import logo from "../images/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <section className={styles.footer__section}>
      <div className={styles.footer__container}>
        <Link className={styles.footer__link} to="/">
          <img src={logo} alt="it easy logo" className={styles.footer__logo} />
          <p className={styles.footer__companyName}>
            <span className={styles.footer__span}>it-easy</span> international
          </p>
        </Link>
        <p className={styles.footer__rights}>
          © 2023 IT-easy. All rights reserved.
        </p>
        <nav className={styles.footer__nav}>
          <Link className={styles.footer__disabled} to="/services">
            <p className={styles.footer__navItem}>{data.footerOne}</p>
          </Link>
          <Link className={styles.footer__link} to="/products">
            <p className={styles.footer__navItem}>{data.footerTwo}</p>
          </Link>
          <Link className={styles.footer__link} to="/IP">
            <p className={styles.footer__navItem}>{data.navFive}</p>
          </Link>
          <Link className={styles.footer__link} to="/about">
            <p className={styles.footer__navItem}>{data.footerThree}</p>
          </Link>
          <Link className={styles.footer__link} to="/contacts">
            <p className={styles.footer__navItem}>{data.footerFour}</p>
          </Link>
          <Link className={styles.footer__link} to="/hiring">
            <p className={styles.footer__navItem}>{data.footerFive}</p>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
