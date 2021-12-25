import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import AppActualizar from "./components/AppActualizar";
import AppList from "./components/ListsApp";
import AppMap from "./components/MapsApp";
import AppParametrized from "./components/ParametrizedApp";
// import "./stylesheets/NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="bar">
          <Navbar bg={"dark"} variant={"dark"}>
            <Navbar.Brand as={Link} to={"/"}>
            Cliente: Práctica Ingeniería Web
            </Navbar.Brand>
            <Nav className={"ml-auto"}>
              <Nav.Link as={Link} to="/listas">
                Listas
              </Nav.Link>
              <Nav.Link as={Link} to="/parametrizadas">
                Búsquedas Parametrizadas
              </Nav.Link>
              <Nav.Link as={Link} to="/actualizar">
                Actualizar
              </Nav.Link>
              <Nav.Link as={Link} to="/mapas">
                Mapas
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/listas" element={<AppList/>} />
            <Route exact path="/parametrizadas" element={<AppParametrized/>} />
            <Route exact path="/actualizar" element={<AppActualizar/>}/>
            <Route exact path="/mapas" element={<AppMap/>}   />
          </Routes>
        </div>
      </div>
    );
  }
}

export default NavBar;
