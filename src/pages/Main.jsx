import React from "react";
import styles from "../styles/Main.module.scss";
import Card from "../components/Card";
import image1 from "../images/MotorSharing.svg";
import image2 from "../images/Archimed.svg";
import image3 from "../images/DigitalMarketing.svg";
import image4 from "../images/Government.svg";
import image5 from "../images/Bot.svg";
import image6 from "../images/FierAlarm.svg";
import img from "../images/Group.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/button/Button";
import img1 from "../images/News1.jpeg";
import img2 from "../images/News2.jpg";
import img3 from "../images/News3.1.jpg";
import img4 from "../images/News4.jpeg";
import img5 from "../images/News5.jpeg";
import News from "../components/News";
import introPic from "../images/introPic.png";
import Clients from "../components/Clients";

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
      <div className={styles.video__container}>
        <p className={styles.cards__heading}>{data.videoHeading}</p>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/7vzDAqf2w6c?si=fWvsLnPPyZgSF4Q0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/SUc7dOnASZI?si=344W_iZUirJeHmiF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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
          link={"https://www.msharing.org//"}
          target="_blank"
        />
        <Card
          heading={data.cardTwoHeading}
          description={data.cardTwoText}
          img={image2}
          text={data.cardButton2}
          link={"/archimedes"}
        />
        <Card
          heading={data.cardThreeHeading}
          description={data.cardThreeText}
          img={image3}
          text={data.cardButton2}
          link={"/media"}
        />
        <Card
          heading={data.cardFourHeading}
          description={data.cardFourText}
          img={image4}
          text={data.cardButton2}
          link={"/goverment"}
        />
        <Card
          heading={data.cardFiveHeading}
          description={data.cardFiveText}
          img={image5}
          text={data.cardButton2}
          link={"/digital-employee"}
        />
        <Card
          heading={data.cardSixHeading}
          description={data.cardSixText}
          img={image6}
          text={data.cardButton2}
          link={"/fire-alarm"}
        />
      </div>
      <section className={styles.news}>
        <h2 className={styles.news__title}>{data.news}</h2>
        <div className={styles.news__box}>
          <News
            date="31/10/2023"
            image={img5}
            about={data.newsTitle5}
            description={data.newsDescription5}
          />
          <News
            date="29/09/2023"
            image={img4}
            about={data.newsTitle4}
            description={data.newsDescription4}
          />
          <News
            date="22/09/2023"
            image={img3}
            about={data.newsTitle3}
            description={data.newsDescription3}
          />
          <News
            date="21/09/2023"
            image={img2}
            about={data.newsTitle2}
            description={data.newsDescription2}
          />
          <News
            date="15/09/2023"
            link="https://www.novostiphuketa.com/policiya-prishla-s-proverkoy-v-russkiy-motoprokat-na-phukete-18281.php?PDPA_accept=1"
            image={img1}
            about={data.newsTitle1}
            description={data.newsDescription1}
          />
        </div>
      </section>
      <div className={styles.achievements}>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>10+</h1>
          <p className={styles.achievements__description}>
            {data.achievementsDescription1}
          </p>
        </div>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>300+</h1>
          <p className={styles.achievements__description}>
            {data.achievementsDescription2}
          </p>
        </div>
        <div className={styles.achievements__content}>
          <h1 className={styles.achievements__title}>500+</h1>
          <p className={styles.achievements__description}>
            {data.achievementsDescription3}
          </p>
        </div>
      </div>
      <section className={styles.IP}>
        <p className={styles.IP__titleHead}>{data.ipInfo1}</p>
        <h1 className={styles.IP__title}>{data.ipTitle}</h1>
        <div className={styles.IP__container}>
          <img src={img} alt="Decorational image" className={styles.IP__pic} />
          <div className={styles.IP__section}>
            <p className={styles.IP__description}>{data.ipDescription}</p>
            <Link to="/IP">
              <Button text={data.ipButton}></Button>
            </Link>
          </div>
        </div>
      </section>
      <Clients />
    </div>
  );
};

export default Main;
