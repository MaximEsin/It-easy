import React from "react";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";

const Main = () => {
  return (
    <div>
      <section className={styles.intro}>
        <div className={styles.intro__text}>
          <h1 className={styles.intro__heading}>
            Добро пожаловать в MotoSharing
          </h1>
          <p className={styles.intro__description}>Байки в Тайланде</p>
          <button className={styles.intro__button}>
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </button>
        </div>
      </section>
      <Card />
    </div>
  );
};

export default Main;
