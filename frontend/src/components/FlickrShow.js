import axios from "axios";
import React, {useState, useEffect} from 'react'
import './FlickrShow.css'

const yourApiKey = '4cbfdaa25e3ad80e763a108aee97daef';

var data = {
    method: 'flickr.photos.search',
    api_key: yourApiKey,
    user_id: "194747021@N08",
    //tags: 'id:1_webing,user_webing', // Search Text
    sort: 'interestingness-desc',
    per_page: 12,
    extras: 'owner_name',
    format: 'json',
    nojsoncallback: 1,
  };
  
  var parameters = new URLSearchParams(data);
  
  var url = `https://api.flickr.com/services/rest/?${parameters}`;

function FlickrApp(){
    const [ImageURLList,getImageURLList]=useState([]);

    function GetFlickrImages(){
      fetch(url)
            .then(function(response){
              return response.json();
            })
            .then(function(j){
              //alert(JSON.stringify(j));
              let picArray = j.photos.photo.map((pic) => {
    
                    var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
                    return(
                      <div className="gallery">
                        <a target="_blank" href={srcPath}>
                          <img src={srcPath} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div class="desc">{pic.title}</div>
                      </div>
                    )
              })
              getImageURLList(picArray);
            })
    }

    useEffect(()=>{
        GetFlickrImages();
    }, [])

    return (
        <div className="center">

          <br/>
          <h2>Buscar por usuario</h2><br/>
          <p>Al poner 0 en el cuadro de texto o al dejarlo en blanco, muestrar todas las imágenes. Si no, muestra la imagen correspondiente al usuario y a su coche.</p>
            <input id="userId" type='number'></input>
          <button onClick={()=> {
            if(!(document.getElementById("userId").value == "" || document.getElementById("userId").value < 1)){
              data.tags = "id:" + document.getElementById("userId").value + "_webing";
            } else {
              data.tags = "";
            }
              parameters = new URLSearchParams(data);
              url = `https://api.flickr.com/services/rest/?${parameters}`;
              GetFlickrImages();
          }}>
        Buscar Imágenes
      </button>
      <br/><br/><br/><br/><br/>
        {
                (
                    ImageURLList.map((image)=>{
                        return image;
                    })
                )
        }
        </div>
    );
}

export default FlickrApp