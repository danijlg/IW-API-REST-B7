import React, {useState,useEffect,componentDidMount} from 'react';
import './MapsApp.css';
import MapaAparcamientos from './MapaAparcamientos';
import MapaAtascos from './MapaAtascos';

function AppMap() {

  const URL_BASE = 'https://safe-sea-73926.herokuapp.com/'

  const [aparcamientos, setAparcamientos] = useState([]);
  const [atascos, setAtascos] = useState([]);
  const [stateAparcamientos, setStateAparcamientos] = useState(0);

  var longitudAp, latitudAp, radiusAp = 0,longitudAt, latitudAt, radiusAt = 0;
  // 1: Todos, 2: Radios, 3: Cercano
  var stateAtascos = 0;

  function getAparcamientos(){
    fetch(URL_BASE + 'datos_abiertos/json_aparcamientos')
    .then((data) => data.json())
    .then((data) => {
      var list = []
      data.map(d=>{
        list.push(d.value.coordinates)
      })
      setAparcamientos(list);
    });
  }

  function getAparcamientosRadio(){
    latitudAp = document.getElementById("latRadP").value;
    longitudAp = document.getElementById("lonRadP").value;
    radiusAp = document.getElementById("radRadP").value;

    fetch(URL_BASE  + 'datos_abiertos/json_aparcamientos/radio/'+latitudAp+'/'+longitudAp+'/'+radiusAp)
    .then((data) => data.json())
    .then((data) => {
      var list = []
      data.map(d=>{
        list.push(d.value.coordinates)
      })
      
      setAparcamientos(list);
    });

  }

  function getAparcamientosCerca(){
    latitudAp = document.getElementById("latRadP").value;
    longitudAp = document.getElementById("lonRadP").value;

    fetch(URL_BASE  + 'datos_abiertos/json_aparcamientos/cerca/'+latitudAp+'/'+longitudAp)
    .then((data) => data.json())
    .then((data) => {
      setAparcamientos([data]);
    });
  }

  function getAtascos(){
    fetch(URL_BASE  + 'datos_abiertos/json_atascos')
    .then((data) => data.json())
    .then((data) => {
      var list = []
      data.map(d=>{
        list.push(d.coordinates)
      })
      setAtascos(list);
    });
    stateAtascos = 0;
  }

  function getAtascosRadio(){
    latitudAt = document.getElementById("latRadAt").value;
    longitudAt = document.getElementById("lonRadAt").value;
    radiusAt = document.getElementById("radRadAt").value;

    fetch(URL_BASE  + 'datos_abiertos/json_atascos/radio/'+latitudAt+'/'+longitudAt+'/'+radiusAt)
    .then((data) => data.json())
    .then((data) => {
      var list = []
      data.map(d=>{
        list.push(d.coordinates)
      })
      setAtascos(list);
    });
    stateAtascos = 1;
  }

  function getAtascosCerca(){
    latitudAt = document.getElementById("latRadAt").value;
    longitudAt = document.getElementById("lonRadAt").value;

    fetch(URL_BASE  + 'datos_abiertos/json_atascos/cerca/'+latitudAt+'/'+longitudAt)
    .then((data) => data.json())
    .then((data) => {
      setAtascos([data]);
    });
    stateAtascos = 2;
  }

  useEffect(() => {
    getAparcamientos();
    getAtascos();
    
  }, []);

  return(
      <div name='mapa'>

        <div>
        <br/>
          <h3>Aparcamientos</h3><br/>
          Latitud <br/><input id="latRadP" type="text" placeholder='Inserte una latitud válida'></input><br/><br/>
          Longitud<br/><input id="lonRadP" type="text" placeholder='Inserte una longitud válida'></input><br/><br/>
          Radio <br/><input id="radRadP" type="text" placeholder='Inserte un radio positivo'></input><br/><br/>
          <button onClick={(evt) => {getAparcamientos(); setStateAparcamientos(0);}}>Busqueda aparcamientos</button><br/><br/>
          <button onClick={(evt) => {getAparcamientosRadio(); setStateAparcamientos(1);}}>Busqueda aparcamientos en un radio</button><br/><br/>
          <button onClick={(evt) => {getAparcamientosCerca(); setStateAparcamientos(2);}}>Busqueda aparcamientos mas cercano</button><br/><br/>
        </div>
          <MapaAparcamientos mapId={'aparcamientos'} pins={aparcamientos} radius={-1} source={[36.7213028,-4.4216366]}></MapaAparcamientos>

        <br/><br/>
        <div>
          <h3>Atascos</h3><br/>
          Latitud <br/><input id="latRadAt" type="text" placeholder='Inserte una latitud válida'></input><br/><br/>
          Longitud <br/><input id="lonRadAt" type="text" placeholder='Inserte una longitud válida'></input><br/><br/>
          Radio <br/><input id="radRadAt" type="text" placeholder='Inserte un radio positivo'></input><br/><br/>
          <button onClick={(evt) => {getAtascos();}}>Busqueda atascos</button><br/><br/>
          <button onClick={(evt) => {getAtascosRadio();}}>Busqueda atascos en un radio</button><br/><br/>
          <button onClick={(evt) => {getAtascosCerca();}}>Busqueda atasco mas cercano</button><br/><br/>
        </div>
          <MapaAtascos mapId={'atascos'} pins={atascos} radius={-1} source={[36.7213028,-4.4216366]}></MapaAtascos>
          <br/><br/><br/><br/>

      </div>
    
    
  );

}

export default AppMap;
