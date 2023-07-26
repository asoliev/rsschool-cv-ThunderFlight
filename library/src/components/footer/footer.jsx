import facebook from "../../../public/images/u_facebook-f.svg";
import instagram from "../../../public/images/u_instagram.svg";
import twitter from "../../../public/images/u_twitter-alt.svg";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerWrapper__top}>
          <div className={styles.leftContact}>
            <p className={styles.leftContact__address}>
              286 Cadman Plaza, New York, NY 11238, United States
            </p>
            <div className={styles.leftContact__socialAccounts}>
              <a target="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Duk">
                <img src={twitter} alt="twitter" className={styles.socialSvg} />
              </a>
              <a target="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram"
                  className={styles.socialSvg}
                />
              </a>
              <a target="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="facebook"
                  className={styles.socialSvg}
                />
              </a>
            </div>
          </div>
          <div className={styles.rightSchedule}>
            <p>Mon - Fri</p>
            <p>08:00 am - 07:00 pm</p>

            <p>Sat - Sun</p>
            <p>10:00 am - 06:00 pm</p>
          </div>
        </div>
        <div className={styles.footerWrapper__line}></div>
        <div className={styles.footerWrapper__bottom}>
          <p>2023</p>
          <p>The Rolling Scopes School</p>
          <p>Gentleman</p>
        </div>
      </div>
    </footer>
  );
};
