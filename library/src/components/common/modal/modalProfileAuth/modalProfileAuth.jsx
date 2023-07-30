import { useState } from "react";
import styles from "./modalProfileAuth.module.scss";
export const ModalProfileAuth = () => {
  const [openProfileBool, setOpenProfileBool] = useState(false);
  const openProfile = () => {
    setOpenProfileBool(true);
    setProfileReged(false);
  };
  const logOut = () => {
    setOpen(true);
    setProfileReged(false);
    setUserRegistered(false);
  };
  return (
    <div className={styles.ModalProfileAuth}>
      <div
        className={classNames(
          profileReged
            ? styles.modalChooseRegisterOpened
            : styles.modalChooseClosed
        )}>
        <h3>Profile</h3>
        <div></div>
        <p onClick={openProfile}>My Profile</p>
        <p onClick={logOut}>Log Out</p>
      </div>
    </div>
  );
};
