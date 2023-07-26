import { useState } from "react";
import { CustomButton } from "../common/h2Title/customButton/customButton";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./digitalLibraryCards.module.scss";
export const DigitalLibraryCards = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState();

  return (
    <section className={styles.digitalLibraryCards} id="digitalLibraryCards">
      <H2Title>Digital Library Cards</H2Title>
      <div className={styles.digitalLibraryCards__wrapp}>
        <div className={styles.leftFind}>
          <p className={styles.leftFind__titleCard}>Find your Library card</p>
          <form className={styles.leftFind__borderCard}>
            <div className={styles.innerBlock}>
              <p>Brooklyn Public Library</p>
              <input
                type="text"
                placeholder="Reader's name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <input
                type="text"
                placeholder="Card number"
                onChange={(e) => {
                  let a = /[A-z]+/g;
                  if (a.test(e.target.value) === false) {
                    setCard(e.target.value);
                  } else {
                    setCard("");
                  }
                }}
                value={card}
              />
            </div>
            <CustomButton type="submit">Check the card</CustomButton>
          </form>
        </div>
        <div className={styles.rightGet}>
          <h3>Get a reader card</h3>
          <p>
            You will be able to see a reader card after logging into account or
            you can register a new account
          </p>
          <span>
            <CustomButton color="regBtn">sign Up</CustomButton>
            <CustomButton color="regBtn">Log in</CustomButton>
          </span>
        </div>
      </div>
    </section>
  );
};
