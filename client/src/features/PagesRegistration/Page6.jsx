import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

import hearts1 from "../../svg/hearts/hearts1.svg";
import hearts2 from "../../svg/hearts/hearts2.svg";
import hearts3 from "../../svg/hearts/hearts3.svg";
import hearts4 from "../../svg/hearts/hearts4.svg";
import hearts5 from "../../svg/hearts/hearts5.svg";
import hearts6 from "../../svg/hearts/hearts6.svg";
import hearts7 from "../../svg/hearts/hearts7.svg";
import hearts8 from "../../svg/hearts/hearts8.svg";
import hearts9 from "../../svg/hearts/hearts9.svg";

const Page6 = () => {
  const ponels = [
    {
      img: hearts1,
      text: (
        <p>
          Долгосрочный
          <br />
          партнёр
        </p>
      ),
    },
    {
      img: hearts2,
      text: (
        <p>
          Долго или <br />
          краткосрочно
        </p>
      ),
    },
    {
      img: hearts3,
      text: (
        <p>
          Просто
          <br /> повеселиться
        </p>
      ),
    },
    { img: hearts4, text: <p>Найти друзей</p> },
    {
      img: hearts5,
      text: (
        <p>
          Пока что не
          <br /> решил(а)
        </p>
      ),
    },
    {
      img: hearts6,
      text: (
        <p>
          Без <br />
          обязательств
        </p>
      ),
    },
    {
      img: hearts7,
      text: (
        <p>
          Совместные <br />
          хобби / игры
        </p>
      ),
    },
    {
      img: hearts8,
      text: (
        <p>
          Взаимная <br />
          поддержка
        </p>
      ),
    },
    {
      img: hearts9,
      text: (
        <p>
          Долгосрочное
          <br /> общение
        </p>
      ),
    },
  ];
  <p></p>;

  return (
    <div className={registrationStyle.choosingGenderContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>FOXIT</p>
      </div>

      <div className={registrationStyle.searchSelectionContainer}>
        <h2 className={registrationStyle.choosingGendertitle}>Что ты ищешь?</h2>
        <ul className={registrationStyle.searchSelectionPonels}>
          {ponels.map((pnl, index) => {
            return (
              <li className={registrationStyle.ponel} key={index}>
                <img src={pnl.img} alt="Сердце" />
                {pnl.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page6;
