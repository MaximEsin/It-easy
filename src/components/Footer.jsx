import React from "react";
import styles from "./Footer.module.scss";
import logo from "../images/logo.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <section className={styles.footer__section}>
      <div className={styles.footer__container}>
        <Link className={styles.footer__link} to="/">
          <img src={logo} alt="it easy logo" className={styles.footer__logo} />
          <p className={styles.footer__companyName}>it-easy international</p>
        </Link>

        <nav className={styles.footer__nav}>
          <Link className={styles.footer__link} to="/services">
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
        </nav>
      </div>
      <div className={styles.footer__container}>
        <div className={styles.footer__adressContainer}>
          <a
            href="https://goo.gl/maps/APTn3FWYXvhb2bMJ8"
            target="_blank"
            className={styles.footer__text}
          >
            35, 20 Moo5 Vichitsongkram Rd, Tambon Wichit,
            <br /> Chang Wat, Mueang Phuket District, Phuket 83000
          </a>
        </div>
        <div className={styles.footer__contactsContainer}>
          <p className={styles.footer__text}>bikesharingtai@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
