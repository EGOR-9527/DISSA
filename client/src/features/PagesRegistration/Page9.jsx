import React from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

import cigarettes from "../../svg/hobit/cigarettes.svg";
import pets from "../../svg/hobit/pets.svg";
import run from "../../svg/hobit/run.svg";
import wine from "../../svg/hobit/wine.svg";

import useAboutMe from "../../shared/model/StoreAboutMe";
import { observer } from "mobx-react-lite";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";
import clsx from "clsx";

const categories = [
  {
    title: "Как часто ты пьёшь?",
    img: wine,
    options: [
      "Это не для меня",
      "Я не пью",
      "Я за трезвость",
      "По особым случаям",
      "В компании по выходным",
      "Почти каждый вечер",
      "Периодами",
    ],
  },
  {
    title: "Как часто ты куришь?",
    img: cigarettes,
    options: [
      "Курю за компанию",
      "Курю, когда выпью",
      "Не курю",
      "Курю",
      "Бросаю",
    ],
  },
  {
    title: "Ты занимаешься спортом?",
    img: run,
    options: ["Каждый день", "Часто", "Иногда", "Никогда"],
  },
  {
    title: "У тебя есть питомцы?",
    img: pets,
    options: ["Собака", "Кошка", "Рептилия", "Амфибия", "Отсутствуют"],
  },
];

const Page9 = observer(() => {
  const handleClick = (category, option) => {
    useCollectingInformation.setUserInfo({preferences: option})
    useAboutMe.toggleOption(category, option);
  };

  return (
    <div className={registrationStyle.habitsContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>FOXIT</p>
      </div>

      <header className={registrationStyle.pageHeader}>
        <h3>
          Расскажи о своих
          <br />
          привычках
        </h3>
        <p>
          Твои привычки похожи на привычки пары?
          <br />У тебя право первого слова.
        </p>
      </header>

      <ul className={registrationStyle.categoriesList}>
        {categories.map((habit, catIndex) => (
          <li key={catIndex}>
            <header className={registrationStyle.categoryHeader}>
              <img src={habit.img} alt="иконка" />
              {habit.title}
            </header>

            <div className={registrationStyle.categoryWrapper}>
              {habit.options.map((option, optIndex) => (
                <div
                  key={optIndex}
                  className={clsx(
                    registrationStyle.categoryOption,
                    useAboutMe.isSelected(habit.title, option) &&
                      registrationStyle.selectedOption
                  )}
                  onClick={() => handleClick(habit.title, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Page9;
