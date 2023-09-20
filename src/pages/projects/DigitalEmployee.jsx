import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const DigitalEmployee = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return (
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.DigitalEmployeeTitle}</h2>
            <p className={styles.project__description}>{data.DigitalEmployeeDescription1}</p>
            <p className={styles.project__description}>{data.DigitalEmployeeDescription2}</p>
            <div className={styles.project__}>
              <p className={styles.project__text}>{data.DigitalEmployeeHeading1}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText1}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText2}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText3}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText4}</p>
            </div>
            <p className={styles.project__description}>{data.DigitalEmployeeDescription3}</p>
            <div>
              <p className={styles.project__text}>{data.DigitalEmployeeHeading2}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText5}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText6}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText7}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText8}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText9}</p>
            </div>
            <p className={styles.project__description}>{data.DigitalEmployeeDescription4}</p>
            <p className={styles.project__description}>{data.DigitalEmployeeDescription5}</p>
            <div>
              <p className={styles.project__text}>{data.DigitalEmployeeHeading3}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText10}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText11}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText12}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText13}</p>
              <p className={styles.project__text}>{data.DigitalEmployeeText14}</p>
            </div>
        </section>
    );
  };
  
  export default DigitalEmployee;
  