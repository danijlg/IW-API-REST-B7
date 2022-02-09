export default function Home() {
    /*setInterval(()=> {
        if(sessionStorage.getItem('user') === null){
            document.getElementById("nav1").style.visibility = 'hidden';
            document.getElementById("nav2").style.visibility = 'hidden';
            document.getElementById("nav3").style.visibility = 'hidden';
            document.getElementById("nav4").style.visibility = 'hidden';
            document.getElementById("nav5").style.visibility = 'hidden';
            document.getElementById("nav6").style.visibility = 'hidden';
            document.getElementById("nav7").style.visibility = 'hidden';
        } else {
            document.getElementById("nav1").style.visibility = 'visible';
            document.getElementById("nav2").style.visibility = 'visible';
            document.getElementById("nav3").style.visibility = 'visible';
            document.getElementById("nav4").style.visibility = 'visible';
            document.getElementById("nav5").style.visibility = 'visible';
            document.getElementById("nav6").style.visibility = 'visible';
            document.getElementById("nav7").style.visibility = 'visible';
        }
        
    }, 100);*/

    return(
        <div id='home'>
            <h1>Seleccionar apartado en la Navbar para cambiar de página</h1>
        </div>
    );
  
  }