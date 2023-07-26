import classNames from "classnames";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./coffeShop.module.scss";
export const CoffeShop = () => {
  return (
    <section className={styles.coffeShop}>
      <H2Title>Coffee Shop</H2Title>
      <p className={styles.coffeShop__descriptionUp}>
        In our library, we have of cozy coffee shop, welcoming in customers with
        frothy cappuccinos and friendly conversation. you can get a favorite
        book and read in coffee shop. Our barista to cook you best coffee, and
        also you can try desserts from bakery.
      </p>
      <div className={styles.coffeShop__priceFood}>
        <div className={styles.leftPrice}>
          <h3 className={styles.leftPrice__foodTitle}>Coffee &amp; Tea</h3>
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
              <p>Cappuccino</p>
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
          <h3 className={styles.rightPrice__foodTitle}>Desserts &amp; Cakes</h3>
          <ul className={styles.listFood}>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
              )}>
              <p>Forest Gateau</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
              )}>
              <p>Blue Moon</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
              )}>
              <p>Truffle Cake</p>
              <div></div>
              <p>&#36;15</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
              )}>
              <p>Chocolate Cake</p>
              <div></div>
              <p>&#36;18</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
              )}>
              <p>Poet’s Dream Cake</p>
              <div></div>
              <p>&#36;16</p>
            </li>
            <li
              className={classNames(
                styles.listFood__oneRight,
                styles.listFood__oneFood
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
