import React, {useState, useEffect} from 'react'
import ReservaList from './ReservaList';
import { useParams } from "react-router-dom";
import Paypal from './PayPal';
import './TrayectoView.css';

export default function TrayectoView(){
    const [trayecto, getTrayectoId]=useState([]);
    const [reservas, getReservasTrayecto]=useState([]);
    const [checkOut, setCheckOut] = useState(false);

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

    function mostrarReservas(){
        document.getElementById("reserva").style.visibility = 'visible';
    }

    useEffect(() => {
        getTrayecto(params.trayectoId);
        getReservas(params.trayectoId);
    }, [params.trayectoId]);


    return(
        <div>
            <br/><h2>Trayecto</h2><br/>
            <label>Conductor: {trayecto.driver} </label><br/>
            <label>Coche: {trayecto.car} </label><br/>
            <label>Origen: {trayecto.source} </label><br/>
            <label>Destino: {trayecto.destiny} </label><br/>
            <label>Fecha: {trayecto.date} </label><br/>
            <label>Hora de Salida: {trayecto.departure_time} </label><br/>
            <label>Duración Estimada: {trayecto.estimated_duration} </label><br/>
            <label>Plazas Libres: {trayecto.places_offered - reservas.length} </label><br/>
            <label>Precio: {trayecto.price} </label><br/><br/>

            {checkOut ? (
                    <Paypal trayecto={trayecto}/>
                ) : (
                    <button
                        onClick={() => {
                            setCheckOut(true);
                            mostrarReservas();
                        }}> Reservas / Reservar 
                </button> )}

            <div id="reserva">
                <h3 >Reservas</h3>
                <ReservaList lista={reservas} /><br/><br/>
            </div>
            
            
        </div>
    );
}