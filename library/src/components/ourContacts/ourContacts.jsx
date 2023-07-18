import { H2Title } from "../common/h2Title/h2Title";
import styles from "./ourContacts.module.scss";
export const OurContacts = () => {
  return (
    <section className={styles.ourContacts}>
      <H2Title>Our Contacts</H2Title>
      <div className={styles.ourContacts__wrapTextMap}>
        <div className={styles.textContact}>
          <h3>For All Library Inquirles:</h3>
          <p>Please Call &#40;617&#41; 730-2370</p>
          <p>For TTY Service, Please Call &#40;617&#41; 730-2370</p>
          <p>Putterham Library: &#40;617&#41; 730-2385</p>
          <h3>Senior Staff</h3>
          <p>
            Library Directory:<b>Amanda Hirst</b>
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2660782.9451136393!2d28.264840521788376!3d49.36310937903867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sus!4v1689710539189!5m2!1suk!2sus"
          width="700"
          height="415"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"></iframe>
      </div>
    </section>
  );
};
