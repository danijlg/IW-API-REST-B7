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
    function PostUsuario(){
        var name = document.getElementById("nameUser").value;
        var surname = document.getElementById("surnameUser").value;
        var address = document.getElementById("addressUser").value;
        if(name === "" || surname === "" || address === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, surname: surname, address: address })
        };
        fetch('http://127.0.0.1:8000/crud/usuario/', requestOptions)
        alert("Usuario añadido correctamente")
        //GetUsuarioList();
    }

    function PostComentario(){
        var author = document.getElementById("authorComment").value;
        var comment = document.getElementById("commentComment").value;
        var date = document.getElementById("dateComment").value;
        if(author === "" || comment === "" || date === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author, coment: comment, date: date })
        };
        fetch('http://127.0.0.1:8000/crud/comentario/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Comentario añadido correctamente")
        //GetCommentsList();
    }

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
                <div className="linea">
                        <hr></hr>
                        

                        <hr/>

                        <h2>Mapas</h2>
                            <AppMap></AppMap>
                            
                        <hr></hr>
                        <h2>Posts</h2>
                        <h3>Insertar Usuario</h3>
                        <label><br/>Nombre<br/></label>
                        <input type="text" placeholder='Inserte un nombre' id='nameUser'></input>
                        <label><br/>Apellido<br/></label>
                        <input type="text" placeholder='Inserte un apellido' id='surnameUser'></input>
                        <label><br/>Direccion<br/></label>
                        <input type="text" placeholder='Inserte una dirección' id='addressUser'></input>
                        <br/>
                        <br/>
                        <button onClick={PostUsuario}>
                            Insertar Usuario
                        </button>

                        <h3>Insertar Comentario</h3>
                        <label><br/>Autor<br/></label>
                        <input type="number" placeholder='Inserte una id de usuario' id='authorComment'></input>
                        <label><br/>Comentario<br/></label>
                        <input type="text" placeholder='Inserte un comentario' id='commentComment'></input>
                        <label><br/>Fecha<br/></label>
                        <input type="date" id='dateComment'></input>
                        <br/>
                        <br/>
                        <button onClick={PostComentario}>
                            Insertar Comentario
                        </button>

                        
                </div>
                <div>
                    <h2>Subida de Imágenes</h2>
                    
                </div>
            </body>
        </html>
    );
}
export default Api_Django   ;