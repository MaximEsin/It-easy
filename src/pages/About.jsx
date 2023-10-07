import React from "react";
import styles from "../styles/About.module.scss";
import Button from "../UI/button/Button";
import img from "../images/Russia.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <section className={styles.about}>
      <h1 className={styles.about__heading}>{data.aboutHeading}</h1>
      <p className={styles.about__text}>{data.aboutText}</p>
    </section>
  );
};

export default About;
