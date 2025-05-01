import React, {useContext} from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

const Page1 = () => {
  return (
    <div className={registrationStyle.start}>
      <header className={registrationStyle.startHeader}>
        <img src={logo} alt="Логотип компании DISSA" />
        <p className={registrationStyle.naming}>DISSA</p>
      </header>

      <div className={registrationStyle.description}>
        <p>
          Нажимая “Создать аккаунт” или
          <br />
          “Войти”, ты соглашаешься с нашими
          <br /> <u>Условиями</u>. Чтобы узнать, как мы обрабатываем данные,
          ознакомься с<br />
          Политикой конфиденциальности и<br />
          <u>Политикой в отношении файлов cookie.</u>
        </p>
      </div>
    </div>
  );
};

export default Page1;
