import React from "react";
import registrationStyle from "../../css/registration.module.css";
import logo from "../../svg/logo.svg";
import start from "../../svg/start.svg";

const Page2 = () => {
  const rules = [
    {
      title: "Будьте собой.",
      description: (
        <p className={registrationStyle.ruleDescription}>
          Ваши фото, возраст и информация
          <br />о себе должны быть настоящими.
        </p>
      ),
    },
    {
      title: "Помните о безопасности.",
      description: (
        <p className={registrationStyle.ruleDescription}>
          Не торопитесь делиться своей личной <br />
          информацией.
          <br /> Безопасность превыше всего!
        </p>
      ),
    },
    {
      title: "Ведите себя достойно.",
      description: (
        <p className={registrationStyle.ruleDescription}>
          Уважайте других и относитесь к ним
          <br /> так, как вы бы хотели, <br />
          чтобы они относились к вам.
        </p>
      ),
    },
    {
      title: "Действуйте решительно.",
      description: (
        <p className={registrationStyle.ruleDescription}>
          Всегда сообщайте о неподобающем
          <br />
          поведении.
        </p>
      ),
    },
  ];

  return (
    <div className={registrationStyle.agreementPage}>
      <header className={registrationStyle.agreementHeader}>
        <img src={logo} alt="Логотип компании DISSA" />
        <p className={registrationStyle.agreementTitle}>
          Добро пожаловать в DISSA!
        </p>
      </header>

      <div className={registrationStyle.rulesWrapper}>
        <header className={registrationStyle.headerRulesWrapper}>
          Пожалуйста, соблюдайте следующие
          <br />
          правила:
        </header>
        <ul className={registrationStyle.rulesList}>
          {rules.map((rule, index) => (
            <li key={index} className={registrationStyle.ruleItem}>
              <img
                src={start}
                alt="Иконка"
                className={registrationStyle.ruleIcon}
              />
              <div className={registrationStyle.ruleText}>
                <h3 className={registrationStyle.ruleTitle}>{rule.title}</h3>
                {rule.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page2;
