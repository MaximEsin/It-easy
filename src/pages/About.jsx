import React from "react";
import styles from "../styles/About.module.scss";
import Button from "../UI/button/Button";
import img from "../images/Russia.svg";
import ContactUs from "../components/ContactUs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div>
      <section className={styles.about}>
        <div className={styles.about__text}>
          <h1 className={styles.about__heading}>{data.aboutTitle}</h1>
          <p className={styles.about__description}>{data.aboutDescription}</p>
          <Link to="/contacts">
            <Button text={data.aboutButton} />
          </Link>
        </div>
      </section>
      <section className={styles.history}>
        <h1 className={styles.history__title}>{data.aboutHeading}</h1>
        <div className={styles.history__container}>
          <div className={styles.history__description}>
            <p className={styles.history__date}>2021 — 2023</p>
            <div className={styles.history__list}>
              <ul>
                <li className={styles.history__list_item}>{data.aboutList1}</li>
                <li className={styles.history__list_item}>{data.aboutList2}</li>
                <li className={styles.history__list_item}>{data.aboutList3}</li>
                <li className={styles.history__list_item}>{data.aboutList4}</li>
                <li className={styles.history__list_item}>{data.aboutList5}</li>
                <li className={styles.history__list_item}>{data.aboutList6}</li>
                <li className={styles.history__list_item}>{data.aboutList7}</li>
                <li className={styles.history__list_item}>{data.aboutList8}</li>
                <li className={styles.history__list_item}>{data.aboutList9}</li>
                <li className={styles.history__list_item}>
                  {data.aboutList10}
                </li>
                <li className={styles.history__list_item}>
                  {data.aboutList11}
                </li>
                <li className={styles.history__list_item}>
                  {data.aboutList12}
                </li>
                <li className={styles.history__list_item}>
                  {data.aboutList13}
                </li>
                <li className={styles.history__list_item}>
                  {data.aboutList14}
                </li>
                <li className={styles.history__list_item}>
                  {data.aboutList15}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.history__img_container}>
            <img className={styles.history__img} src={img} alt="Карта России" />
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default About;
