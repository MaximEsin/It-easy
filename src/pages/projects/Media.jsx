import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const Media = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return(
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.mediaTitle}</h2>
            <p className={styles.project__description}>{data.mediaText1}</p>
            <p className={styles.project__description}>{data.mediaText2}</p>
            <div>
            <p>{data.mediaText3}</p>
            <p>{data.mediaText4}</p>
            <p>{data.mediaText5}</p>
            <p>{data.mediaText6}</p>
            <p>{data.mediaText7}</p>
            </div>
            <p className={styles.project__description}>{data.mediaText8}</p>
            <div>
            <p>{data.mediaText9}</p>
            <p>{data.mediaText10}</p>
            <p>{data.mediaText11}</p>
            <p>{data.mediaText12}</p>
            <p>{data.mediaText13}</p>
            </div>
        </section>
    )
}

export default Media;