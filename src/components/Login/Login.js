
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
    
    const  handleGoogleSignIn =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    const {displayName, email} = result.user; 
    const signedInUser = {name: displayName, email} 
    setLoggedInUser(signedInUser);
    storeAuthToken();
    
    
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
    
    var credential = error.credential;
    
  });
    }

    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken( true).then(function(idToken) {
        
        
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function(error) {
        
      });
    }
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;