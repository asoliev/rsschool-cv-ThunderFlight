import classNames from "classnames";
import { useState } from "react";
import { CustomButton } from "../common/h2Title/customButton/customButton";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./favorites.module.scss";
export const Favorites = ({ data }) => {
  const [check, setCheck] = useState("winter");

  const checkRadioBtn = (e) => {
    setCheck(e.target.value);
  };
  return (
    <section className={styles.favorites} id="favorites">
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
                    <div key={id}>
                      <div className={styles.cover}>
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
                        <p className={styles.cover__description}>
                          {book.description}
                        </p>
                        <CustomButton color="bookBtn">Buy</CustomButton>
                        <img src={book.src} className={styles.cover__image} />
                      </div>
                      {/* <div className={styles.modalBuy}>
                        {/* <div className={styles.modalBuy__titel}>
                          <h3>BUY A LIBRARY CARD</h3>
                          <img src="" />
                        </div>

                        <div className={styles.modalBuy__formBuyWrapper}>
                          <form className={styles.formBuy}>
                            <label htmlFor="bankNumber">Bank card Number</label>
                            <input
                              type="number"
                              maxLength="16"
                              minLength="16"
                              id="bankNumber"
                            />
                            <label htmlFor="month">Expiration Code</label>
                            <div>
                              <input
                                type="number"
                                id="month"
                                maxLength="2"
                                max="12"
                              />
                              <input
                                type="number"
                                id="day"
                                maxLength="2"
                                max="30"
                              />
                            </div>
                            <label htmlFor="holderName">Cardholder name</label>
                            <input type="text" id="holderName" />
                            <label htmlFor="postalCode">Postal Code</label>
                            <input
                              id="postalCode"
                              type="number"
                              maxLength="5"
                              minLength="5"
                            />
                            <label htmlFor="cityTown">City &#47; Town</label>
                            <input type="text" id="cityTown" />
                            <div>
                              <CustomButton color="modalBtn" type="submit">
                                Buy
                              </CustomButton>
                              <h3>{book.price}</h3>
                            </div>
                          </form>
                          <div className={styles.privacy}>
                            <p>
                              If you are live, work, attend school, or pay
                              property taxes in New York State, you can get a
                              $25 digital library card right now using this
                              online form. Visitors to New York State can also
                              use this form to apply for a temporary card.
                            </p>
                          </div>
                        </div>
                      </div> */}
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
