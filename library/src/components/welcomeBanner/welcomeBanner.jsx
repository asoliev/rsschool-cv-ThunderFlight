import styles from "./welcomeBanner.module.scss";
export const WelcomeBanner = () => {
  return (
    <section className={styles.welcomeBannerWrapper}>
      <div className={styles.welcomeBannerWrapper__blockTitle}>
        <p>Welcome to the Brooklyn Library</p>
      </div>
    </section>
  );
};
