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
        window.location.href = './listas'
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
        window.location.href = './listas'
    }
  
    return(
        <div>
            <br/>
            <br/>
            <h3>Actualizar Usuario por ID</h3><br/>
            <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetUsuarioById(evt.target.value);
                          }, 250);}}></input>
            <br/>
    
            <br/><br/>
            <label>ID</label><br/>
            <input type="number" value={usuarioById.id} id="idUser" disabled></input><br/><br/>
            <label>Nombre</label><br/>
            <input type="text" value={usuarioById.name} id="nameUserPut"></input><br/><br/>
            <label>Apellido</label><br/>
            <input type="text" value={usuarioById.surname} id="surnameUserPut"></input><br/><br/>
            <label>Direccion</label><br/>
            <input type="text" value={usuarioById.address} id="addressUserPut"></input><br/><br/>
            <br/>
            <br/>
            <button type="submit" onClick={() => PutUsuario(document.getElementById("idUser").value)}> Actualizar Usuario </button><br/><br/>
            <br/>
            <br/>
    
            <h3>Actualizar Comentario por ID</h3><br/>
            <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetComentarioById(evt.target.value);
                          }, 250);}}></input>
            <br/>
    
            <label><br/>ID<br/></label><br/>
            <input type="number" value={comentarioById.id} id='idComment' disabled ></input><br/><br/>
            <label>Autor</label><br/>
            <input type="number" value={comentarioById.author} id='authorCommentPut'></input><br/><br/>
            <label>Comentario</label><br/>
            <input type="text" value={comentarioById.coment} id='commentCommentPut'></input><br/><br/>
            <label>Fecha</label><br/>
            <input type="date" value={comentarioById.date}  id='dateCommentPut'></input><br/><br/>
            <br/>
            <br/>
            <button type="submit" onClick={() => PutComentario(document.getElementById("idComment").value)}>  Actualizar Comentario </button><br/><br/>
            <br/>
            <br/>
        </div>
    );
  
  }