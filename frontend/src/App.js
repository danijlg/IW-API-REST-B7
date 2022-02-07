import React, {useState, useEffect} from 'react'
import './App.css';
import NavBar from "./Navbar";
import Paypal from './components/PayPal';

function Api_Django(){
    const [checkOut, setCheckOut] = useState(false);

    return(
        <html>
            <head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossOrigin=""/>
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossOrigin=""></script>
                
            </head>

            <body>
                <NavBar />
                {checkOut ? (
                    <Paypal/>
                ) : (
                    <button
                        onClick={() => {
                            setCheckOut(true);
                        }}> Checkout 
                </button> )}
            </body>
        </html>
    );
}
export default Api_Django   ;