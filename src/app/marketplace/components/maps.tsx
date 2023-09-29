"use client";

import { useState, ChangeEvent } from "react";
import React from "react";
import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";

import houseData from "@/data/maps.json";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Maps(props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADVTAf8CN8NaIig9BD1V0Je8bwy9klSNQ",
  });

  const [map, setMap] = useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds({
  //       lat: -6.914744,
  //       lng: 107.60981,
  //     });
  //     map.fitBounds(bounds);

  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  const [deskripsiPribadi, setDeskripsiPribadi] = useState("");
  const [deskripsiBisnis, setDeskripsiBisnis] = useState("");

  const handleChange = (bisnis, pribadi, harga, nama_agen, nomor_agen) => {
    props.onClick(bisnis, pribadi, harga, nama_agen, nomor_agen);
  };

  return (
    <div>
      {isLoaded ? (
        <div className="w-[full] h-auto aspect-[312/187] lg:aspect-[1436/866] relative rounded-[5px] lg:rounded-[15px] z-10 overflow-hidden">
          <GoogleMap
            zoom={12}
            center={{ lat: -6.914744, lng: 107.60981 }}
            mapContainerStyle={containerStyle}
          >
            {props.currentMap.map((data, index) => (
              <Marker
                key={index}
                position={{ lat: data.lat_position, lng: data.long_position }}
                onClick={() =>
                  handleChange(
                    data.deskripsi_bisnis,
                    data.deskripsi_pribadi,
                    data.harga_dasar,
                    data.name_agen,
                    data.nomor_agen
                  )
                }
              />
            ))}
            {/* <Marker position={{ lat: -6.914744, lng: 107.60981 }}></Marker> */}
          </GoogleMap>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
