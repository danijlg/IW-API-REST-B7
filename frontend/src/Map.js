import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

var map, markers;
var autor = '';

export default function Map({ markerSet }) {
    useEffect(() => {
        let center_lat = 36.709824;
        let center_long = -4.4490846;
        let center_zoom = 16;
        if(map==undefined){
        map = L.map('map', {
            center: [center_lat, center_long],
            zoom: center_zoom,
        });
        if(markers==undefined) markers = new L.LayerGroup().addTo(map)
    
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
            //if(!(marker_lat == undefined || marker_lon == undefined)){
                markerSet.map(trinosList=>{  
                    if(trinosList.autor != autor){
                        markers.clearLayers();
                    } 
                    L.marker([trinosList.lat,trinosList.lon]).addTo(markers)
                    .bindPopup("Id: " + trinosList.id + "<br>Post: " + trinosList.post); 
                    autor = trinosList.autor;
                })   
           //}
    }
        
);
    return (
                <center>
                <div class="right-sidebar-container">     
                    <div id="map">
                    </div>
                </div>
                </center>
    );
} 