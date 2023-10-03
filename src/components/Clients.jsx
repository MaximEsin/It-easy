import React from "react";
import styles from "./Clients.module.scss";
import img1 from "../images/User1.png";
import img2 from "../images/User2.png";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <section className={styles.clients}>
      <span className={styles.clients__span}>ОТЗЫВЫ</span>
      <p className={styles.clients__title}>Что говорят наши клиенты</p>
      <div className={styles.clients__infoContainer}>
        <div className={styles.clients__info}>
          <img src={img1} alt="Client image" className={styles.clients__pic} />
          <div className={styles.clients__textContainer}>
            <p className={styles.clients__text}>
              Компания IT-easy проявила себя как профессиональный и отзывчивый
              партнер в области автоматизации бизнеса. Их экспертные знания и
              индивидуальный подход помогли достичь желаемых результатов.
            </p>
            <Link to="/About">
              <button className={styles.clients__btn}>Узнать больше</button>
            </Link>
          </div>
        </div>
        <div className={styles.clients__info}>
          <img src={img2} alt="Client image" className={styles.clients__pic} />
          <div className={styles.clients__textContainer}>
            <p className={styles.clients__text}>
              IT-easy – это надежный и компетентный партнер. С их помощью мы
              смогли значительно улучшить управление нашим бизнесом и повысить
              его эффективность. Рекомендую!
            </p>
            <Link to="/About">
              <button className={styles.clients__btn}>Узнать больше</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
