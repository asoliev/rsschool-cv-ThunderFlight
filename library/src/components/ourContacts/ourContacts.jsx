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
        <div>
          {function initMap() {
            const myLatlng = {
              lat: 40.69568045230231,
              lng: -73.99127535922247,
            };
            const map = new google.maps.Map({
              zoom: 4,
              center: myLatlng,
            });
            const marker = new google.maps.Marker({
              position: myLatlng,
              map,
              title: "Click to zoom",
            });

            map.addListener("center_changed", () => {
              // 3 seconds after the center of the map has changed, pan back to the
              // marker.
              window.setTimeout(() => {
                map.panTo(marker.getPosition());
              }, 3000);
            });
            marker.addListener("click", () => {
              map.setZoom(8);
              map.setCenter(marker.getPosition());
            });
          }}
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
