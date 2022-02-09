import React, {useState,useEffect} from 'react';
import Logout from './GoogleLogout';
import "./ProfileApp.css";

export default function ProfileApp(props){

    const [user, setUser]=useState([]);

    function DeleteUsuario(id){
        fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/',
        {
            method:'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        })
        alert("Usuario borrado con exito")
        window.location.href = './'
    }

    useEffect(() => {
        if(props.profile.email !== ""){
            setUser(props.user)
        } 
        
      }, []);

    return(
        
        <div class="parent">
            <div class="tImg"> Imagen: </div>
            <div class="img"> <img src={props.profile.imageUrl}></img> </div>
            <div class="log"> <Logout setProfile={props.setProfile} setUser={props.setUser}/> </div>
            <div class="email"> Email: {user.email} </div>
            <div class="nombre"> Nombre: {user.name} </div> 
            <div class="apellidos"> Apellidos: {user.surname} </div>
            <div class="direccion"> Dirección: {user.address} </div>

            <button class="delete" type="submit" onClick={() => DeleteUsuario(user.id)}> Borrar Usuario </button>
        </div>
        
    );
}