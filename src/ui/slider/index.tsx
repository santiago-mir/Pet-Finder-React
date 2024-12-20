import React, { useState } from "react";
import * as css from "./index.css";

export function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className={css.container}>
      <div className={css.left} onClick={goToPrevious}>
        &lt;
      </div>
      <div className={css.right} onClick={goToNext}>
        &gt;
      </div>
      <div
        className={css.slide}
        style={{ backgroundImage: `url(${slides[currentIndex].img_URL})` }}
      ></div>
      <div className={css["dots-container"]}>
        {slides.map((slide, slideIndex) => (
          <div
            className={css.dot}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            &bull;
          </div>
        ))}
      </div>
    </div>
  );
}
