import React, {useState,useEffect} from "react";
import { GoogleLogin } from 'react-google-login';


const clientId = '648322447419-osfeth6fh3sa8945totgplb844oq6nd0.apps.googleusercontent.com';

function Login(props){

    function GetUserByEmail(email){
        var user;
        fetch('http://127.0.0.1:8000/crud/usuario/email/' + email + '/')
        .then((data) => data.json())
        .then((data)=>{
            sessionStorage.setItem('user', JSON.stringify(data[0]));
            props.setUser( (data[0]) );
        })      
    }

    //Actualiza el token para seguir logueado
    const refreshTokenSetup = (res) => {
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);
            //saveUserToken(newAuthRes.access_token);
            console.log('new Auth Token:', newAuthRes.id_token);
    
            setTimeout(refreshToken,refreshTiming);
        };
    
        setTimeout(refreshToken,refreshTiming);
    }

    const onSuccess = (res) => {

        props.setProfile(res.profileObj);
        console.log(res.profileObj);
        refreshTokenSetup(res);
        GetUserByEmail(res.profileObj.email);

        if(props.user === ""){
            console.log("Name: " + res.profileObj.givenName + ", surname: "+res.profileObj.familyName + ", email: "+res.profileObj.email);
            //console.log("He hecho post");
            GetUserByEmail(res.profileObj.email);
        }
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    const onCreate = () => {
        document.getElementById('logout').style.display = 'none';
    };

    return(
        <div id='login'>
            <GoogleLogin
            clientId={clientId}
            buttonText="Iniciar sesión"
            onCreate={onCreate}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    );
}

export default Login;