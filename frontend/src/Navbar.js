import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import AppActualizar from "./components/AppActualizar";
import ChatComponent from "./components/ChatComponent";
import ChatListComponent from "./components/ChatListComponent";
import FlickrApp from "./components/FlickrShow";
import Home from "./components/home";
import AppList from "./components/ListsApp";
import AppMap from "./components/MapsApp";
import AppParametrized from "./components/ParametrizedApp";
import AppPost from "./components/PostsApp";
import "./Navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="bar">
          <Navbar className="color-nav" variant={"dark"}>
            <Navbar.Brand as={Link} to={"/"}>
            Cliente: Práctica Ingeniería Web
            </Navbar.Brand>
            <Nav className={"ml-auto"}>
              <Nav.Link as={Link} to="/listas/">
                Listas
              </Nav.Link>
              <Nav.Link as={Link} to="/parametrizadas/">
                Búsquedas Parametrizadas
              </Nav.Link>
              <Nav.Link as={Link} to="/mapas/" onClick={
                ()=>{const interval = setInterval(() => {
                  window.location.reload();
                }, 100);}}>
                Mapas
              </Nav.Link>
              <Nav.Link as={Link} to="/posts/">
                Insertar
              </Nav.Link>
              <Nav.Link as={Link} to="/actualizar/">
                Actualizar
              </Nav.Link>
              <Nav.Link as={Link} to="/images/">
                Imágenes
              </Nav.Link>
              <Nav.Link as={Link} to="/chat/">
                Chat
              </Nav.Link>
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
            <Route exact path="/chat/" element={<ChatListComponent user={132}/>} />
            <Route exact path="/mensaje/:user/:conversation/:nombreContacto/" element={<ChatComponent/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default NavBar;
