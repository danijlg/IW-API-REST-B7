import React, {useState,useEffect} from "react";

export default function CreateUser(props){
    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

    function PostUser(){
        var address = document.getElementById("addressNewUser").value;
        if(address === "") alert("Rellena todos los campos");
        //alert(props.profile)
        console.log("Name: " + props.profile.givenName + ", surname: "+ (props.profile.familyName ? props.profile.familyName : "") + ", email: "+props.profile.email + ", address: "+address);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: props.profile.givenName, surname: (props.profile.familyName ? props.profile.familyName : "-"), address: address, email: props.profile.email })
        };
        fetch(URL_BASE + 'crud/usuario/', requestOptions);
        alert("Usuario creado con cuenta Google");
        console.log(requestOptions.body)
        
        setTimeout( () => {
            GetUserByEmail(props.profile.email);
            window.location.href = './'
        }, 100)
        
    }

    function GetUserByEmail(email){
        fetch(URL_BASE + 'crud/usuario/email/' + email + '/')
        .then((data) => data.json())
        .then((data)=>{props.setUser(data[0])})        
    }

    return(
        <div>
            <label><br/>Direccion<br/></label><br/>
            <input type="text" placeholder='Inserte una dirección' id='addressNewUser'></input><br/><br/>
            <button onClick={PostUser}>
                            Crear Usuario
            </button><br/><br/><br/><br/>
        </div>
        
    );

}