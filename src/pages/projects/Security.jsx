import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const Security = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return(
        <div className={styles.project__main}>
            <div>
                <h1 className={styles.project__heading}>{data.securityTitle}</h1>
                <p className={styles.project__description}>
                {data.securityDescription}
                </p>
                <div>
                  <p className={styles.project__description}>{data.securityContent}</p>
                      <p className={styles.project__}>{data.securityContent1}</p>
                      <p className={styles.project__}>{data.securityContent2}</p>
                      <p className={styles.project__}>{data.securityContent3}</p>
                      <p className={styles.project__}>{data.securityContent4}</p>
                </div>
            </div>
        </div>
    )
}

export default Security;