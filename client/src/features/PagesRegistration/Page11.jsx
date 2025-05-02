import React, { useState, useEffect } from "react";
import registrationStyle from "../../css/registration.module.css";
import logo from "../../svg/logo.svg";
import photoStore from "../../shared/model/StorePhoto";

const Page11 = () => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhotos((prev) => [...prev, URL.createObjectURL(file)]);
    }
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    photoStore.setCount(photos.length);
  }, [photos]);

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
                <img src={photos[index]} alt={`Фото ${index + 1}`} />
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
};

export default Page11;
