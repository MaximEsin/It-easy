import React from "react";
import styles from "../styles/Main.module.scss";
import Button from "../UI/UX/button/Button";
import ContactUs from "../components/ContactUs";

const Main = () => {
  return (
    <div>
      <section className={styles.intro}>
        <div className={styles.intro__text}>
          <h1 className={styles.intro__heading}>
            Добро пожаловать в MotoSharing
          </h1>
          <p className={styles.intro__description}>Байки в Тайланде</p>
          <Button text="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" />
        </div>
      </section>
      <section className={styles.cards}>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <a href=""></a>
            <div></div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Main;
