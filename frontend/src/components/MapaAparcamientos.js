import React, { useEffect } from 'react';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

var map, markers;

export default function MapaAparcamientos({mapId,pins,data,radius,source}) {

    var parkingIcon = new L.icon({
    iconUrl:
        "http://medifutur.com/wp-content/uploads/2015/08/parking-icono1.png",
    
    iconSize: [32, 32],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    });
    

    useEffect(() => {
        let center_lat = 36.7213028;
        let center_long = -4.4216366;
        let center_zoom = 13;
        // The <div id="map"> must be added to the dom before calling L.map('map')
        if(map===undefined){
          map = L.map(mapId, {
              center: [center_lat, center_long],
              zoom: center_zoom,
          });
          if(markers===undefined) markers = new L.LayerGroup().addTo(map)
      
              L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }).addTo(map);
        } else{
            markers.clearLayers();
            pins.map(pin=>{
                L.marker([pin[1],pin[0]],{icon: parkingIcon}).addTo(markers)
            })
          

        }

        if(radius > 0){
            var circle = L.circle([source[0], source[1]], {
            color: 'blue',
            fillColor: '#f03',
            fillOpacity: 0.2,
            radius: radius
            }).addTo(map);
          }
    }
);
    return (
                <center>
                <div class="right-sidebar-container">     
                    <div class="map" id={mapId}>
                    </div>
                </div>
                </center>
    );
} 