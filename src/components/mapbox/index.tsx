import { useRef, useEffect } from "react";
import { SearchBox as SearchBoxComp } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import * as React from "react";

const accessToken =
  "pk.eyJ1IjoibWFyY29zcmV1cXVlbiIsImEiOiJja3UxbXBzbHQzejJvMnBwcW4yN3pqemZuIn0.z65srWhOb5sS3GilPljOpw";
const SearchBox: any = SearchBoxComp;

function Mapbox({ onLocationUpdated }) {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null); // Referencia para el marcador

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      center: [-58.5626883, -34.4418013], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    mapInstanceRef.current = map;

    return () => map.remove(); // Limpiar el mapa al desmontar el componente
  }, []);

  const handleSearch = (result) => {
    if (result && result.features && result.features[0]) {
      const [lng, lat] = result.features[0].geometry.coordinates;
      onLocationUpdated({ lng, lat });
      // Centrar el mapa en la ubicación seleccionada
      mapInstanceRef.current.flyTo({ center: [lng, lat], zoom: 14 });

      // Crear o actualizar el marcador
      if (!markerRef.current) {
        markerRef.current = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(mapInstanceRef.current);
      } else {
        markerRef.current.setLngLat([lng, lat]);
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Contenedor del mapa */}
      <div id="map-container" ref={mapContainerRef} style={{ height: 300 }} />

      {/* Contenedor del buscador */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "4px",
          maxWidth: "200px",
        }}
      >
        <SearchBox
          accessToken={accessToken}
          onRetrieve={handleSearch}
          options={{ country: ["AR"] }} // Limitar búsquedas a Argentina
        />
      </div>
    </div>
  );
}

export { Mapbox };
