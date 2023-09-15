import React from "react";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";
import Bank from "../images/Bank.svg";
import Dom from "../images/Dom.svg";
import Medal from "../images/Medal.svg";
import Papka from "../images/Papka.svg";
import Server from "../images/Server.svg";
import ContactUs from "../components/ContactUs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button";
import img from "../images/Polis.jpeg"

const Main = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <div className={styles.intro__text}>
            <h1 className={styles.intro__heading}>{data.mainHeading}</h1>
            <p className={styles.intro__description}>{data.mainDescription}</p>
            <Link to="/contacts">
              <button className={styles.intro__button}>
                {data.mainButtonText}
              </button>
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.cards}>
        <Card
          heading={data.cardOneHeading}
          description={data.cardOneText}
          img={Bank}
        />
        <Card
          heading={data.cardTwoHeading}
          description={data.cardTwoText}
          img={Dom}
        />
        <Card
          heading={data.cardThreeHeading}
          description={data.cardThreeText}
          img={Medal}
        />
        <Card
          heading={data.cardFourHeading}
          description={data.cardFourText}
          img={Server}
        />
        <Card
          heading={data.cardFiveHeading}
          description={data.cardFiveText}
          img={Papka}
        />
        <Card
          heading={data.cardSixHeading}
          description={data.cardSixText}
          img={Server}
        />
      </div>
      <section className={styles.news}>
        <h2 className={styles.news__title}>{data.news}</h2>
        <div className={styles.news__content}>
          <div className={styles.news__card}>
            <div className={styles.news__box}>
              <span className={styles.news__date}>15/09/2023</span>
            </div>
            <div className={styles.news__container}>
              <h3 className={styles.news__about}>{data.newsTitle1}</h3>
              <a href="https://www.novostiphuketa.com/policiya-prishla-s-proverkoy-v-russkiy-motoprokat-na-phukete-18281.php?PDPA_accept=1">
              <img className={styles.news__img} src={img} alt="news" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.IP}>
        <div className={styles.IP__container}>
          <div className={styles.IP__content}>
            <h1 className={styles.IP__title}>{data.ipTitle}</h1>
            <p className={styles.IP__description}>{data.ipDescription}</p>
            <div className={styles.IP__section}>
              <p className={styles.IP__info}>{data.ipInfo1}</p>
              <p className={styles.IP__info}>{data.ipInfo2}</p>
              <p className={styles.IP__info}>{data.ipInfo3}</p>
            </div>
            <Link to="/IP"><Button text={data.ipButton}></Button></Link>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Main;
