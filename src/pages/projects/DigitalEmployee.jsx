import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const DigitalEmployee = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return (
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.digitalEmployeeTitle}</h2>
            <p className={styles.project__description}>{data.digitalEmployeeDescription1}</p>
            <p className={styles.project__description}>{data.digitalEmployeeDescription2}</p>
            <div className={styles.project__}>
              <p className={styles.project__text}>{data.digitalEmployeeHeading1}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText1}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText2}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText3}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText4}</p>
            </div>
            <p className={styles.project__description}>{data.digitalEmployeeDescription3}</p>
            <div>
              <p className={styles.project__text}>{data.digitalEmployeeHeading2}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText5}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText6}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText7}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText8}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText9}</p>
            </div>
            <p className={styles.project__description}>{data.digitalEmployeeDescription4}</p>
            <p className={styles.project__description}>{data.digitalEmployeeDescription5}</p>
            <div>
              <p className={styles.project__text}>{data.digitalEmployeeHeading3}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText10}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText11}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText12}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText13}</p>
              <p className={styles.project__text}>{data.digitalEmployeeText14}</p>
            </div>
        </section>
    );
  };
  
  export default DigitalEmployee;
  