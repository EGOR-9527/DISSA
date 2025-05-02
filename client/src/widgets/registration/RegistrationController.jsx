import React, { useState, useEffect } from "react";
import PAGES from "../../features/PagesRegistration/index";
import registrationStyle from "../../css/registration.module.css";
import cross from "../../svg/cross.svg";
import arrow from "../../svg/arrow.svg";

import useAboutMe from "../../shared/model/StoreAboutMe";
import { observer } from "mobx-react-lite";

const RegistrationController = observer(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const pagesLength = Object.keys(PAGES).length;

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex < pagesLength - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={registrationStyle.mainContainer}>
      <div className={registrationStyle.window}>
        <div
          className={registrationStyle.allPagesContainer}
          style={{
            transform: `translateX(${-pageWidth * currentIndex}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          {Object.values(PAGES).map((PageComponent, index) => (
            <div key={index} className={registrationStyle.page}>
              <PageComponent />
            </div>
          ))}
        </div>
      </div>

      {currentIndex === 0 && (
        <div className={registrationStyle.blockButton}>
          <button
            className={registrationStyle.registrationButton}
            onClick={handleRightArrowClick}
          >
            Регистрация
          </button>
          <p className={registrationStyle.problemsLoggingIn}>
            Проблемы со входом?
          </p>
        </div>
      )}

      {currentIndex === 1 && (
        <button
          className={registrationStyle.enterButton}
          onClick={handleRightArrowClick}
        >
          Принять
        </button>
      )}

      {currentIndex > 1 &&
        currentIndex < pagesLength - 1 &&
        currentIndex !== 8 && (
          <button
            className={registrationStyle.enterButton}
            onClick={handleRightArrowClick}
          >
            Далее
          </button>
        )}

      {currentIndex > 1 && (
        <img
          className={registrationStyle.exitButton}
          onClick={handleLeftArrowClick}
          src={arrow}
          alt="Крестик"
        />
      )}

      {currentIndex === 8 && (
        <button
          className={
            useAboutMe.count === 4
              ? registrationStyle.nextButtonDisabled
              : registrationStyle.nextButton
          }
          onClick={handleRightArrowClick}
          disabled={useAboutMe.count !== 4}
        >
          Далее {useAboutMe.count}/4
        </button>
      )}

      {currentIndex === 1 && (
        <img
          className={registrationStyle.exitButton}
          onClick={handleLeftArrowClick}
          src={cross}
          alt="Крестик"
        />
      )}
    </div>
  );
});

export default RegistrationController;
