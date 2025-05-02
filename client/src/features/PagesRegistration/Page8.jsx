import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

import useCollectingInformation from "../../shared/model/StoreCollectingInformation";
import { observer } from "mobx-react-lite";

const Page8 = observer(() => {
  const [bio, setBio] = useState("");

  const handleBioChange = (e) => {
    const value = e.target.value;
    setBio(value);
    useCollectingInformation.setUserInfo({ bio: value });
  };

  return (
    <div className={registrationStyle.describeYourselfContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.describeYourself}>
        <h2>
          Расскажи
          <br />
          что-нибудь о себе
        </h2>
        <textarea
          value={bio}
          onChange={handleBioChange}
          className={registrationStyle.textarea}
          maxLength={225}
          minLength={3}
          placeholder="Введите текст..."
        />
      </div>
    </div>
  );
});

export default Page8;