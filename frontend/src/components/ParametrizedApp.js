import React, {useState} from 'react'
import ComentarioListComponent from './ComentarioListComponent';
import UsuarioListComponent from './UsuarioListComponent';

var buscando = false;

export default function AppParametrized() {
    const [usuarioById, getUsuarioById]=useState([]);
    const [comentarioById, getComentarioById]=useState([]);
    const [usuarioByName, getUsuarioByName]=useState([]);
    const [usuarioComments, getUsuarioComments]=useState([]);
    const [comentarioByDate, getComentarioByDate]=useState([]);

    function GetUsuarioById(id){
            fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/',
            {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response=>response.json())
            .then(response=>getUsuarioById([response]))
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
        .then(response=>getComentarioById([response]))
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
  
    return(
        <div>
            <h2><u>Búsquedas parametrizadas</u></h2>
                <h3>Buscar Usuario por ID</h3>
                <input type="number" placeholder="Escriba una id válida" onChange={
                    (evt) => {
                        if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetUsuarioById(evt.target.value);
                          }, 200);
                        }
                    }></input>
                    
                <br></br>
                    <UsuarioListComponent lista={usuarioById}/>

                <h3>Buscar Usuario por nombre</h3>
                <input type="text" placeholder="Escriba un nombre de usuario" onChange={
                    (evt) => {
                        if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetUsuarioByName(evt.target.value);
                          }, 200);
                        }
                    }></input>
                <br></br>
                    <UsuarioListComponent lista={usuarioByName}/>
                
                <br></br>
                <h3>Buscar Comentario por ID</h3>
                <input type="number" placeholder="Escriba una id válida" onChange={
                    (evt) => {
                        if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetComentarioById(evt.target.value);
                          }, 200);
                        }
                    }></input>
                <br/>
                    <ComentarioListComponent lista={comentarioById}/>

                <h3>Buscar Comentarios por autor</h3>
                
                <input type="number" placeholder="Escriba una id de autor válida" onChange={
                    (evt) => {
                        if (window.countInterval) clearTimeout(window.countInterval)
                        window.countInterval = setTimeout(() => {
                            GetUsuarioComments(evt.target.value);
                          }, 200);
                        }
                    }></input>
                <br/>
                    <ComentarioListComponent lista={usuarioComments}/>

                <h3>Buscar Comentarios por Fecha</h3>
                
                <input type="date" onChange={
                    (evt) => {
                        GetComentarioByDate(evt.target.value);
                    }}></input>
                <br/>
                    <ComentarioListComponent lista={comentarioByDate}/>
                <hr/>
        </div>
    );
  
  }