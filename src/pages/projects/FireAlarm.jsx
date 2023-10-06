import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const FireAlarm = () => {
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.project__main}>
      <div>
        <h1 className={styles.project__name}>{data.fAHeading}</h1>
        <p className={styles.project__description}>{data.fADescription}</p>
      </div>
      <div>
        <p className={styles.project__description}>{data.fATextOne}</p>
        <ul className={styles.project__ul}>
          <p className={styles.project__description}>{data.fATextTwo}</p>
          <li className={styles.project__text}>{data.fATextThree}</li>
          <li className={styles.project__text}>{data.fATextFour}</li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__description}>{data.fATextFive}</p>
          <li className={styles.project__text}>{data.fATextSix}</li>
          <li className={styles.project__text}>{data.fATextSeven}</li>
          <li className={styles.project__text}>{data.fATextEight}</li>
        </ul>
        <p className={styles.project__text}>{data.fATextNine}</p>
        <p className={styles.project__text}>{data.fATextTen}</p>
        <p className={styles.project__text}>{data.fATextEleven}</p>
        <p className={styles.project__text}>{data.fATextTwelve}</p>
        <p className={styles.project__text}>T{data.fATextThirteen}</p>
        <p className={styles.project__text}>{data.fATextFourteen}</p>
        <ul className={styles.project__ul}>
          <p className={styles.project__description}>{data.fATextFifteen}</p>
          <li className={styles.project__text}>{data.fATextSixteen}</li>
          <li className={styles.project__text}>{data.fATextSeventeen}</li>
          <li className={styles.project__text}>{data.fATextEighteen}</li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__description}>{data.fATextNineteen}</p>
          <li className={styles.project__text}>{data.fATextTwenty}</li>
          <li className={styles.project__text}>{data.fATextTwentyOne}</li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__description}>{data.fATextTwentyTwo}</p>
          <li className={styles.project__text}>{data.fATextTwentyThree}</li>
          <li className={styles.project__text}>{data.fATextTwentyFour}</li>
          <li className={styles.project__text}>{data.fATextTwentyFive}</li>
        </ul>
        <p className={styles.project__text}>{data.fATextTwentySix}</p>
        <p className={styles.project__text}>{data.fATextTwentySeven}</p>
        <p className={styles.project__text}>{data.fATextTwentyEight}</p>
      </div>
    </div>
  );
};

export default FireAlarm;
