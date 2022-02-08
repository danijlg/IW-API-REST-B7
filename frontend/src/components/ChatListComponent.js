import "./ChatListComponent.css"
import React, {useState, useEffect} from 'react'
import ChatComponent from "./ChatComponent";

export default function ChatListComponent({user}){
    const [allChats, getAllChats]=useState([]);
    const [nombresDestino, getNombresDestino]=useState([]);
    const nombresRef= React.useRef(nombresDestino);

    function GetAllChats(user){
        fetch('http://127.0.0.1:8000/crud/usuario/' + user + '/mensajes/',
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
        fetch('http://127.0.0.1:8000/crud/mensajes/conversations/' + user + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>response.json())
        //.then(response=>alert(response[0].name + " " + response[0].surname))
        .then(response=> () => {
            for(var index = 0 ; index < response.length; index++){
                document.getElementById("nombre"+index).textContent = response[index].name + " " + response[index].surname
            }
        })
        .then(response=>getNombresDestino(response))
        //.then((response)=>alert(nombresDestino[1].name))
        .then((error)=>console.log(error))
    }

    function GoToChat(conversation, user, nombreContacto){
        //alert('./chatmensaje/' + user + '/' + conversation)
        window.location.href = '/mensaje/' + user + '/' + conversation + '/' + nombreContacto;
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
            </div>
            
            <div id="friends">
                {      
                        allChats.map( (chat, index) => {    
                            //alert(nombresDestino[0].name)
                            setTimeout( () => {
                                //document.getElementById("nombre"+index).textContent = nombresDestino[0].name + " " + nombresDestino[0].surname;
                            }, 1000)  
                            var string = chat.message;
                            //alert(index);
                            //alert(nombresRef[0].name);
                            if(string.length > 35) {
                                string = string.substring(0, 35) + "...";
                            }
                            
                            return(<div class="friend" onClick={ () => {GoToChat(chat.conversation, user, document.getElementById("nombre"+index).textContent)}}>
                                
                                {   
                                    <p key={index}>
                                    <strong id={"nombre"+index}>Nombre Apellido</strong> <br/>
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