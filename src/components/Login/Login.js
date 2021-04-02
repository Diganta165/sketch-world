
import React, { useContext } from 'react';
import firebase from 'firebase/app'

import "firebase/auth"
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    // firebase.initializeApp(firebaseConfig);
    const  handleGoogleSignIn =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    const {displayName, email} = result.user; // puro user info na niye just display name ar email distructure kore neya holo result.user theke
    const signedInUser = {name: displayName, email} //signedInUser object er moddhe name(display name ta name hisebe dekhabe) r email initialize kora holo
    setLoggedInUser(signedInUser);
    storeAuthToken();
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }

    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        // ...
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function(error) {
        // Handle error
      });
    }
    return (
        <div>
            <h1>This is login and here magic happens</h1>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;