import React from "react";
import styles from "../styles/Utils.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <p className={styles.loader__text}>Загрузка...</p>
    </div>
  );
};

export default Loader;
