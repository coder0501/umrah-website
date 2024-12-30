import React from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';
// import AppleSignin from 'react-apple-signin-auth';
// import { MsalProvider, useMsal } from '@azure/msal-react';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import axios from 'axios';

// const msalConfig = {
//   auth: {
//     clientId: process.env.REACT_APP_MS_CLIENT_ID,
//     authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID}`,
//     redirectUri: "http://localhost:3000",
//   },
// };

// const pca = new PublicClientApplication(msalConfig);

const SocialMediaLogin = () => {
    //   const { instance } = useMsal();

    // Google Login Handler
    const handleGoogleSuccess = (response: CredentialResponse) => {
        console.log('Google login success:', response);
        axios.post('http://localhost:5000/auth/google', { token: response.credential })
            .then(res => console.log('Google Auth Success:', res.data))
            .catch(err => console.error('Google Auth Error:', err));
    };

    const handleGoogleError = () => {
        console.error('Google login failed');
    };

    // Facebook Login Handler
    //   const handleFacebookSuccess = (response) => {
    //     console.log('Facebook login success:', response);
    //     axios.post('/api/auth/facebook', { accessToken: response.accessToken })
    //       .then(res => console.log('Facebook Auth Success:', res.data))
    //       .catch(err => console.error('Facebook Auth Error:', err));
    //   };

    //   const handleFacebookError = () => {
    //     console.error('Facebook login failed');
    //   };

    // Apple Login Success Callback
    //   const handleAppleSuccess = (response) => {
    //     console.log('Apple login success:', response);
    //     axios.post('/api/auth/apple', { token: response.authorization.id_token })
    //       .then(res => console.log('Apple Auth Success:', res.data))
    //       .catch(err => console.error('Apple Auth Error:', err));
    //   };

    //   const handleAppleError = (error) => {
    //     console.error('Apple login failed:', error);
    //   };

    // Microsoft Login Handler
    //   const handleMicrosoftLogin = async () => {
    //     try {
    //       const loginResponse = await instance.loginPopup({
    //         scopes: ["openid", "profile", "User.Read"],
    //       });
    //       console.log('Microsoft login success:', loginResponse);
    //       axios.post('/api/auth/microsoft', { token: loginResponse.idToken })
    //         .then(res => console.log('Microsoft Auth Success:', res.data))
    //         .catch(err => console.error('Microsoft Auth Error:', err));
    //     } catch (error) {
    //       console.error('Microsoft login failed:', error);
    //     }
    //   };

    return (
        <div className="login-container">
            <h2>Login with Social Accounts</h2>

            {/* Google Login */}
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
            />

            {/* Facebook Login */}
            {/* <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookSuccess}
                onFailure={handleFacebookError}
            /> */}

            {/* Apple Login */}
            {/* <AppleSignin
                authOptions={{
                    clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
                    redirectURI: 'http://localhost:3000/auth/apple/callback',
                    scope: 'email name',
                    usePopup: true,
                }}
                onSuccess={handleAppleSuccess}
                onError={handleAppleError}
                render={(props) => <button onClick={props.onClick}>Login with Apple</button>}
            /> */}

            {/* Microsoft Login */}
            {/* <button onClick={handleMicrosoftLogin}>Login with Microsoft</button> */}
        </div>
    );
};

// const App = () => (
//     <MsalProvider instance={pca}>
//         <Login />
//     </MsalProvider>
// );

export default SocialMediaLogin;
