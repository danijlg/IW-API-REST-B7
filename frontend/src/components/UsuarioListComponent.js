export default function UserListComponent( {lista, actualizar} ) {
    function DeleteUsuario(id){
        fetch('http://127.0.0.1:8000/crud/usuario/' + id + '/',
        {
            method:'DELETE', 
            headers:{
                'Content-Type': 'application/json'
            }
        })
        alert("Usuario borrado con exito")
        actualizar();
    }
        return(
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
                            lista.map(userList=>{
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
        ); }