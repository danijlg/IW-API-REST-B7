import React, { useState } from "react";
import TrayectosList from "./components/TrayectosList";

export default function FiltroTrayecto()  {

    const [trayectos, getFilteredTrayectos]=useState([]);

    //const URL_BASE = 'https://franbono2django.herokuapp.com/'
    const URL_BASE = 'http://127.0.0.1:8000/'

    function FiltrarTrayecto(origen, destino, fecha){
            fetch(URL_BASE + 'crud/trayecto/' + origen + '/' + destino + '/' + fecha + '/',
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
            <button type="submit" onClick={
                () => FiltrarTrayecto(
                    document.getElementById("origen").value,
                    document.getElementById("destino").value,
                    document.getElementById("fecha").value
                )
            }> Buscar </button>
            <br></br>
            <TrayectosList lista={trayectos}/>
        </div>
    );

}