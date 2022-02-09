import React, {useState, useEffect} from 'react'
import ReservaList from './ReservaList';
import { useParams } from "react-router-dom";

export default function TrayectoView(){
    const [trayecto, getTrayectoId]=useState([]);
    const [reservas, getReservasTrayecto]=useState([]);

    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

    let params = useParams();
    
    function getTrayecto(id){
        fetch(URL_BASE  + 'crud/trayecto/' + id + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getTrayectoId(response))
        .then(error=>console.log(error))
    }
    function getReservas(id){
        fetch(URL_BASE  + 'crud/reserva/' + id + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getReservasTrayecto(response))
        .then(error=>console.log(error))
    }
    useEffect(() => {
        getTrayecto(params.trayectoId);
        getReservas(params.trayectoId);
    }, [params.trayectoId]);
    

    return(
        <div>
            <h2>Trayecto</h2>
            <label>Conductor: {trayecto.driver} </label><br/>
            <label>Coche: {trayecto.car} </label><br/>
            <label>Origen: {trayecto.source} </label><br/>
            <label>Destino: {trayecto.destiny} </label><br/>
            <label>Fecha: {trayecto.date} </label><br/>
            <label>Hora de Salida: {trayecto.departure_time} </label><br/>
            <label>Duración Estimada: {trayecto.estimated_duration} </label><br/>
            <label>Plazas Libres: {trayecto.places_offered - reservas.length} </label><br/>
            <label>Precio: {trayecto.price} </label><br/>
            <h3>Reservas</h3>
            <ReservaList lista={reservas} />
        </div>
    );
}