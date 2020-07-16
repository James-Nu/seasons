import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  };

  useEffect(() => {
    getPosition();
  }, []);

  return [lat, errorMessage];
};

export default useGeolocation;
