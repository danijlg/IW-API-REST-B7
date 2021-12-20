import React, {useState, useEffect, useMemo} from 'react'
import './App.css';
import ComentarioListComponent from './components/ComentarioListComponent';
import UsuarioListComponent from './components/UsuarioListComponent';
import AppMap from './components/MapsApp';


// Importante poner en los requirements pip install django-cors-headers
function Api_Django(){
    // GET
    const [UsuarioList,getUsuarioList]=useState([]);
    const [CommentsList, getCommentsList]=useState([]);
    const [usuarioById, getUsuarioById]=useState([]);
    const [comentarioById, getComentarioById]=useState([]);
    const [usuarioByName, getUsuarioByName]=useState([]);
    const [usuarioComments, getUsuarioComments]=useState([]);
    const [comentarioByDate, getComentarioByDate]=useState([]);

    function GetUsuarioList(){
        fetch('http://127.0.0.1:8000/crud/usuario/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioList(response))
        .then(error=>console.log(error))
    }

    function GetCommentsList(){
        fetch('http://127.0.0.1:8000/crud/comentario/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getCommentsList(response))
        .then(error=>console.log(error))
    }

    function GetUsuarioById(id){
        fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioById(response))
        .then(error=>console.log(error))
    }

    function GetComentarioById(id){
        fetch('http://127.0.0.1:8000/crud/comentario/' + id + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getComentarioById(response))
        .then(error=>console.log(error))
    }

    

    function GetUsuarioByName(name){
        fetch('http://127.0.0.1:8000/crud/usuario/' + name + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioByName(response))
        .then(error=>console.log(error))
    }

    function GetUsuarioByName(name){
        fetch('http://127.0.0.1:8000/crud/usuario/' + name + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioByName(response))
        .then(error=>console.log(error))
    }

    function GetUsuarioByName(name){
        fetch('http://127.0.0.1:8000/crud/usuario/' + name + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioByName(response))
        .then(error=>console.log(error))
    }

    function GetUsuarioComments(id){
        fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/comentario/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuarioComments(response))
        .then(error=>console.log(error))
    }

    function GetComentarioByDate(date){
        fetch('http://127.0.0.1:8000/crud/comentario/' + date + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getComentarioByDate(response))
        .then(error=>console.log(error))
    }

    // POST
    function PostUsuario(){
        var name = document.getElementById("nameUser").value;
        var surname = document.getElementById("surnameUser").value;
        var address = document.getElementById("addressUser").value;
        if(name == "" || surname == "" || address == "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, surname: surname, address: address })
        };
        fetch('http://127.0.0.1:8000/crud/usuario/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Usuario añadido correctamente")
    }

    function PostComentario(){
        var author = document.getElementById("authorComment").value;
        var comment = document.getElementById("commentComment").value;
        var date = document.getElementById("dateComment").value;
        if(author == "" || comment == "" || date == "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author, coment: comment, date: date })
        };
        fetch('http://127.0.0.1:8000/crud/comentario/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Comentario añadido correctamente")
    }

    useEffect(()=>{
        GetUsuarioList();
        GetCommentsList();
        const interval = setInterval(() => {
            GetUsuarioList();
            GetCommentsList();
          }, 10000);
          return () => clearInterval(interval);
    }, [])
    return(
        <html>
            <head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""></script>
            </head>

            <body>
                <div class="linea">
                        <h1><b><u>Cliente: Examen Ingenieria Web</u></b></h1>
                        <hr></hr>
                        <h2><u>Lista completa</u></h2>
                        <h3>Lista de Usuarios</h3>
                            <UsuarioListComponent lista={UsuarioList} single={false}/>
                        
                            <h3>Lista de Comentarios</h3>
                            <ComentarioListComponent lista={CommentsList} single={false}/>

                        <hr/>
                        <h2><u>Búsquedas parametrizadas</u></h2>
                        <h3>Buscar Usuario por ID</h3>
                        <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetUsuarioById(evt.target.value);}}></input>
                        <br></br>
                            <UsuarioListComponent lista={usuarioById} single={true}/>

                        <h3>Buscar Usuario por nombre</h3>
                        <input type="text" placeholder="Escriba un nombre de usuario" onChange={(evt) => {GetUsuarioByName(evt.target.value);}}></input>
                        <br></br>
                            <UsuarioListComponent lista={usuarioByName} single={false}/>
                        
                        <br></br>
                        <h3>Buscar Comentario por ID</h3>
                        <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetComentarioById(evt.target.value);}}></input>
                        <br/>
                            <ComentarioListComponent lista={comentarioById} single={true}/>

                        <h3>Buscar Comentarios por autor</h3>
                        <input type="number" placeholder="Escriba una id de autor válida" onChange={(evt) => {GetUsuarioComments(evt.target.value);}}></input>
                        <br/>
                            <ComentarioListComponent lista={usuarioComments} single={false}/>

                        <h3>Buscar Comentarios por Fecha</h3>
                        <input type="date" onChange={(evt) => {GetComentarioByDate(evt.target.value);}}></input>
                        <br/>
                            <ComentarioListComponent lista={comentarioByDate} single={false}/>

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
            </body>
        </html>
    );
}
export default Api_Django    ;