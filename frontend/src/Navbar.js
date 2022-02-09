import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import AppActualizar from "./components/AppActualizar";
import ChatComponent from "./components/ChatComponent";
import ChatListComponent from "./components/ChatListComponent";
import FlickrApp from "./components/FlickrShow";
import Home from "./components/home";
import AppList from "./components/ListsApp";
import AppMap from "./components/MapsApp";
import AppParametrized from "./components/ParametrizedApp";
import AppPost from "./components/PostsApp";
import TrayectoView from "./components/TrayectoView";
import ProfileApp from "./components/ProfileApp";
import "./Navbar.css";
import Login from './components/GoogleLogin';
import CreateUser from './components/CreateUser';

function NavBar(){

  const [user, setUser]=useState(undefined);

  const [profile, setProfile] = useState("");

  var perfil;
  if(profile === ""){
    perfil = <Nav.Link as={Link} to={"."}>
        <Login setProfile={setProfile} setUser={setUser} user={user}/>
    </Nav.Link>;

  }else{
    if(user === undefined){
      perfil = <Nav.Link as={Link} to="/crearUsuario">
      Crear usuario con Google
    </Nav.Link>;
    }else{
      perfil = <Nav.Link as={Link} to="/perfil">
      {profile.email}
      </Nav.Link>;

      var navElements = document.getElementsByClassName('navLog');
      for(var i =0; i < navElements.length;i++){
          navElements[i].style.visibility = 'visible';
      }
    
    }
    
  }

  

    return (
      <div>
        <div id="bar">
          <Navbar className="color-nav" variant={"dark"}>
            <Navbar.Brand as={Link} to={"/"}>
            Cliente: Práctica Ingeniería Web
            </Navbar.Brand>
            <Nav className={"ml-auto"}>
              <Nav.Link className='navLog' id='nav0' as={Link} to="/">
                Trayectos
              </Nav.Link>
              <Nav.Link className='navLog' id='nav1' as={Link} to="/listas/">
                Listas
              </Nav.Link>
              <Nav.Link className='navLog' id='nav2' as={Link} to="/parametrizadas/">
                Búsquedas Parametrizadas
              </Nav.Link>
              <Nav.Link className='navLog' id='nav3' as={Link} to="/mapas/" onClick={
                ()=>{const interval = setInterval(() => {
                  window.location.reload();
                }, 100);}}>
                Mapas
              </Nav.Link>
              <Nav.Link className='navLog' id='nav4' as={Link} to="/posts/">
                Insertar
              </Nav.Link>
              <Nav.Link className='navLog' id='nav5' as={Link} to="/actualizar/">
                Actualizar
              </Nav.Link>
              <Nav.Link className='navLog' id='nav6' as={Link} to="/images/">
                Imágenes
              </Nav.Link>
              <Nav.Link className='navLog' id='nav7' as={Link} to="/chat/">
                Chat
              </Nav.Link>
                {perfil}
            </Nav>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />

            <Route exact path="/listas/" element={<AppList/>} />
            <Route exact path="/parametrizadas/" element={<AppParametrized/>} />
            <Route exact path="/actualizar/" element={<AppActualizar/>}/>
            <Route exact path="/mapas/" element={<AppMap/>}   />
            <Route exact path="/posts/" element={<AppPost/>} />
            <Route exact path="/images/" element={<FlickrApp/>} />
            <Route exact path="/perfil" element={<ProfileApp profile={profile} setProfile={setProfile} user={user} setUser={setUser}/>} />
            <Route exact path="/crearUsuario" element={<CreateUser profile={profile} setUser={setUser}/>} />
            <Route exact path="/chat/" element={<ChatListComponent/>} />
            <Route exact path="/mensaje/:conversation/:nombreContacto/" element={<ChatComponent/>} />
             <Route exact path="/trayecto" element={<TrayectoView/>} >
               <Route path=":trayectoId" element={<TrayectoView/>} />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }


export default NavBar;
