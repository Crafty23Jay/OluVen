// MapComponent.jsx
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: -34.397,
  lng: 150.644
};

export default function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY" // Replace with your Google Maps API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      options={{ scrollwheel: false, mapTypeId: "roadmap" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}