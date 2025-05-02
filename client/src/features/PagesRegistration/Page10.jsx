import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../../svg/logo.svg";
import registrationStyle from "../../css/registration.module.css";

import { observer } from "mobx-react-lite";
import useCollectingInformation from "../../shared/model/StoreCollectingInformation";

const Page10 = observer(() => {
  const mapRef = useRef(null);
  const circleRef = useRef(null);
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const { latitude, longitude } = useCollectingInformation.userLocation;
    const defaultLatLng = [55.7558, 37.6173];
    const startLatLng =
      latitude && longitude ? [latitude, longitude] : defaultLatLng;

    const map = L.map(mapRef.current).setView(startLatLng, 10);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const initialCircle = L.circle(startLatLng, {
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
      useCollectingInformation.setLocation({ latitude: lat, longitude: lng });
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
          onChange={(e) => setRadius(Number(e.target.value))}
          className={registrationStyle.rangeInput}
        />
        <span>{radius} км</span>
      </div>
    </div>
  );
});

export default Page10;
