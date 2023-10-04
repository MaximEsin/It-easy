import React from "react";
import styles from "./Clients.module.scss";
import img1 from "../images/User1.png";
import img2 from "../images/User2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Clients = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <section className={styles.clients}>
      <span className={styles.clients__span}>{data.clientsText}</span>
      <p className={styles.clients__title}>{data.clientsTitle}</p>
      <div className={styles.clients__infoContainer}>
        <div className={styles.clients__info}>
          <img src={img1} alt="Client image" className={styles.clients__pic} />
          <div className={styles.clients__textContainer}>
            <p className={styles.clients__text}>
            {data.clientsDescription1}
            </p>
            <Link to="/About">
              <button className={styles.clients__btn}>{data.clientsButton}</button>
            </Link>
          </div>
        </div>
        <div className={styles.clients__info}>
          <img src={img2} alt="Client image" className={styles.clients__pic} />
          <div className={styles.clients__textContainer}>
            <p className={styles.clients__text}>
            {data.clientsDescription2}
            </p>
            <Link to="/About">
              <button className={styles.clients__btn}>{data.clientsButton}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
