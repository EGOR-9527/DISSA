import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

const Page10 = () => {
  const mapRef = useRef(null);
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([55.7558, 37.6173], 10);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const initialCircle = L.circle([55.7558, 37.6173], {
      radius: radius * 1000,
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.2,
    }).addTo(map);

    circleRef.current = initialCircle;

    map.on("click", (e) => {
      const { lat, lng } = e.latlng;

      if (circleRef.current) {
        circleRef.current.setLatLng([lat, lng]);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(radius * 1000);
    }
  }, [radius]);

  return (
    <div className={registrationStyle.habitsContainer}>
      <div className={registrationStyle.logoHeader}>
        <img src={logo} alt="Логотип" />
        <p>DISSA</p>
      </div>

      <div className={registrationStyle.mapWithRadius}>
        <div ref={mapRef} className={registrationStyle.mapContainer}></div>
      </div>

      <div className={registrationStyle.radiusControl}>
        <label>Расстояние</label>
        <div className={registrationStyle.rangeLabels}>
          <span>1 км</span>
          <span>500 км</span>
        </div>
        <input
          type="range"
          min="1"
          max="500"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className={registrationStyle.rangeInput}
        />
        <span>{radius} км</span>
      </div>
    </div>
  );
};

export default Page10;
