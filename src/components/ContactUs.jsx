import React from "react";
import Button from "../UI/button/Button";
import styles from "./ContactUs.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.contactUs__container}>
      <p className={styles.contactUs__text}>{data.contactUsDescription}</p>
      <Link to="/contacts">
        <Button text={data.contactUsButtonText} />
      </Link>
    </div>
  );
};

export default ContactUs;
