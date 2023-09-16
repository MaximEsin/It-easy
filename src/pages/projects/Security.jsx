import React from "react";
import styles from "../../styles/Projects.module.scss";

const Security = () => {
    return(
        <div className={styles.project__container}>
            <div className={styles.project__infoContainer}>
            <h1 className={styles.project__heading}>Управление учетными записями и правами доступа пользователей</h1>
                <p className={styles.project__description}>
                  Система обеспечивает централизованное управление доступом и контроль информационной безопасности. 
                  Она обеспечивает управление доступом к веб ресурсам компании через аутентификацию и авторизацию пользователей. 
                  Эта система повышает уровень информационной безопасности. Она управляет правами доступа конкретного пользователя, 
                  управляет паролями пользователей и защищает от подбора паролей и регистрирует все происходящие события.
                </p>
                <div>
                  <p className={styles.project__description}>Ключевые особенности:</p>
                      <p className={styles.project__}>1. Управление доступом пользователей к любой из систем/подсистем независимо от их количества</p>
                      <p className={styles.project__}>2. Постоянный контроль защищенности и оповещение о фактах несанкционированного доступа.</p>
                      <p className={styles.project__}>3. Возможности интеграции с информационными ресурсами и организациями в целях получения данных пользователей.</p>
                      <p className={styles.project__}>4. Гибкое назначение привилегий.</p>
                </div>
            </div>
        </div>
    )
}

export default Security;