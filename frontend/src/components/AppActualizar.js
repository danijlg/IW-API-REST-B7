import React, {useState} from 'react'

export default function AppActualizar() {
    const [usuarioById, getUsuarioById]=useState([]);
    const [comentarioById, getComentarioById]=useState([]);

    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

    function GetUsuarioById(id){
        fetch(URL_BASE  + 'crud/usuario/' + id + '/',
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
        fetch(URL_BASE  + 'crud/comentario/' + id + '/',
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
        if(name === "" || surname === "" || address === ""){
            alert("Rellena todos los campos");
        } else {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, surname: surname, address: address })
            };
            fetch(URL_BASE  + 'crud/usuario/'+ id  + '/', requestOptions)
                .then(response => response.json())
                .then(error=>console.log(error))
            alert("Usuario actualizado correctamente")
            window.location.href = '/listas'
        }
    }

    function PutComentario(id){
        var author = document.getElementById("authorCommentPut").value;
        var comment = document.getElementById("commentCommentPut").value;
        var date = document.getElementById("dateCommentPut").value;
        if(author === "" || comment === "" || date === ""){
            alert("Rellena todos los campos");
        } else {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author: author, coment: comment, date: date })
            };
            fetch(URL_BASE  + 'crud/comentario/' + id + '/', requestOptions)
                .then(response => response.json())
                .then(error=>console.log(error))
            alert("Comentario actualizado correctamente")
            window.location.href = '/listas'
        }
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
            <input type="text" placeholder={usuarioById.name} id="nameUserPut"></input><br/><br/>
            <label>Apellido</label><br/>
            <input type="text" placeholder={usuarioById.surname} id="surnameUserPut"></input><br/><br/>
            <label>Direccion</label><br/>
            <input type="text" placeholder={usuarioById.address} id="addressUserPut"></input><br/><br/>
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
            <input type="number" placeholder={comentarioById.author} id='authorCommentPut'></input><br/><br/>
            <label>Comentario</label><br/>
            <input type="text" placeholder={comentarioById.coment} id='commentCommentPut'></input><br/><br/>
            <label>Fecha</label><br/>
            <input type="date" id='dateCommentPut'></input><br/><br/>
            <br/>
            <br/>
            <button type="submit" onClick={() => PutComentario(document.getElementById("idComment").value)}>  Actualizar Comentario </button><br/><br/>
            <br/>
            <br/>
        </div>
    );
  
  }