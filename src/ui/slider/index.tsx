import React, { useState } from "react";
import { MainText, SecondaryText } from "../texts";
import * as css from "./index.css";
import { MainButton } from "../buttons";

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

  const currentSlide = slides[currentIndex];

  return (
    <div className={css.container}>
      <div className={css.left} onClick={goToPrevious}>
        &lt;
      </div>
      <div className={css.right} onClick={goToNext}>
        &gt;
      </div>
      <MainText className={css.title}>{currentSlide.name}</MainText>
      <h3 className={css.subtitle}>{currentSlide.city}</h3>
      <div
        className={css.slide}
        style={{ backgroundImage: `url(${currentSlide.img_URL})` }}
      >
        <div className={css.editButton}>
          <MainButton
            type={"button"}
            handleClick={() => {
              console.log("hola");
            }}
          >
            Editar Reporte
          </MainButton>
        </div>
      </div>
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
