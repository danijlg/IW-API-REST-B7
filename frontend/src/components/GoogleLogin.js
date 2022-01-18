import React from "react";
import { GoogleLogin } from 'react-google-login';


const clientId = '648322447419-osfeth6fh3sa8945totgplb844oq6nd0.apps.googleusercontent.com';

function Login(props){

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
        props.setEmail(res.profileObj.email);
        refreshTokenSetup(res);
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
            //style={{margin: '100px'}}
            isSignedIn={true}
            />
        </div>
    );
}

export default Login;