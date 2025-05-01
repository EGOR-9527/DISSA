import React from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css"

const Page3 = () => {
  return (
    <div className={registrationStyle.nameFormContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.nameInputBlock}>
        <h1>Как тебя зовут?</h1>
        <input maxLength={10} type="text" placeholder="Введите текст..." />
      </div>
    </div>
  );
};

export default Page3;
