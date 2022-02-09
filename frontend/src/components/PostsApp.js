function AppPost() {
  
    const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'
  
      function PostUsuario(){
        var name = document.getElementById("nameUser").value;
        var surname = document.getElementById("surnameUser").value;
        var address = document.getElementById("addressUser").value;
        if(name === "" || surname === "" || address === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, surname: surname, address: address })
        };
        fetch(URL_BASE + 'crud/usuario/', requestOptions)
        alert("Usuario añadido correctamente")
        window.location.href = './listas'
    }

    function PostComentario(){
        var author = document.getElementById("authorComment").value;
        var comment = document.getElementById("commentComment").value;
        var date = document.getElementById("dateComment").value;
        if(author === "" || comment === "" || date === "") alert("Rellena todos los campos");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author, coment: comment, date: date })
        };
        fetch(URL_BASE + 'crud/comentario/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Comentario añadido correctamente")
        window.location.href = './listas'
    }

  
    return(
        <div>
            <br/>
            <br/>
            <h2>Posts</h2>
            <br/>
                        <h3>Insertar Usuario</h3><br/>
                        <label>Nombre</label><br/>
                        <input type="text" placeholder='Inserte un nombre' id='nameUser'></input><br/><br/>
                        <label>Apellido</label><br/>
                        <input type="text" placeholder='Inserte un apellido' id='surnameUser'></input><br/><br/>
                        <label><br/>Direccion<br/></label><br/>
                        <input type="text" placeholder='Inserte una dirección' id='addressUser'></input><br/><br/>
                        <br/>
                        <br/>
                        <button onClick={PostUsuario}>
                            Insertar Usuario
                        </button><br/><br/><br/><br/>

                        <h3>Insertar Comentario</h3><br/>
                        <label>Autor</label><br/>
                        <input type="number" placeholder='Inserte una id de usuario' id='authorComment'></input><br/><br/>
                        <label>Comentario</label><br/>
                        <input type="text" placeholder='Inserte un comentario' id='commentComment'></input><br/><br/>
                        <label>Fecha</label><br/>
                        <input type="date" id='dateComment'></input><br/><br/>
                        <br/>
                        <br/>
                        <button onClick={()=>{PostComentario();}}>
                            Insertar Comentario
                        </button><br/><br/><br/><br/>
        </div>
    );
  
  }
  
export default AppPost;