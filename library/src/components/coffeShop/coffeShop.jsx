import classNames from "classnames";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./coffeShop.module.scss";
export const CoffeShop = () => {
  return (
    <section className={styles.coffeShop}>
      <H2Title>Coffe Shop</H2Title>
      <p className={styles.coffeShop__descriptionUp}>
        In our library, we have of cozy coffee shop, welcoming in customers with
        frothy cappuccinos and friendly conversation.
      </p>
      <p className={styles.coffeShop__descriptionBottom}>
        you can get a favorite book and read in coffee shop. Our barista to cook
        you best coffee, and also you can try desserts from bakery.
      </p>
      <div className={styles.coffeShop__priceFood}>
        <div className={styles.leftPrice}>
          <h3 className={styles.leftPrice__foodTitle}>Coffe &amp; Tea</h3>
          <ul className={styles.listFood}>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>Cold Brew Coffe</p>
              <div></div>
              <p>&#36;3</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>French Press Pot</p>
              <div></div>
              <p>&#36;5</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>Espresso</p>
              <div></div>
              <p>&#36;2</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>Cappucino</p>
              <div></div>
              <p>&#36;4</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>Hot Tea</p>
              <div></div>
              <p>&#36;2</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneLeft
              )}>
              <p>Cold Tea</p>
              <div></div>
              <p>&#36;2</p>
            </li>
          </ul>
        </div>
        <div className={styles.rightPrice}>
          <h3 className={styles.rightPrice__foodTitle}>Deserst &amp; Cakes</h3>
          <ul className={styles.listFood}>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Forest Gateau</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Blue Moon</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Truffle Cake</p>
              <div></div>
              <p>&#36;15</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Chocolate Cake</p>
              <div></div>
              <p>&#36;18</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Poet’s Dream Cake</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneFood,
                styles.listFood__oneRight
              )}>
              <p>Pineapple Cake</p>
              <div></div>
              <p>&#36;14</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
