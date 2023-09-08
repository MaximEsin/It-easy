import React from "react";
import Button from "../UI/button/Button";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactUs__container}>
      <p className={styles.contactUs__text}>
        Свяжитесь с нами чтобы узнать больше
      </p>
      <Button text="СВЯЗАТЬСЯ С НАМИ" />
    </div>
  );
};

export default ContactUs;
