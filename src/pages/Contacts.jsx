import React from "react";
import styles from "../styles/Contacts.module.scss";
import intro from "../images/CI.svg";
import { useSelector } from "react-redux";

const Contacts = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.contacts__container}>
      <img
        src={intro}
        alt="Recieved new messages"
        className={styles.contacts__img}
      />
      <h1 className={styles.contacts__heading}>{data.contactsHeading}</h1>
      <div className={styles.contacts__infoContainer}>
        <p className={styles.contacts__name}>{data.contactsOne}</p>
        <a
          href="https://goo.gl/maps/APTn3FWYXvhb2bMJ8"
          target="_blank"
          className={styles.contacts__text}
        >
          35, 20 Moo5 Vichitsongkram Rd, Tambon Wichit,
          <br /> Chang Wat, Mueang Phuket District, Phuket 83000
        </a>
      </div>
      <div className={styles.contacts__infoContainer}>
        <p className={styles.contacts__name}>
        {data.contactsTwo}
        </p>
        <p className={styles.contacts__text}>bikesharingtai@gmail.com</p>
      </div>
    </div>
  );
};

export default Contacts;
