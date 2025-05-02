import React, { useEffect, useState } from "react";
import registrationStyle from "../css/registration.module.css";
import StoreCollectingInformation from "../shared/model/StoreCollectingInformation";
import { observer } from "mobx-react-lite";

import RegistrationController from "../widgets/registration/RegistrationController";

const Registration = observer(() => {
  const [isTelegram, setIsTelegram] = useState(true);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();

      const user = tg.initDataUnsafe?.user;
      if (user) {
        StoreCollectingInformation.setUserInfo({
          tg_id: user.id,
          init_data: tg.initData || "",
        });
      }

      // Получение геолокации
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            StoreCollectingInformation.setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.warn("Ошибка получения геолокации:", error.message);
          }
        );
      }

      setIsTelegram(true);
    } else {
      setIsTelegram(false);
    }
  }, []);

  if (!isTelegram) {
    return (
      <div className={registrationStyle.registration}>
        <h2>🔒 Доступ только через Telegram</h2>
        <p>Пожалуйста, открой ссылку в Telegram, а не в браузере.</p>
      </div>
    );
  }

  return (
    <div className={registrationStyle.registration}>
      <RegistrationController />
    </div>
  );
});

export default Registration;
