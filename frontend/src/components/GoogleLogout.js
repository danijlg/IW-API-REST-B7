import React from "react";
import { GoogleLogout } from 'react-google-login';

const clientId = '648322447419-osfeth6fh3sa8945totgplb844oq6nd0.apps.googleusercontent.com';

function Logout(props){
    const logout = () => {
        props.setProfile("");
        document.getElementById('logout').style.display = 'none';
        window.location.href = './';
    };

    return(
        <div id='logout'>
            <GoogleLogout
            clientId={clientId}
            buttonText="Cerrar sesión"
            onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;