import classNames from "classnames";
import styles from "./customButton.module.scss";
export const CustomButton = ({ color, children }) => {
  return (
    <button className={classNames(styles.customBtn, styles[color])}>
      {children}
    </button>
  );
};
