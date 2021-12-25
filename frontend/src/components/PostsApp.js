import React, {useState, useEffect} from 'react'
import ComentarioListComponent from './ComentarioListComponent';
import UsuarioListComponent from './UsuarioListComponent';
function AppPost() {
  
    /*path('json_aparcamientos', datos_abiertos.views.get_json_aparcamientos),
      path('json_aparcamientos/radio/<str:lon>/<str:lat>/<int:radius>', datos_abiertos.views.get_json_aparcamientos_dentro),
      path('json_aparcamientos/cerca/<str:lon>/<str:lat>', datos_abiertos.views.get_json_aparcamiento_cercano),
      path('json_atascos', datos_abiertos.views.get_json_atascos),
      path('json_atascos/cerca/<str:lon>/<str:lat>', datos_abiertos.views.get_json_atasco_cercano),
      path('json_atascos/radio/<str:lon>/<str:lat>/<int:radius>', datos_abiertos.views.get_json_atascos_dentro),*/
  
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
        window.location.href = './listas'
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
        window.location.href = './listas'
    }

  
    return(
        <div>
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
                        <button onClick={()=>{PostComentario();}}>
                            Insertar Comentario
                        </button>
        </div>
    );
  
  }
  
export default AppPost;