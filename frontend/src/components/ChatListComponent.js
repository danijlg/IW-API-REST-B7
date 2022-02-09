import "./ChatListComponent.css"
import React, {useState, useEffect} from 'react'
import ChatComponent from "./ChatComponent";

export default function ChatListComponent({}){
    const [allChats, getAllChats]=useState([]);
    const [nombresDestino, getNombresDestino]=useState([]);
    const nombresRef= React.useRef(nombresDestino);
    const user = JSON.parse(sessionStorage.getItem('user')).id;
    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

    function GetAllChats(user){
        fetch(URL_BASE + 'crud/usuario/' + user + '/mensajes/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getAllChats(response))
        .then(error=>console.log(error))
    }

    function GetReceiversNames(user){
        fetch(URL_BASE + 'crud/mensajes/conversations/' + user + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>response.json())
        //.then(response=>alert(response[0].name + " " + response[0].surname))
        .then(response=> () => {
            setTimeout( () => {
                for(var index = 0 ; index < response.length; index++){
                    document.getElementById("nombre"+index).textContent = response[index].name + " " + response[index].surname;
                }   
            }, 150)
            
        })
        .then(response=>getNombresDestino(response))
        //.then((response)=>alert(nombresDestino[1].name))
        .then((error)=>console.log(error))
    }

    function GoToChat(conversation, user, nombreContacto){
        //alert('./chatmensaje/' + user + '/' + conversation)
        window.location.href = '/mensaje/' + conversation + '/' + nombreContacto;
    }

    function AddNewConversation(){
        var email = document.getElementById('inNewChat').value;
        var id = (!isNaN(email)) ? email : undefined;

        if(isNaN(email)){ // El usuario ha introducido el correo de otro usuario
            fetch(URL_BASE + 'crud/usuario/email/' + email + '/')
            .then((data) => data.json())
            //.then((data) => {alert(data[0].id)})
            .then((data) => {AddConversation(data[0].id)})
        }
    }

    function AddConversation(id){
        if(user != id){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userOne: user, userTwo: id })
            };
            fetch(URL_BASE + 'crud/conversaciones/', requestOptions)
                .then(response => response.json())
                .then(response => { 
                    AddFirstComment(response.id)
                })
                
        } else {
            alert("No puedes crear una conversación contigo mismo");
        }
    }

    function AddFirstComment(idConversacion){
        const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ origin: user, conversation: idConversacion, message: '-----', date: new Date().toJSON()})
        };
        fetch(URL_BASE + 'crud/mensajes/', requestOptions2)
            .then(response => response.json())
            .then(response => {
                GetReceiversNames(user);
                GetAllChats(user);
            })
    }

    function DeleteConversation(){
        var id = document.getElementById("inDel").value;

        fetch(URL_BASE + 'crud/conversaciones/' + id + '/',
        {
            method:'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => {
            alert("Conversación borrada con éxito");
            GetReceiversNames(user);
            GetAllChats(user);      
        })
    }

    useEffect(() => {
        GetReceiversNames(user);
        GetAllChats(user);      
    }, [user]
    )

        return(
        <div id="chatbox">
        <div id="friendslist">
            <div id="topmenu">
                <span class="friends"></span>
                <input id='inNewChat' placeholder='Inserte correo del usuario'/>
                <button class="new" onClick={AddNewConversation}>Abrir conversación</button>

                <input id='inDel' placeholder='Inserte id de conversacion'/>
                <button class="btnDel" onClick={DeleteConversation}>Borrar conversación</button>
                
            </div>
            
            <div id="friends">
                {      
                        allChats.map( (chat, index) => {    
                            var string = chat.message;
                            if(string.length > 35) {
                                string = string.substring(0, 35) + "...";
                            }
                            
                            return(
                                <div class="friend" onClick={ () => {GoToChat(chat.conversation, user, document.getElementById("nombre"+index).textContent)}}>
                                
                                {
                                    <p key={index}>
                                        <strong id={"nombre"+index}>Nombre Apellido</strong> <br/>
                                        <strong>Id: {chat.conversation}</strong><br/>
                                        <span>{string}</span>                                        
                                    </p>
                                }
                                
                                </div>);
                        })
                }
            </div>
                
            
                
            </div>                
            
        </div>	
        );
}

/*
 <div id="search">
	            <input type="text" id="searchfield" placeholder="Search contacts..." />
            </div>*/