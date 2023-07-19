import facebook from "../../../public/images/u_facebook-f.svg";
import instagram from "../../../public/images/u_instagram.svg";
import twitter from "../../../public/images/u_twitter-alt.svg";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.leftContact}>
          <p className={styles.leftContact__address}>
            286 Cadman Plaza, New York, NY 11238, United States
          </p>
          <div className={styles.leftContact__socialAccounts}>
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className={styles.rightSchedule}>
          <p>Mon - Fri</p>
          <p>08:00 am - 07:00 pm</p>

          <p>Sat - Sun</p>
          <p>10:00 am - 06:00 pm</p>
        </div>
      </div>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__bottom}>
        <p>2023</p>
        <p>The Rolling Scopes School</p>
        <p>Username</p>
      </div>
    </footer>
  );
};
