import React from "react";
import styles from "../../styles/Projects.module.scss";
import { useSelector } from "react-redux";

const Goverment = () => {
    const { data } = useSelector((state) => state.dataReducer);
    return(
        <section className={styles.project__main}>
            <h2 className={styles.project__name}>{data.govermentTitle}</h2>
            <p className={styles.project__description}>{data.govermentText1}</p>
            <p className={styles.project__description}>{data.govermentText2}</p>
            <p className={styles.project__description}>{data.govermentText3}</p>
            <p className={styles.project__description}>{data.govermentText4}</p>
            <p className={styles.project__description}>{data.govermentText5}</p>
            <p className={styles.project__description}>{data.govermentText10}</p>
            <div>
                <div>
                    <p>{data.govermentContent1}</p>
                    <ul>
                        <li>{data.govermentContentlist1}</li>
                        <li>{data.govermentContentlist2}</li>
                        <li>{data.govermentContentlist3}</li>
                    </ul>
                </div>
                <div>
                    <p>{data.govermentContent2}</p>
                    <ul>
                        <li>{data.govermentContentlist4}</li>
                        <li>{data.govermentContentlist5}</li>
                        <li>{data.govermentContentlist6}</li>
                        <li>{data.govermentContentlist7}</li>
                    </ul>
                </div>
            </div>
            <p className={styles.project__description}>{data.govermentText6}</p>
            <div>
                <div>
                    <p>{data.govermentContent3}</p>
                    <ul>
                        <li>{data.govermentContentlist8}</li>
                        <li>{data.govermentContentlist9}</li>
                        <li>{data.govermentContentlist10}</li>
                    </ul>
                </div>
                <div>
                    <p>{data.govermentContent4}</p>
                    <ul>
                        <li>{data.govermentContentlist11}</li>
                        <li>{data.govermentContentlist12}</li>
                        <li>{data.govermentContentlist13}</li>
                        <li>{data.govermentContentlist14}</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>{data.govermentContent5}</p>
                <ul>
                    <li>{data.govermentContentlist15}</li>
                    <li>{data.govermentContentlist16}</li>
                    <li>{data.govermentContentlist17}</li>
                    <li>{data.govermentContentlist18}</li>
                </ul>
            </div>
            <p className={styles.project__description}>{data.govermentText7}</p>
            <div>
                <p className={styles.project__description}>{data.govermentText8}</p>
                <ul>
                    <li>{data.govermentContentlist19}</li>
                    <li>{data.govermentContentlist20}</li>
                    <li>{data.govermentContentlist21}</li>
                </ul>
            </div>
            <p className={styles.project__description}>{data.govermentText9}</p>
        </section>
    )
}

export default Goverment;