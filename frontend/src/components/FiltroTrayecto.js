import React, { useState } from "react";
import TrayectosList from "./TrayectosList";

export default function FiltroTrayecto()  {

    const [trayectos, getFilteredTrayectos]=useState([]);

    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'    
    //const URL_BASE = 'http://127.0.0.1:8000/'

    function FiltrarTrayecto(origen, destino, fecha, plazas){
            fetch(URL_BASE + 'crud/trayecto/' + origen + '/' + destino + '/' + fecha + '/' + plazas + '/',
            {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response=>response.json())
            .then(response=>getFilteredTrayectos(response))
            .then(error=>console.log(error))
    }


    return(
        <div>
            <h3>Buscador de trayectos</h3>
            <input type="text" placeholder="Origen" id="origen"></input>
            <input type="text" placeholder="Destino" id="destino"></input>
            <input type="date" id="fecha"></input>
            <input type="number" step="1" placeholder="Plazas" id="plazas"></input>
            <button type="submit" onClick={
                () => FiltrarTrayecto(
                    document.getElementById("origen").value.trim(),
                    document.getElementById("destino").value.trim(),
                    document.getElementById("fecha").value.trim(),
                    document.getElementById("plazas").value.trim()
                )
            }> Buscar </button>
            <br></br>
            <TrayectosList lista={trayectos}/>
        </div>
    );

}