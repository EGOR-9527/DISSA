import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

const Page8 = () => {
  return (
    <div className={registrationStyle.describeYourselfContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.describeYoursel}>
        <h2>
          Расскажи
          <br />
          что-нибудь о себе
        </h2>
        <textarea className={registrationStyle.textarea} maxLength={225} type="text" placeholder="Введите текст..." />
      </div>
    </div>
  );
};

export default Page8;
