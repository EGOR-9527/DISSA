import React, { useState, useEffect, useCallback } from "react";
import registrationStyle from "../../css/registration.module.css";
import PAGES from "../../features/PagesRegistration";

const RegistrationController = () => {
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);

  const pagesLength = Object.keys(PAGES).length;

  useEffect(() => {
    const initialWidth = window.innerWidth;
    setPageWidth(initialWidth);
    setOffset(-(initialWidth * currentIndex));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setPageWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOffset(-(pageWidth * currentIndex)); 
  }, [pageWidth, currentIndex]);

  const handleLeftArrowClick = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleRightArrowClick = useCallback(() => {
    if (currentIndex < pagesLength - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, pagesLength]);

  return (
    <div className={registrationStyle.containerRegistrationController}>
      <div className={registrationStyle.window}>
        <div
          className={registrationStyle.allPagesContainer}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {Object.entries(PAGES).map(([key, PageComponent]) => (
            <div key={key} className={registrationStyle.pageWrapper}>
              <PageComponent />
            </div>
          ))}
        </div>

        <div className={registrationStyle.containerButton}>
          {currentIndex > 0 && (
            <button
              className={registrationStyle.exitButton}
              onClick={handleLeftArrowClick}
            >
              Назад
            </button>
          )}

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

          {currentIndex > 2 && currentIndex < pagesLength - 1 && (
            <button
              className={registrationStyle.enterButton}
              onClick={handleRightArrowClick}
            >
              Далее
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationController;
