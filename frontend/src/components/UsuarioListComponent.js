export default function UserListComponent( {lista, actualizar} ) {
    function DeleteUsuario(id){
        fetch('https://franbono2django.herokuapp.com/crud/usuario/' + id + '/',
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
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lista.map(userList=>{
                                if(userList.detail === undefined){
                                    return(
                                        <tr className="set_row">
                                            <td key="Usuario ID">{userList.id}</td>
                                            <td key="Usuario Name">{userList.name}</td>
                                            <td key="Usuario Surname">{userList.surname}</td>
                                            <td key="Usuario Address">{userList.address}</td>
                                            <td key="Usuario Email">{userList.email}</td>
                                            <td key="Usuario DeleteB"> <button type="submit" onClick={() => DeleteUsuario(userList.id)}> Borrar Usuario </button> </td>
                                        </tr>
                                        
                                    )
                                }
                            })
                        }
                </tbody>
            </table>
        ); }