import React, { useState, useEffect } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from(
  { length: 60 },
  (_, i) => new Date().getFullYear() - i
);

const Page4 = () => {
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

  const [filteredYears, serFilteredYears] = useState([]);

  useEffect(() => {
    const newYear = new Date().getFullYear();
    serFilteredYears(years.filter((y) => newYear - y >= 16));
  }, []);

  useEffect(() => {
    if (month && year) {
      const days = new Date(year, month, 0).getDate();
      const newDays = Array.from({ length: days }, (_, i) => i + 1);
      setDaysInMonth(newDays);
      if (day > days) setDay(null);
    }
  }, [month, year]);

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
    <div className={registrationStyle.nameDateContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.containerDate}>
        <h2 className={registrationStyle.title}>
          Твоя дата
          <br />
          рождения
        </h2>

        {/* День */}
        <div className={registrationStyle.dateInut}>
          <p onClick={() => setOpenDays((prev) => !prev)}>
            {selectedDay || "ДД"}
          </p>
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

        {/* Месяц */}
        <div className={registrationStyle.dateInut}>
          <p onClick={() => setOpenMonths((prev) => !prev)}>{month || "ММ"}</p>
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

        {/* Год */}
        <div className={registrationStyle.dateInut}>
          <p onClick={() => setOpenYears((prev) => !prev)}>{year || "ГГГГ"}</p>
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
};

export default Page4;
