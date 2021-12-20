export default function UserListComponent( {lista, single} ) {
    if(single===false){
        return(
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
                            lista.map(userList=>{
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
        ); }
    else {
        return(
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
                                <td>{lista.id}</td>
                                <td>{lista.name}</td>
                                <td>{lista.surname}</td>
                                <td>{lista.address}</td>
                            </tr>
                        }
                </tbody>
            </table>
        ); 
    }
}