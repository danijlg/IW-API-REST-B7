import React, {useState, useEffect} from 'react'
import ComentarioListComponent from './ComentarioListComponent';
import UsuarioListComponent from './UsuarioListComponent';
function AppList() {
  
    /*path('json_aparcamientos', datos_abiertos.views.get_json_aparcamientos),
      path('json_aparcamientos/radio/<str:lon>/<str:lat>/<int:radius>', datos_abiertos.views.get_json_aparcamientos_dentro),
      path('json_aparcamientos/cerca/<str:lon>/<str:lat>', datos_abiertos.views.get_json_aparcamiento_cercano),
      path('json_atascos', datos_abiertos.views.get_json_atascos),
      path('json_atascos/cerca/<str:lon>/<str:lat>', datos_abiertos.views.get_json_atasco_cercano),
      path('json_atascos/radio/<str:lon>/<str:lat>/<int:radius>', datos_abiertos.views.get_json_atascos_dentro),*/
  
      const [UsuarioList,getUsuarioList]=useState([]);
      const [CommentsList, getCommentsList]=useState([]);
      const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'
      //const URL_BASE = 'http://127.0.0.1:8000/'
  
    function GetUsuarioList(){
        //Prueba heroku
        //fetch('http://127.0.0.1:8000/crud/usuario/',
        fetch(URL_BASE + 'crud/usuario/',
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
        fetch(URL_BASE + 'crud/comentario/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getCommentsList(response))
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
        <div>
            <h2><u>Lista completa</u></h2>
            <h3>Lista de Usuarios</h3>
                <UsuarioListComponent lista={UsuarioList} actualizar={()=> {GetUsuarioList(); GetCommentsList()}}/>
            
            <h3>Lista de Comentarios</h3>
                <ComentarioListComponent lista={CommentsList} actualizar={()=> GetCommentsList()}/>
        </div>
    );
  
  }
  
  export default AppList;
  





