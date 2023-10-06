import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const Archimedes = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return (
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.archimedesTitle}</h2>
            <p className={styles.project__description}>{data.archimedesText1}</p>
            <p className={styles.project__description}>{data.archimedesText2}</p>
            <p className={styles.project__description}>{data.archimedesText3}</p>
            <p className={styles.project__description}>{data.archimedesText4}</p>
            <p className={styles.project__description}>{data.archimedesText5}</p>
            <p className={styles.project__description}>{data.archimedesText6}</p>
            <p className={styles.project__description}>{data.archimedesText7}</p>
        </section>
    );
  };
  
  export default Archimedes;
  