import React from "react";
import styles from "../styles/Main.module.scss"
import Card from "../components/Card"
import Bank from "../images/Bank.svg"
import Dom from "../images/Dom.svg"
import Medal from "../images/Medal.svg"
import Papka from "../images/Papka.svg"
import Server from "../images/Server.svg"

const Main = () => {
  return <div className={styles.main}>
    <section className={styles.intro}>
      <div className={styles.intro__text}>
      <h1 className={styles.intro__heading}>Добро пожаловать в MotoSharing</h1>
      <p className={styles.intro__description}>Байки в Тайланде</p>
      <button className={styles.intro__button}>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </section>
    <div className={styles.cards}>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Bank}/>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Dom}/>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Medal}/>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Server}/>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Papka}/>
    <Card heading="tfyguhijokp" description="dgfhjnggdfhg" img={Server}/>
    </div>
  </div>;
};

export default Main;
