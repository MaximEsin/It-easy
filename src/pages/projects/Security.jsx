import React from "react";
import styles from "../../styles/Projects.module.scss";

const Security = () => {
    return(
        <div className={styles.project__container}>
            <h1 className={styles.project__heading}>Управление учетными записями и правами доступа пользователей</h1>
            <p className={styles.project__description}>
              Система обеспечивает централизованное управление доступом и контроль информационной безопасности. 
              Она обеспечивает управление доступом к веб ресурсам компании через аутентификацию и авторизацию пользователей. 
              Эта система повышает уровень информационной безопасности. Она управляет правами доступа конкретного пользователя, 
              управляет паролями пользователей и защищает от подбора паролей и регистрирует все происходящие события.
            </p>
            <div>
              <p className={styles.project__description}>Ключевые особенности:</p>
              <ul className={styles.project__container}>
                  <li className={styles.project__container}>Управление доступом пользователей к любой из систем/подсистем независимо от их количества</li>
                  <li className={styles.project__container}>Постоянный контроль защищенности и оповещение о фактах несанкционированного доступа.</li>
                  <li className={styles.project__container}>Возможности интеграции с информационными ресурсами и организациями в целях получения данных пользователей.</li>
                  <li className={styles.project__container}>Гибкое назначение привилегий.</li>
              </ul>
            </div>
        </div>
    )
}

export default Security;