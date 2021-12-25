import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import ComentarioListComponent from "./components/ComentarioListComponent";
import UsuarioListComponent from "./components/UsuarioListComponent";
import ImagenesComponent from "./components/ImagenesComponent";
import AppMap from "./components/MapsApp";
import SubidaImagen from "./components/SubidaImagen";
import ImageList from "./components/ImageList";
import ImagesById from "./components/ImagesById";

function Api_Django() {
  // GET
  const [UsuarioList, getUsuarioList] = useState([]);
  const [CommentsList, getCommentsList] = useState([]);
  const [usuarioById, getUsuarioById] = useState([]);
  const [comentarioById, getComentarioById] = useState([]);
  const [usuarioByName, getUsuarioByName] = useState([]);
  const [usuarioComments, getUsuarioComments] = useState([]);
  const [comentarioByDate, getComentarioByDate] = useState([]);

  function GetUsuarioList() {
    fetch("http://127.0.0.1:8000/crud/usuario/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getUsuarioList(response))
      .then((error) => console.log(error));
  }
  function PutUsuario(id) {
    var name = document.getElementById("nameUserPut").value;
    var surname = document.getElementById("surnameUserPut").value;
    var address = document.getElementById("addressUserPut").value;
    if (name === "" || surname === "" || address === "")
      alert("Rellena todos los campos");
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, surname: surname, address: address }),
    };
    fetch("http://127.0.0.1:8000/crud/usuario/" + id + "/", requestOptions)
      .then((response) => response.json())
      .then((error) => console.log(error));
    alert("Usuario actualizado correctamente");
    GetUsuarioList();
  }

  function GetCommentsList() {
    fetch("http://127.0.0.1:8000/crud/comentario/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getCommentsList(response))
      .then((error) => console.log(error));
  }

  function PutComentario(id) {
    var author = document.getElementById("authorCommentPut").value;
    var comment = document.getElementById("commentCommentPut").value;
    var date = document.getElementById("dateCommentPut").value;
    if (author === "" || comment === "" || date === "")
      alert("Rellena todos los campos");
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: author, coment: comment, date: date }),
    };
    fetch("http://127.0.0.1:8000/crud/comentario/" + id + "/", requestOptions)
      .then((response) => response.json())
      .then((error) => console.log(error));
    alert("Comentario actualizado correctamente");
    GetCommentsList();
  }

  function GetUsuarioById(id) {
    fetch("http://127.0.0.1:8000/crud/usuario/" + id + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getUsuarioById([response]))
      .then((error) => console.log(error));
  }

  function GetComentarioById(id) {
    fetch("http://127.0.0.1:8000/crud/comentario/" + id + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getComentarioById([response]))
      .then((error) => console.log(error));
  }

  function GetUsuarioByName(name) {
    fetch("http://127.0.0.1:8000/crud/usuario/" + name + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getUsuarioByName(response))
      .then((error) => console.log(error));
  }

  function GetUsuarioComments(id) {
    fetch("http://127.0.0.1:8000/crud/usuario/" + id + "/comentario/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getUsuarioComments(response))
      .then((error) => console.log(error));
  }

  function GetComentarioByDate(date) {
    fetch("http://127.0.0.1:8000/crud/comentario/" + date + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => getComentarioByDate(response))
      .then((error) => console.log(error));
  }

  // POST
  function PostUsuario() {
    var name = document.getElementById("nameUser").value;
    var surname = document.getElementById("surnameUser").value;
    var address = document.getElementById("addressUser").value;
    if (name === "" || surname === "" || address === "")
      alert("Rellena todos los campos");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, surname: surname, address: address }),
    };
    fetch("http://127.0.0.1:8000/crud/usuario/", requestOptions);
    alert("Usuario añadido correctamente");
    GetUsuarioList();
  }

  function PostComentario() {
    var author = document.getElementById("authorComment").value;
    var comment = document.getElementById("commentComment").value;
    var date = document.getElementById("dateComment").value;
    if (author === "" || comment === "" || date === "")
      alert("Rellena todos los campos");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: author, coment: comment, date: date }),
    };
    fetch("http://127.0.0.1:8000/crud/comentario/", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    alert("Comentario añadido correctamente");
    GetCommentsList();
  }

  useEffect(() => {
    GetUsuarioList();
    GetCommentsList();
    const interval = setInterval(() => {
      GetUsuarioList();
      GetCommentsList();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script>
      </head>

      <body>
        <div class="linea">
          <h1>
            <b>
              <u>Cliente: Práctica Ingeniería Web</u>
            </b>
          </h1>
          <hr></hr>
          <h2>
            <u>Lista completa</u>
          </h2>
          <h3>Lista de Usuarios</h3>
          <UsuarioListComponent
            lista={UsuarioList}
            actualizar={() => GetUsuarioList()}
          />

          <h3>Lista de Comentarios</h3>
          <ComentarioListComponent
            lista={CommentsList}
            actualizar={() => GetCommentsList()}
          />

          <hr />
          <h2>
            <u>Búsquedas parametrizadas</u>
          </h2>
          <h3>Buscar Usuario por ID</h3>
          <input
            type="number"
            placeholder="Escriba una id válida"
            onChange={(evt) => {
              GetUsuarioById(evt.target.value);
            }}
          ></input>
          <br></br>
          <UsuarioListComponent lista={usuarioById} />

          <h3>Buscar Usuario por nombre</h3>
          <input
            type="text"
            placeholder="Escriba un nombre de usuario"
            onChange={(evt) => {
              GetUsuarioByName(evt.target.value);
            }}
          ></input>
          <br></br>
          <UsuarioListComponent lista={usuarioByName} />

          <br></br>
          <h3>Buscar Comentario por ID</h3>
          <input
            type="number"
            placeholder="Escriba una id válida"
            onChange={(evt) => {
              GetComentarioById(evt.target.value);
            }}
          ></input>
          <br />
          <ComentarioListComponent lista={comentarioById} />

          <h3>Buscar Comentarios por autor</h3>
          <input
            type="number"
            placeholder="Escriba una id de autor válida"
            onChange={(evt) => {
              GetUsuarioComments(evt.target.value);
            }}
          ></input>
          <br />
          <ComentarioListComponent lista={usuarioComments} />

          <h3>Buscar Comentarios por Fecha</h3>
          <input
            type="date"
            onChange={(evt) => {
              GetComentarioByDate(evt.target.value);
            }}
          ></input>
          <br />
          <ComentarioListComponent lista={comentarioByDate} />

          <hr />

          <h2>Mapas</h2>
          <AppMap></AppMap>

          <hr></hr>
          <h2>Posts</h2>
          <h3>Insertar Usuario</h3>
          <label>
            <br />
            Nombre
            <br />
          </label>
          <input
            type="text"
            placeholder="Inserte un nombre"
            id="nameUser"
          ></input>
          <label>
            <br />
            Apellido
            <br />
          </label>
          <input
            type="text"
            placeholder="Inserte un apellido"
            id="surnameUser"
          ></input>
          <label>
            <br />
            Direccion
            <br />
          </label>
          <input
            type="text"
            placeholder="Inserte una dirección"
            id="addressUser"
          ></input>
          <br />
          <br />
          <button onClick={PostUsuario}>Insertar Usuario</button>

          <h3>Insertar Comentario</h3>
          <label>
            <br />
            Autor
            <br />
          </label>
          <input
            type="number"
            placeholder="Inserte una id de usuario"
            id="authorComment"
          ></input>
          <label>
            <br />
            Comentario
            <br />
          </label>
          <input
            type="text"
            placeholder="Inserte un comentario"
            id="commentComment"
          ></input>
          <label>
            <br />
            Fecha
            <br />
          </label>
          <input type="date" id="dateComment"></input>
          <br />
          <br />
          <button onClick={PostComentario}>Insertar Comentario</button>

          <h3>Actualizar Usuario por ID</h3>
          <input
            type="number"
            placeholder="Escriba una id válida"
            onChange={(evt) => {
              GetUsuarioById(evt.target.value);
            }}
          ></input>
          <br />

          <label>
            <br />
            ID
            <br />
          </label>
          <input
            type="number"
            value={usuarioById.id}
            id="idUser"
            disabled
          ></input>
          <label>
            <br />
            Nombre
            <br />
          </label>
          <input type="text" value={usuarioById.name} id="nameUserPut"></input>
          <label>
            <br />
            Apellido
            <br />
          </label>
          <input
            type="text"
            value={usuarioById.surname}
            id="surnameUserPut"
          ></input>
          <label>
            <br />
            Direccion
            <br />
          </label>
          <input
            type="text"
            value={usuarioById.address}
            id="addressUserPut"
          ></input>
          <br />
          <br />
          <button
            type="submit"
            onClick={() => PutUsuario(document.getElementById("idUser").value)}
          >
            {" "}
            Actualizar Usuario{" "}
          </button>

          <h3>Actualizar Comentario por ID</h3>
          <input
            type="number"
            placeholder="Escriba una id válida"
            onChange={(evt) => {
              GetComentarioById(evt.target.value);
            }}
          ></input>
          <br />

          <label>
            <br />
            ID
            <br />
          </label>
          <input
            type="number"
            value={comentarioById.id}
            id="idComment"
            disabled
          ></input>
          <label>
            <br />
            Autor
            <br />
          </label>
          <input
            type="number"
            value={comentarioById.author}
            id="authorCommentPut"
          ></input>
          <label>
            <br />
            Comentario
            <br />
          </label>
          <input
            type="text"
            value={comentarioById.coment}
            id="commentCommentPut"
          ></input>
          <label>
            <br />
            Fecha
            <br />
          </label>
          <input
            type="date"
            value={comentarioById.date}
            id="dateCommentPut"
          ></input>
          <br />
          <br />
          <button
            type="submit"
            onClick={() =>
              PutComentario(document.getElementById("idComment").value)
            }
          >
            {" "}
            Actualizar Comentario{" "}
          </button>
        </div>
        <div>
          <h2>Subida de Imágenes</h2>
          {/* <ImagenesComponent></ImagenesComponent> */}
          <SubidaImagen></SubidaImagen>
        </div>
        <div>
          <h2>Lista de Imágenes</h2>

          {/* <ImageList></ImageList> */}
          <ImagesById></ImagesById>
        </div>
      </body>
    </html>
  );
}
export default Api_Django;
