import classNames from "classnames";
import { useState } from "react";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./favorites.module.scss";
export const Favorites = ({ data }) => {
  const [check, setCheck] = useState("winter");

  const checkRadioBtn = (e) => {
    setCheck(e.target.value);
  };
  return (
    <section className={styles.favorites}>
      <H2Title>Favorites</H2Title>

      <div className={styles.seasonBooks}>
        <p>Pick favorites of season</p>
        <span className={styles.seasonBooks__pagination}>
          <input
            type="radio"
            id="Winter"
            name="seasons"
            value={"winter"}
            onChange={checkRadioBtn}
            checked={check === "winter" ? true : false}
          />
          <label htmlFor="Winter">Winter</label>
          <input
            type="radio"
            id="Spring"
            name="seasons"
            value={"spring"}
            onChange={checkRadioBtn}
            checked={check === "spring" ? true : false}
          />
          <label htmlFor="Spring">Spring</label>
          <input
            type="radio"
            id="Summer"
            name="seasons"
            value={"summer"}
            onChange={checkRadioBtn}
            checked={check === "summer" ? true : false}
          />
          <label htmlFor="Summer">Summer</label>
          <input
            type="radio"
            id="Autumn"
            name="seasons"
            value={"autumn"}
            onChange={checkRadioBtn}
            checked={check === "autumn" ? true : false}
          />
          <label htmlFor="Autumn">Autumn</label>
        </span>
        <div className={styles.seasonBooks__preViewBooks}>
          {data.map((item) => {
            for (let key in item) {
              if (check === key) {
                return item[key].map((book, id) => {
                  return (
                    <div className={styles.cover} key={id}>
                      <h3 className={styles.cover__from}>{book.from}</h3>
                      <div className={styles.cover__lineGold}></div>
                      <h4
                        className={classNames(
                          styles.cover__name,
                          styles.nameAndAuthor
                        )}>
                        {book.name}
                      </h4>
                      <h4
                        className={classNames(
                          styles.cover__author,
                          styles.nameAndAuthor
                        )}>
                        {book.author}
                      </h4>
                      <p
                        className={classNames(
                          styles.cover__description,
                          styles.nameAndAuthor
                        )}>
                        {book.description}
                      </p>
                      <button className={styles.cover__btnBuy}>Buy</button>
                      <img src={book.src} className={styles.cover__image} />
                    </div>
                  );
                });
              }
            }
          })}
        </div>
      </div>
    </section>
  );
};
