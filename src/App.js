import React, { useState, useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useGeolocation from "./useGeolocation";

const App = () => {
  const [lat, errorMessage] = useGeolocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="please accept location request" />;
  }

  return <div className="border red "> {content}</div>;
};

export default App;
