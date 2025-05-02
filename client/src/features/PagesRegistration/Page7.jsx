import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

import { observer } from "mobx-react-lite";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";

const Page7 = () => {
  const [gender, setGender] = useState(null);

  const choosingYourGender = (chosenGender) => {
    useCollectingInformation.setUserInfo({ gender: chosenGender });
    setGender(chosenGender);
  };

  return (
    <div className={registrationStyle.choosingGenderContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.choosingGender}>
        <h2 className={registrationStyle.choosingGendertitle}>
          Кого ты ищешь?
        </h2>

        <p className={registrationStyle.descriptionOfTheDelection}>
          Выбери подходящий вариант,
          <br /> чтобы мы рекомендовали твой
          <br /> профиль нужным пользователям
        </p>

        <div
          onClick={() => choosingYourGender("boy")}
          className={registrationStyle.inputGender}
        >
          <p>Мужчина</p>
          <div className={registrationStyle.circle}>
            <div
              className={
                gender === "boy"
                  ? registrationStyle.activeBoy
                  : registrationStyle.noneActiveBoy
              }
            ></div>
          </div>
        </div>

        <div
          onClick={() => choosingYourGender("girl")}
          className={registrationStyle.inputGender}
        >
          <p>Женщина</p>
          <div className={registrationStyle.circle}>
            <div
              className={
                gender === "girl"
                  ? registrationStyle.activeGirl
                  : registrationStyle.noneActiveGirl
              }
            ></div>
          </div>
        </div>

        <div
          onClick={() => choosingYourGender("all")}
          className={registrationStyle.inputGender}
        >
          <p>Всех</p>
          <div className={registrationStyle.circle}>
            <div
              className={
                gender === "all"
                  ? registrationStyle.activeAll
                  : registrationStyle.noneActiveAll
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Page7);
