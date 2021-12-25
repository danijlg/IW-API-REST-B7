import React, {useState} from 'react'

export default function AppActualizar() {
    const [usuarioById, getUsuarioById]=useState([]);
    const [comentarioById, getComentarioById]=useState([]);

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
    }
  
    return(
        <div>
            <h3>Actualizar Usuario por ID</h3>
            <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetUsuarioById(evt.target.value);}}></input>
            <br/>
    
            <label><br/>ID<br/></label> 
            <input type="number" value={usuarioById.id} id="idUser" disabled></input>
            <label><br/>Nombre<br/></label>
            <input type="text" value={usuarioById.name} id="nameUserPut"></input>
            <label><br/>Apellido<br/></label>
            <input type="text" value={usuarioById.surname} id="surnameUserPut"></input>
            <label><br/>Direccion<br/></label>
            <input type="text" value={usuarioById.address} id="addressUserPut"></input>
            <br/>
            <br/>
            <button type="submit" onClick={() => PutUsuario(document.getElementById("idUser").value)}> Actualizar Usuario </button>
    
            <h3>Actualizar Comentario por ID</h3>
            <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetComentarioById(evt.target.value);}}></input>
            <br/>
    
            <label><br/>ID<br/></label>
            <input type="number" value={comentarioById.id} id='idComment' disabled ></input>
            <label><br/>Autor<br/></label>
            <input type="number" value={comentarioById.author} id='authorCommentPut'></input>
            <label><br/>Comentario<br/></label>
            <input type="text" value={comentarioById.coment} id='commentCommentPut'></input>
            <label><br/>Fecha<br/></label>
            <input type="date" value={comentarioById.date}  id='dateCommentPut'></input>
            <br/>
            <br/>
            <button type="submit" onClick={() => PutComentario(document.getElementById("idComment").value)}>  Actualizar Comentario </button>
        </div>
    );
  
  }