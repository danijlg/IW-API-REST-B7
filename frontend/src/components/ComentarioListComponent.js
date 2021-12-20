export default function ComentarioListComponent( {lista, single} ) {
    if(single===false){
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Comment</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lista.map(comentarioList=>{
                                return(
                                    <tr class="set_row">
                                        <td>{comentarioList.id}</td>
                                        <td>{comentarioList.author}</td>
                                        <td>{comentarioList.coment}</td>
                                        <td>{comentarioList.date}</td>
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
                        <th>Author</th>
                        <th>Comment</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            <tr class="set_row">
                                <td>{lista.id}</td>
                                <td>{lista.author}</td>
                                <td>{lista.coment}</td>
                                <td>{lista.date}</td>
                            </tr>
                        }
                </tbody>
            </table>
        ); 
    }
}