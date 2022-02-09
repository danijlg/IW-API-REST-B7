import { useState, useEffect } from "react";

export default function ReservaList({lista}){
    const initialState = [];
    const [usuarios, getUsuariosReserva]=useState([]);

    const URL_BASE = 'http://127.0.0.1:8000/'

    function GetUsuario(id){
        fetch(URL_BASE  + 'crud/usuario/' + id + '/',
        {
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
        .then(response=>getUsuariosReserva(usuarios.concat(response)))
        .then(error=>console.log(error))         
    }

    useEffect(() => {
        getUsuariosReserva(initialState);
        lista.map(reservaList=>{
            if(reservaList.detail === undefined){
                GetUsuario(reservaList.passenger);
            }
        });
    }, [lista]);

    return(
        <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                    </tr>
                </thead>
                <tbody>
                         {
                            usuarios.map(users=>{
                                if(users.detail === undefined){
                                    return(
                                        <tr className="set_row">
                                            <td key="User Name">{users.name}</td>
                                            <td key="User Surname">{users.surname}</td>
                                            <td key="User Address">{users.address}</td>
                                        </tr>   
                                    )
                                }
                            })
                        }
                </tbody>
        </table>
    );
}