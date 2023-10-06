import React from "react";
import styles from "../styles/IP.module.scss";
import { useSelector } from "react-redux";

const IP = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.ip__container}>
      <h1 className={styles.ip__heading}>{data.ipHeading}</h1>
      <p className={styles.ip__text}>{data.ipTextOne}</p>
      <p className={styles.ip__text}>{data.ipTextTwo}</p>
    </div>
  );
};

export default IP;
