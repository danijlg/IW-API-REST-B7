import axios from "axios";
import React, {useState, useEffect} from 'react'
import './App.css';
import ComentarioListComponent from './components/ComentarioListComponent';
import UsuarioListComponent from './components/UsuarioListComponent';
import AppMap from './components/MapsApp';
import NavBar from "./Navbar";

function Api_Django(){
    // GET

    function PutUsuario(id){
        var name = document.getElementById("nameUserPut").value;
        var surname = document.getElementById("surnameUserPut").value;
        var address = document.getElementById("addressUserPut").value;
        if(name === "" || surname === "" || address === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, surname: surname, address: address })
        };
        fetch('http://127.0.0.1:8000/crud/usuario/'+ id  + '/', requestOptions)
            .then(response => response.json())
            .then(error=>console.log(error))
        alert("Usuario actualizado correctamente")
        //GetUsuarioList()
    }

    function PutComentario(id){
        var author = document.getElementById("authorCommentPut").value;
        var comment = document.getElementById("commentCommentPut").value;
        var date = document.getElementById("dateCommentPut").value;
        if(author === "" || comment === "" || date === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author, coment: comment, date: date })
        };
        fetch('http://127.0.0.1:8000/crud/comentario/' + id + '/', requestOptions)
            .then(response => response.json())
            .then(error=>console.log(error))
        alert("Comentario actualizado correctamente")
        //GetCommentsList()
    }

    // POST

    return(
        <html>
            <head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""></script>
            </head>

            <body>
            <NavBar />
            </body>
        </html>
    );
}
export default Api_Django   ;