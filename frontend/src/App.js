import React, {useState, useEffect, useMemo} from 'react'
import './App.css';
import Map from './Map';


function Api_Django(){
    const [UsuarioList, getUsuarioList]=useState([]);
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
    
    function DeleteUsuario(id){
        fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/',
        {
            method:'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(error=>console.log(error))
        alert("Usuario borrado con exito")
        GetUsuarioList()
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

    function DeleteComentario(id){
        fetch('http://127.0.0.1:8000/crud/comentario/' + id + '/',
        {
            method:'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(error=>console.log(error))
        alert("Comentario borrado con exito")
        GetCommentsList()
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
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Address</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            UsuarioList.map(userList=>{
                                                return(
                                                    <tr class="set_row">
                                                        <td>{userList.id}</td>
                                                        <td>{userList.name}</td>
                                                        <td>{userList.surname}</td>
                                                        <td>{userList.address}</td>
                                                        <td> <button type="submit" onClick={() => DeleteUsuario(userList.id)}> Borrar Usuario </button> </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                        
                                </tbody>
                            </table>
                        
                            <h3>Lista de Comentarios</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Author</th>
                                        <th>Comment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            CommentsList.map(comentarioList=>{
                                                return(
                                                    <tr class="set_row">
                                                        <td>{comentarioList.id}</td>
                                                        <td>{comentarioList.author}</td>
                                                        <td>{comentarioList.coment}</td>
                                                        <td>{comentarioList.date}</td>
                                                        <td> <button type="submit" onClick={() => DeleteComentario(comentarioList.id)}> Borrar Comentario </button> </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                </tbody>
                            </table>

                        <hr/>
                        <h2><u>Búsquedas parametrizadas</u></h2>
                        <h3>Buscar Usuario por ID</h3>
                        <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetUsuarioById(evt.target.value);}}></input>
                        <br></br>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                                    <tr class="set_row">
                                                        <td>{usuarioById.id}</td>
                                                        <td>{usuarioById.name}</td>
                                                        <td>{usuarioById.surname}</td>
                                                        <td>{usuarioById.address}</td>
                                                    </tr>
                                        }
                                </tbody>
                            </table>

                        <h3>Buscar Usuario por nombre</h3>
                        <input type="text" placeholder="Escriba un nombre de usuario" onChange={(evt) => {GetUsuarioByName(evt.target.value);}}></input>
                        <br></br>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            usuarioByName.map(userList=>{
                                                return(
                                                    <tr class="set_row">
                                                        <td>{userList.id}</td>
                                                        <td>{userList.name}</td>
                                                        <td>{userList.surname}</td>
                                                        <td>{userList.address}</td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                </tbody>
                            </table>
                        
                        <br></br>
                        <h3>Buscar Comentario por ID</h3>
                        <input type="number" placeholder="Escriba una id válida" onChange={(evt) => {GetComentarioById(evt.target.value);}}></input>
                        <br/>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Author</th>
                                        <th>Comment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                                    <tr class="set_row">
                                                        <td>{comentarioById.id}</td>
                                                        <td>{comentarioById.author}</td>
                                                        <td>{comentarioById.coment}</td>
                                                        <td>{comentarioById.date}</td>
                                                    </tr>
                                        }
                                </tbody>
                            </table>

                        <h3>Buscar Comentarios por autor</h3>
                        <input type="number" placeholder="Escriba una id de autor válida" onChange={(evt) => {GetUsuarioComments(evt.target.value);}}></input>
                        <br/>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Author</th>
                                        <th>Comment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            usuarioComments.map(comentarioList=>{
                                                return(
                                                    <tr class="set_row">
                                                        <td>{comentarioList.id}</td>
                                                        <td>{comentarioList.author}</td>
                                                        <td>{comentarioList.coment}</td>
                                                        <td>{comentarioList.date}</td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                </tbody>
                            </table>

                        <h3>Buscar Comentarios por Fecha</h3>
                        <input type="date" onChange={(evt) => {GetComentarioByDate(evt.target.value);}}></input>
                        <br/>
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Author</th>
                                        <th>Comment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            comentarioByDate.map(comentarioList=>{
                                                return(
                                                    <tr class="set_row">
                                                        <td>{comentarioList.id}</td>
                                                        <td>{comentarioList.author}</td>
                                                        <td>{comentarioList.coment}</td>
                                                        <td>{comentarioList.date}</td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                </tbody>
                            </table>
                </div>
            </body>
        </html>
    );
}
export default Api_Django    ;