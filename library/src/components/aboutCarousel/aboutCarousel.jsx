import classNames from "classnames";
import { useEffect, useState } from "react";
import Library from "../../../public/images/sliderLibrary.jpg";
import OutDoor from "../../../public/images/sliderLibraryOutDoor.jpg";
import Stairs from "../../../public/images/sliderStairsLibrary.jpg";
import Statue from "../../../public/images/sliderStatue.jpg";
import Woman from "../../../public/images/sliderWomanInLibrary.jpg";
import { H2Title } from "../common/h2Title/h2Title";
import styles from "./aboutCarousel.module.scss";
export const AboutCarousel = () => {
  const [checked, setChecked] = useState(1);
  const [carousel, setCarousel] = useState(false);
  function changeCheckBox(e) {
    setChecked(Number(e.target.value));
  }
  const [width, setWidth] = useState(window.screen.width);
  let arr = [Woman, Statue, Library, Stairs, OutDoor];
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.screen.width);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    if (width < 1024) {
      setCarousel(true);
    }
    if (width > 1024) {
      setCarousel(false);
    }
  }, [width]);
  console.log(carousel);
  return (
    <section className={styles.aboutCarousel}>
      <H2Title>About</H2Title>
      <p className={styles.aboutCarousel__aboutLibrary}>
        The Brooklyn Library is a free workspace, a large number of books and a
        cozy coffee shop inside
      </p>
      <div className={styles.aboutCarousel__carouselSlider}>
        <div className={styles.slide}>
          {arr
            .slice(checked - 1, carousel ? checked + 0 : checked + 2)
            .map((item, id) => {
              return <img src={item} key={id} />;
            })}
        </div>
        <div className={styles.pagination}>
          <input
            type="radio"
            id="first"
            name="pagination"
            checked={checked === 1 ? true : false}
            onChange={changeCheckBox}
            value={1}
          />
          <label htmlFor="first" />
          <input
            type="radio"
            id="second"
            name="pagination"
            checked={checked === 2 ? true : false}
            onChange={changeCheckBox}
            value={2}
          />
          <label htmlFor="second" />
          <input
            type="radio"
            id="third"
            name="pagination"
            checked={checked === 3 ? true : false}
            onChange={changeCheckBox}
            value={3}
          />
          <label htmlFor="third" />
          <div
            className={classNames(
              carousel ? styles.tabletTrue : styles.tabletFalse
            )}>
            <input
              type="radio"
              id="four"
              name="pagination"
              checked={checked === 4 ? true : false}
              onChange={changeCheckBox}
              value={4}
            />
            <label htmlFor="four" />
            <input
              type="radio"
              id="fives"
              name="pagination"
              checked={checked === 5 ? true : false}
              onChange={changeCheckBox}
              value={5}
            />
            <label htmlFor="fives" />
          </div>
        </div>
      </div>
    </section>
  );
};
