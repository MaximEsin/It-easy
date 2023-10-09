import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const Reanimation = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return(
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.reanimationTitle}</h2>
            <p className={styles.project__description}>{data.reanimationDescription}</p>
            <div>
              <p className={styles.project__description}>{data.reanimationText1}</p>
              <p>{data.reanimationText2}</p>
              <p>{data.reanimationText3}</p>
              <p>{data.reanimationText4}</p>
              <p>{data.reanimationText5}</p>
              <p>{data.reanimationText6}</p>
              <p>{data.reanimationText7}</p>
            </div>
            <div>
              <p className={styles.project__description}>{data.reanimationText8}</p>
              <p>{data.reanimationText9}</p>
              <p>{data.reanimationText10}</p>
              <p>{data.reanimationText11}</p>
            </div>
            <div>
              <p className={styles.project__description}>{data.reanimationText12}</p>
              <p>{data.reanimationText13}</p>
              <p>{data.reanimationText14}</p>
              <p>{data.reanimationText15}</p>
              <p>{data.reanimationText16}</p> 
            </div>
        </section>
    )
}

export default Reanimation;