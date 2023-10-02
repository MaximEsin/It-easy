import React from "react";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";
import image1 from "../images/MotorSharing.svg";
import image2 from "../images/Archimed.svg";
import image3 from "../images/FierAlarm.svg";
import image4 from "../images/Papka.svg";
import image5 from "../images/Server.svg";
import ContactUs from "../components/ContactUs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button";
import img1 from "../images/News1.jpeg";
import img2 from "../images/News2.jpg";
import img3 from "../images/News3.1.jpg";
import News from "../components/News";
import introPic from "../images/introPic.png";

const Main = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.intro__container}>
          <div className={styles.intro__text}>
            <h1 className={styles.intro__heading}>{data.mainHeading}</h1>
            <p className={styles.intro__description}>{data.mainDescription}</p>
            <div className={styles.intro__buttonsContainer}>
              <Link to="/contacts">
                <button className={styles.intro__button}>
                  {data.mainButtonText}
                </button>
              </Link>
              <Link to="/contacts">
                <button className={styles.intro__buttonWhite}>
                  {data.mainButtonText2}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.intro__container}>
          <img
            src={introPic}
            alt="Picture of man using this app"
            className={styles.intro__pic}
          />
        </div>
      </div>
      <div className={styles.cards__container}>
        <p className={styles.cards__text}>{data.cardsText1}</p>
        <h2 className={styles.cards__heading}>{data.cardsText2}</h2>
      </div>
      <div className={styles.cards}>
        <Card
          heading={data.cardOneHeading}
          description={data.cardOneText}
          img={image1}
          text={data.cardButton1}
        />
        <Card
          heading={data.cardTwoHeading}
          description={data.cardTwoText}
          img={image2}
          text={data.cardButton2}
        />
        <Card
          heading={data.cardThreeHeading}
          description={data.cardThreeText}
          img={image3}
          text={data.cardButton3}
        />
        <Card
          heading={data.cardFourHeading}
          description={data.cardFourText}
          img={image4}
          text={data.cardButton1}
        />
        <Card
          heading={data.cardFiveHeading}
          description={data.cardFiveText}
          img={image5}
          text={data.cardButton1}
        />
        <Card
          heading={data.cardSixHeading}
          description={data.cardSixText}
          img={image4}
          text={data.cardButton1}
        />
      </div>
      <div className={styles.achievements}>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>10+</h1>
          <p className={styles.achievements__description}>{data.achievementsDescription1}</p>
        </div>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>333+</h1>
          <p className={styles.achievements__description}>{data.achievementsDescription2}</p>
        </div>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>555+</h1>
          <p className={styles.achievements__description}>{data.achievementsDescription3}</p>
        </div>
      </div>
      <section className={styles.news}>
        <h2 className={styles.news__title}>{data.news}</h2>
        <div className={styles.news__box}>
          <News date="22/09/2023" image={img3} about={data.newsTitle3} />
          <News date="21/09/2023" image={img2} about={data.newsTitle2} />
          <News
            date="15/09/2023"
            link="https://www.novostiphuketa.com/policiya-prishla-s-proverkoy-v-russkiy-motoprokat-na-phukete-18281.php?PDPA_accept=1"
            image={img1}
            about={data.newsTitle1}
          />
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
            <Link to="/IP">
              <Button text={data.ipButton}></Button>
            </Link>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Main;
