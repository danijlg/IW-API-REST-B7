export default function ComentarioListComponent( {lista, actualizar} ) {
    function DeleteComentario(id){
    fetch('http://127.0.0.1:8000/crud/comentario/' + id + '/',
    {
        method:'DELETE', 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    alert("Comentario borrado con exito")
    actualizar();
    }
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lista.map(comentarioList=>{
                                return(
                                    <tr className="set_row">
                                        <td key="Comentario ID" >{comentarioList.id}</td>
                                        <td key="Comentario Autor">{comentarioList.author}</td>
                                        <td key="Comentario Comment">{comentarioList.coment}</td>
                                        <td key="Comentario Date">{comentarioList.date}</td>
                                        <td key="Comentario DeleteB"> <button type="submit" onClick={() => DeleteComentario(comentarioList.id)}> Borrar Comentario </button> </td>
                                    </tr>
                                    
                                )
                            })
                        }
                </tbody>
            </table>
        ); }