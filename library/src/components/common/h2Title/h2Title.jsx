import styles from "./h2Title.module.scss";
export const H2Title = (props) => {
  return (
    <div className={styles.title}>
      <h2>{props.children}</h2>
      <div></div>
    </div>
  );
};
