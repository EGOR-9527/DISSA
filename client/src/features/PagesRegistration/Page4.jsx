import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

const Page4 = () => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState([]);

  // Функция для получения количества дней в месяце
  const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    setDaysInMonth(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  };

  const handleDaySelect = (day) => {
    setDay(day);
  };

  const handleMonthSelect = (month) => {
    setMonth(month);
    if (year) {
      getDaysInMonth(month, year);
    }
  };

  const handleYearSelect = (year) => {
    setYear(year);
    if (month) {
      getDaysInMonth(month, year);
    }
  };

  return (
    <div className={registrationStyle.nameDateContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.dateInputBlock}>
        <div className={registrationStyle.dateSelectorWrapper}>
          <h2 className={registrationStyle.title}>
            Твоя дата
            <br />
            рождения
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page4;
