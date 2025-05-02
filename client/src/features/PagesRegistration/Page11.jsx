import React from "react";
import { observer } from "mobx-react-lite";
import registrationStyle from "../../css/registration.module.css";
import logo from "../../svg/logo.svg";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";

const Page11 = observer(() => {
  const photos = useCollectingInformation.userPhotos;

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      useCollectingInformation.addPhoto(file);
    }
  };

  const removePhoto = (index) => {
    useCollectingInformation.removePhoto(index);
  };

  return (
    <div className={registrationStyle.habitsContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>FOXIT</p>
      </div>

      <header className={registrationStyle.headerHabitsContainer}>
        <h3>Добавь свои фото</h3>
        <p>Загрузи лучшие фото, чтобы выделиться!</p>
      </header>

      <div className={registrationStyle.photoGrid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={registrationStyle.photoSlot}>
            {photos[index] ? (
              <div className={registrationStyle.photoPreview}>
                <img
                  src={URL.createObjectURL(photos[index])}
                  alt={`Фото ${index + 1}`}
                />
                <button
                  className={registrationStyle.removeBtn}
                  onClick={() => removePhoto(index)}
                >
                  ✖️
                </button>
              </div>
            ) : (
              <label className={registrationStyle.uploadLabel}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  style={{ display: "none" }}
                />
                <span className={registrationStyle.uploadPlaceholder}>+</span>
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Page11;
