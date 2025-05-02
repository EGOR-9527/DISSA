import React, { useState, useEffect } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";
import { observer } from "mobx-react-lite";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from(
  { length: 60 },
  (_, i) => new Date().getFullYear() - i
);

const Page4 = observer(() => {
  const [day, setDay] = useState(30);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState(
    Array.from({ length: 30 }, (_, i) => i + 1)
  );
  const [openDays, setOpenDays] = useState(false);
  const [openMonths, setOpenMonths] = useState(false);
  const [openYears, setOpenYears] = useState(false);
  const [filteredYears, setFilteredYears] = useState([]);

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setFilteredYears(years.filter((y) => newYear - y >= 16));
  }, []);

  useEffect(() => {
    if (month && year) {
      const days = new Date(year, month, 0).getDate();
      const newDays = Array.from({ length: days }, (_, i) => i + 1);
      setDaysInMonth(newDays);
      if (day > days) setDay(null);
    }
  }, [month, year]);

  useEffect(() => {
    if (day && month && year) {
      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();
      const calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDifference = currentDate.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
      ) {
        useCollectingInformation.setUserInfo({ age: calculatedAge - 1 });
      } else {
        useCollectingInformation.setUserInfo({ age: calculatedAge });
      }
    }
  }, [day, month, year]);

  const handleDaySelect = (d) => {
    setDay(d);
    setSelectedDay(d);
    setOpenDays(false);
  };

  const handleMonthSelect = (m) => {
    setMonth(m);
    setOpenMonths(false);
  };

  const handleYearSelect = (y) => {
    setYear(y);
    setOpenYears(false);
  };

  return (
    <div className={registrationStyle.dateContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.containerDate}>
        <h2 className={registrationStyle.containerDatetitle}>
          Твоя дата
          <br />
          рождения
        </h2>

        <div
          onClick={() => setOpenDays((prev) => !prev)}
          className={registrationStyle.dateInut}
        >
          <p>{selectedDay || "ДД"}</p>
          <div className={registrationStyle.menu}>
            {openDays &&
              daysInMonth.map((d) => (
                <div
                  onClick={() => handleDaySelect(d)}
                  key={d}
                  className={registrationStyle.day}
                >
                  {d}
                </div>
              ))}
          </div>
        </div>

        <div
          onClick={() => setOpenMonths((prev) => !prev)}
          className={registrationStyle.dateInut}
        >
          <p>{month || "ММ"}</p>
          <div className={registrationStyle.menu}>
            {openMonths &&
              months.map((m) => (
                <div
                  onClick={() => handleMonthSelect(m)}
                  key={m}
                  className={registrationStyle.day}
                >
                  {m}
                </div>
              ))}
          </div>
        </div>

        <div
          onClick={() => setOpenYears((prev) => !prev)}
          className={registrationStyle.dateInut}
        >
          <p>{year || "ГГГГ"}</p>
          <div className={registrationStyle.menu}>
            {openYears &&
              filteredYears.map((y) => (
                <div
                  onClick={() => handleYearSelect(y)}
                  key={y}
                  className={registrationStyle.day}
                >
                  {y}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Page4;
