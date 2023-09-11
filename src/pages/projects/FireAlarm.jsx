import React from "react";
import styles from "../../styles/Projects.module.scss";
import Button from "../../UI/button/Button";

const FireAlarm = () => {
  return (
    <div className={styles.project__container}>
      <div className={styles.project__infoContainer}>
        <h1 className={styles.project__name}>Fire alarm monitoring system</h1>
        <p className={styles.project__description}>
          This system scans all fire safety sensors in the enterprise
        </p>
        <Button text="Contact Us" />
      </div>
      <div className={styles.project__main}>
        <p className={styles.project__text}>
          The product is suitable for government institutions and for private
          enterprises, as well as kindergartens and schools, factories and
          industrial workshops.
        </p>
        <ul className={styles.project__ul}>
          <p className={styles.project__ulName}>Main goals:</p>
          <li className={styles.project__text}>
            - Detection of faults and notification of the user about them in a
            continuous mode.
          </li>
          <li className={styles.project__text}>
            - Ensure constant monitoring of remote objects (200-300 km.)
          </li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__ulName}>Consists of:</p>
          <li className={styles.project__text}>
            1. Detectors that are installed on the ceiling
          </li>
          <li className={styles.project__text}>2. Controllers</li>
          <li className={styles.project__text}>
            3. Control cabinets, where everything is assembled
          </li>
        </ul>
        <p className={styles.project__text}>
          Using this system, you do not need to send an employee to check the
          equipment; the system will automatically notify you online of any
          malfunctions and it works 24/7.
        </p>
        <p className={styles.project__text}>
          The system also alerts you when maintenance needs to be done. All data
          (system logs, emergency cases, etc.) are stored in the system and
          compiled into analytical reporting.
        </p>
        <p className={styles.project__text}>
          The system automatically informs fire safety members on site and the
          fire dispatcher.
        </p>
        <p className={styles.project__text}>
          There is a list of sensor systems that are suitable for this software.
          You need to check whether this software is suitable for the already
          installed equipment.
        </p>
        <p className={styles.project__text}>
          This is a closed system and you can’t just access it. You can connect
          the system log to the monitoring center at your enterprise and view
          absolutely all user actions, and all data is encrypted.
        </p>
        <p className={styles.project__text}>
          The customer receives full access to the application that is installed
          on his server.
        </p>
        <ul className={styles.project__ul}>
          <p className={styles.project__ulName}>
            The program itself generates the following reports:
          </p>
          <li className={styles.project__text}>
            - Event protocols for objects
          </li>
          <li className={styles.project__text}>
            - Statistics for different types of signals for a certain period
          </li>
          <li className={styles.project__text}>
            - Statistics about quality of service
          </li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__ulName}>
            The system has the following analytical panels:
          </p>
          <li className={styles.project__text}>
            - Static and dynamic sections of data on the condition of equipment
            and its maintenance.
          </li>
          <li className={styles.project__text}>
            - Predictive analytics, warning about the need for repairs before a
            breakdown.
          </li>
        </ul>
        <ul className={styles.project__ul}>
          <p className={styles.project__ulName}>Users and personal accounts:</p>
          <li className={styles.project__text}>
            1. Management - technical condition monitoring, analytics and
            reporting
          </li>
          <li className={styles.project__text}>
            2. Monitoring Center - obtaining data on technical equipment
            condition 24/7, reporting of faults
          </li>
          <li className={styles.project__text}>
            3. Maintenance organization - planning and carrying out maintenance,
            monitoring the implementation of assigned tasks.
          </li>
        </ul>
        <p className={styles.project__text}>
          Each device has its own technical card, which contains information
          about performed and planned maintenance.
        </p>
        <p className={styles.project__text}>
          For large areas, you need to install repeaters, which can be seen on
          the map in the geomodule.
        </p>
        <p className={styles.project__text}>
          The advantage of our wireless system is that it speeds up installation
          and this installation becomes much cheaper than installing a wired
          system. The efficiency is noticeable in facilities with an area of
          more than 150 square meters.
        </p>
      </div>
    </div>
  );
};

export default FireAlarm;
