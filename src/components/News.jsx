import React from "react";
import styles from "./News.module.scss";
import { useSelector } from "react-redux";

const News = ({image, link, date, about}) => {
    const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.news__content}>
    <div className={styles.news__card}>
      <div className={styles.news__box}>
        <span className={styles.news__date}>{date}</span>
      </div>
      <div className={styles.news__container}>
        <h3 className={styles.news__about}>{about}</h3>
        <a
          href={link}
          target="_blank"
        >
          <img className={styles.news__img} src={image} alt="news" />
        </a>
      </div>
    </div>
  </div>
  )
};

export default News;