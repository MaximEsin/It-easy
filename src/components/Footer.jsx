import React from "react";
import styles from "./Footer.module.scss";
import logo from "../images/logo.jpeg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <section className={styles.footer__section}>
      <div className={styles.footer__container}>
        <img src={logo} alt="it easy logo" className={styles.footer__logo} />
        <p className={styles.footer__companyName}>it-easy international</p>
        <nav className={styles.footer__nav}>
          <p className={styles.footer__navItem}>{data.footerOne}</p>
          <p className={styles.footer__navItem}>{data.footerTwo}</p>
          <p className={styles.footer__navItem}>{data.footerThree}</p>
          <p className={styles.footer__navItem}>{data.footerFour}</p>
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
