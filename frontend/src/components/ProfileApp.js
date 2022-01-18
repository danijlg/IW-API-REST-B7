import React, {useState,useEffect} from 'react';
import Login from './GoogleLogin';
import Logout from './GoogleLogout';
import "./ProfileApp.css";

export default function ProfileApp(props){

    const [usuarioByEmail, getUsuarioByEmail]=useState([]);

    function GetUsuarioByEmail(email){
        fetch('http://127.0.0.1:8000/crud/usuario/email/' + email + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioByEmail(response[0]))
        .then(error=>console.log(error))         
    }

    useEffect(() => {
        if(props.email !== ""){
            GetUsuarioByEmail(props.email);
        } 
        
      }, []);

    return(
        
        <div class="parent">
            <div class="tImg"> Imagen: </div>
            <div class="img"> <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png"></img> </div>
            <div class="log"> <Logout setEmail={props.setEmail}/> </div>
            <div class="email"> Email: {props.email} </div>
            <div class="nombre"> Nombre: {usuarioByEmail.name} </div> 
            <div class="apellidos"> Apellidos: {usuarioByEmail.surname} </div>
            <div class="direccion"> Dirección: {usuarioByEmail.address} </div>
        </div>
        
    );
}