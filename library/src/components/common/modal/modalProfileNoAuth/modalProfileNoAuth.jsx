import classNames from "classnames";
import { useAppContext } from "../../../../contexts/useAppContext";
import styles from "./ModalProfileNoAuth.module.scss";
export const ModalProfileNoAuth = () => {
  const { key, openModalLogIn, openModalRegister } = useAppContext();

  return (
    <div
      className={classNames(
        key.open ? styles.modalChooseOpened : styles.modalChooseClosed
      )}>
      <h3>Profile</h3>
      <div></div>
      <p onClick={() => openModalLogIn()}>Log In</p>
      <p onClick={() => openModalRegister()}>Register</p>
    </div>
  );
};
