import React, { useState } from "react";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";
import { observer } from "mobx-react-lite";

const Page3 = observer(() => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    useCollectingInformation.setUserInfo({ name: newName });
  };

  return (
    <div className={registrationStyle.nameFormContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.nameInputBlock}>
        <h1>Как тебя зовут?</h1>
        <input
          value={name}
          onChange={handleNameChange}
          maxLength={10}
          type="text"
          placeholder="Введите текст..."
        />
      </div>
    </div>
  );
});

export default Page3;
