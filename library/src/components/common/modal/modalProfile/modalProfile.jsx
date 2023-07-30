import { useState } from "react";
import styles from "./modalProfile.module.scss";
export const ModalProfile = () => {
  const [openProfileBool, setOpenProfileBool] = useState(false);
  const closeProfile = () => {
    setOpenProfileBool(false);
  };
  return (
    <div
      className={classNames(
        openProfileBool ? styles.myProfile : styles.myProfileClose
      )}>
      <div className={styles.myProfile__left}>
        <div className={styles.profileAvatar}>
          {loginUserProfile.firstName !== undefined
            ? loginUserProfile.firstName.slice(0, 1).toUpperCase()
            : "undefined"}
          {loginUserProfile.lastName !== undefined
            ? loginUserProfile.lastName.slice(0, 1).toUpperCase()
            : "undefined"}
        </div>
        <div className={styles.profileName}>
          {loginUserProfile !== undefined
            ? loginUserProfile.firstName
            : "undefined"}
          {loginUserProfile !== undefined
            ? loginUserProfile.lastName
            : "undefined"}
        </div>
      </div>
      <div className={styles.myProfile__right}>
        <h3>MY PROFILE</h3>
        <ul>
          <li></li>
        </ul>
        <h4>Rented books</h4>
        <p>
          Card number
          <a>
            {loginUserProfile !== undefined
              ? loginUserProfile.cardNumber
              : console.log(loginUserProfile)}
          </a>
        </p>
      </div>
      <img src={close} onClick={closeProfile} />
    </div>
  );
};
