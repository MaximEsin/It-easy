import React from "react";
import styles from "../styles/Hiring.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hiring = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return(
        <section className={styles.hiring__container}>
            <div className={styles.hiring__heading}>
		  	      <h1 className={styles.hiring__title}>{data.hiringTitle1}</h1> 
              <p className={styles.hiring__title}>{data.hiringTitle2}</p>
            </div>
            <div className={styles.hiring__card}>
                <div className={styles.hiring__content}>
                    <div className={styles.hiring__job}>
                      <p className={styles.hiring__description}>{data.hiringCardOneTitle1}</p>
                      <p className={styles.hiring__description}><span className={styles.hiring__description_bold}>{data.hiringCardOneTitle2}</span></p>
                    </div>
                    <div className={styles.hiring__border}>
                        <p className={styles.hiring__description}><span className={styles.hiring__description_bold}>{data.hiringCardOneResponsibilitys}</span></p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription1}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription2}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription3}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription4}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription5}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription6}</p>
                        <p className={styles.hiring__description}>{data.hiringCardOneDescription7}</p>
                    </div>
                    <div className={styles.hiring__location}>
                        <div>
                          <p className={styles.hiring__description}><span className={styles.hiring__description_bold}>{data.hiringCardOnePayment}</span></p>
                          <p className={styles.hiring__description}>{data.hiringCardOnePlace}</p>
                          <p className={styles.hiring__date}>{data.hiringCardOneDate}</p>
                        </div>
                        <div className={styles.hiring__box}>
                          <Link to="/contacts">
                            <button className={styles.hiring__img}> </button>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hiring;