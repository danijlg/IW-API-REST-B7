import './ChatComponent.css'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function ChatComponent() {
    const [messagesConversation, getMessagesConversation]=useState([]);
    const { conversation, nombreContacto } = useParams();
    const user = JSON.parse(sessionStorage.getItem('user')).id
    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

    useEffect(() => {
        setTimeout( () => {
            GetMessagesConversation(conversation);
            //GetReceiverName(conversation, user);
            AddEventListener();
        }
        , 100);
        }, []
    )


    function GetMessagesConversation(conversation){
        //alert(user)
        fetch(URL_BASE + 'crud/mensajes/' + conversation + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getMessagesConversation(response))
        .then(error=>console.log(error))
    }

    function PostMessage(){
        var textInput = document.getElementById('text')
        var message = textInput.value;
        if(message === "")  { return; }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ origin: user, conversation: conversation, message: message, date: new Date().toISOString() })
        };
        fetch(URL_BASE + 'crud/mensajes/', requestOptions)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));

        textInput.value = "";
    }

    function AddEventListener(){
        // Get the input field
            var input = document.getElementById("text");

            // Execute a function when the user releases a key on the keyboard
            input.addEventListener("keypress", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.key === "Enter") {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("btnSend").click();
            }
            });
    }

    function backToChatList(){
        window.location.href = '/chat/';
    }


    return( 
    <div>   
        <div class="container">
            <div class="chat">
                <div class="chat-header">
                    <div class="profile">
                    <button className='btnAtras' onClick={backToChatList}>Atr??s</button>
                    
                    
                        
                            {
                                    <div class="left">
                                        <h2>{nombreContacto}</h2>
                                    </div>
                            }
                    </div>
                </div>
                <div class="chat-box" id="chat-box">
                    <div>
                    {
                        messagesConversation.map(messages => {
                         if(messages.message != '-----'){
                            if(messages.origin == user){
                                
                                return(
                                    <div class="chat-r">
                                        <div class="sp"></div>
                                        <div class="mess mess-r">
                                            <p>
                                                {messages.message}
                                            </p>
                                            <div class="check">
                                                <span>{messages.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return(
                                <div class="chat-l">
                                    <div class="mess">
                                        <p>
                                            {messages.message}
                                        </p>
                                        <div class="check">
                                            <span>{messages.date}</span>
                                        </div>
                                    </div>
                                    <div class="sp"></div>
                                </div>
                                );
                            }
                         }
                            
                        })
                    }
                    </div>
                </div>

                <div class="chat-footer">
                    <textarea id='text' placeholder="Escribe un mensaje"></textarea>
                    <button id='btnSend' onClick={ () => { 
                        PostMessage(); 
                        setTimeout(() => {
                            GetMessagesConversation(conversation); 
                          }, 500);
                        } }>
                            Send
                        </button><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    </div>);
};