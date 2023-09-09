import React from "react";
import styles from "../styles/About.module.scss";
import Button from "../UI/button/Button"
import img from "../images/Russia.svg"
import ContactUs from "../components/ContactUs";


const About = () => {
  return <div>
    <section className={styles.about}>
      <div className={styles.about__text}>
        <h1 className={styles.about__heading}>ИСТОРИЯ it-easy</h1>
        <p className={styles.about__description}>С 2000 года выполняем цифровое преобразование важнейших отраслей экономики и государственных ведомств. НАШЕ КРЕДО: Индивидуальность в деталях, безупречность во всем!</p>
        <Button text="ПOЛУЧИТЬ КОНСУЛЬТАЦИЮ"/>
      </div>
    </section>
    <section className={styles.history}>
    <h1 className={styles.history__title}>ИСТОРИЯ И ДОСТИЖЕНИЯ КОМПАНИИ</h1>
      <div className={styles.history__container}>
        <div className={styles.history__description}>
          <p className={styles.history__date}>2021 — 2023</p>
          <div className={styles.history__list}>
            <ul>
              <li className={styles.history__list_item}>Вошли в состав  Карты российского рынка информационной безопасности 2023   (TAdviser) </li>
              <li className={styles.history__list_item}>9 место Рейтинг крупнейших поставщиков ИТ-услуг в России (TAdviser), 2023</li>
              <li className={styles.history__list_item}>1 место Рейтинг  «Крупнейшие поставщики услуг заказной разработки ПО в России» (TAdviser), 2023</li>
              <li className={styles.history__list_item}>2 место в рейтинге крупнейших поставщиков ИТ-решений в госсекторе России (TAdviser), 2022</li>
              <li className={styles.history__list_item}>Включены в карту рынка «Информационные технологии в банке 2022» (TAdviser)</li>
              <li className={styles.history__list_item}>Управляющий модуль облачной платформы СУПеР вошел в Единый реестр российского ПО , 2022</li>
              <li className={styles.history__list_item}>В Карте российского рынка информационных технологий представлены в 11 категориях, 2022</li>
              <li className={styles.history__list_item}>Вошли в состав Карты производителей самых известных российских программных и аппаратных ИТ-продуктов   «Импортозамещение 2022» </li>
              <li className={styles.history__list_item}>2-е место в рейтинге «Лучший ИТ-работодатель среди крупнейших ИТ-компаний России» (TAdviser), 2022</li>
              <li className={styles.history__list_item}>ТОП-10 самых быстрорастущих ИТ-компаний (CNews), 2021</li>
              <li className={styles.history__list_item}>4 место в рейтинге ИТ-поставщиков в госсекторе России (CNews ), 2021</li>
              <li className={styles.history__list_item}>ТОП-10 крупнейших поставщиков BI-решений в России (TAdviser), 2021</li>
              <li className={styles.history__list_item}>Проект по созданию системы казначейских платежей для Федерального казначейства, объявлен «Уникальным IT-проектом года», 2021</li>
              <li className={styles.history__list_item}>«Универсальный сервер безопасности» включен в Единый реестр российского ПО , 2021</li>
              <li className={styles.history__list_item}>2-е место в рейтинге «Лучший ИТ-работодатель среди крупнейших ИТ-компаний России» (TAdviser), 2021</li>
            </ul>
          </div>
        </div>
        <div className={styles.history__img_container}>
        <img className={styles.history__img} src={img} alt="Карта России" />
        </div>
      </div>
    </section>
    <ContactUs/>
  </div>
};

export default About;
