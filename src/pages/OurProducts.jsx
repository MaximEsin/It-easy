import React from "react";
import styles from "../styles/Main.module.scss";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import image1 from "../images/MotorSharing.svg";
import image2 from "../images/Archimed.svg";
import image3 from "../images/DigitalMarketing.svg";
import image4 from "../images/Government.svg";
import image5 from "../images/Bot.svg";
import image6 from "../images/FierAlarm.svg";
import image7 from "../images/Authorization.svg";

const OurProducts = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.products__container}>
      <div className={styles.products__introContainer}>
        <h1 className={styles.products__heading}>{data.ourProductsTitle}</h1>
        <p className={styles.products__description}>
          {data.ourProductsDescription}
        </p>
      </div>
      <div className={styles.cards}>
          <Card
          heading={data.cardOneHeading}
          description={data.cardOneText}
          img={image1}
          text={data.cardButton1}
          link={"https://www.bikesharingtai.com/"}
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
          text={data.cardButton3}
          link={"/contacts"}
        />
        <Card
          heading={data.cardFourHeading}
          description={data.cardFourText}
          img={image4}
          text={data.cardButton1}
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
          text={data.cardButton3}
          link={"/fire-alarm"}
        />
        <Card
          heading={data.cardSevenHeading}
          description={data.cardSevenText}
          img={image7}
          text={data.cardButton3}
          link={"/security"}
        />
      </div>
    </div>
  );
};

export default OurProducts;
