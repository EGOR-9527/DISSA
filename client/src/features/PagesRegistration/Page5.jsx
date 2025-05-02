import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";
import { observer } from "mobx-react-lite";

const Page5 = observer(() => {
  const [gender, setGender] = useState(null);

  const choosingYourGender = (chosenGender) => {
    setGender(chosenGender);
    useCollectingInformation.setUserInfo({ gender: chosenGender });
  };

  return (
    <div className={registrationStyle.choosingGenderContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.choosingGender}>
        <h2 className={registrationStyle.choosingGendertitle}>
          Выбери свой
          <br />
          гендер
        </h2>

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
      </div>
    </div>
  );
});

export default Page5;
