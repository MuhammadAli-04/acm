import React, { useState } from "react";
import './loginSignup.css';

import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase, ref, set} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyADSoWtzzC912wq_EfWNXuiZjssANDTudw",
    authDomain: "acm1-2e449.firebaseapp.com",
    projectId: "acm1-2e449",
    storageBucket: "acm1-2e449.appspot.com",
    messagingSenderId: "174881272049",
    appId: "1:174881272049:web:7316ce65768213bd4c7950",
    measurementId: "G-6TB8FMRPKF"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let user = '';

function clickedLogin(){
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
}

function clickedSignUp(){
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
}




function LoginSignup(){

    const [signup,setSignup] = useState({
        'name':'',
        'email':'',
        'password':''
    });

    const [login,setLogin] = useState({
        'email':'',
        'password':''
    })

    function setSignupData(event){
        let {name,value} = event.target;
        setSignup({
            ...signup,
            [name]:value
        })        
    }

    function setLoginData(event){
        let {name,value} = event.target;
        setLogin({
            ...login,
            [name]:value
        })
    }

    function authenticate(email,password){
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signed in"); 
        return userCredential.user.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });

      setLogin({
        'email':'',
        'password':''
      })
    }
    
    function Signup(name,email,password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            let data = {
                'name':name,
                'email':email
            }
            set(ref(database, 'users/'+user.uid), data);
            alert("User created")
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });

        setSignup({
            'name':'',
            'email':'',
            'password':''
        })
        
    }



    return (
        <div className="parent">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input value={signup.name} onChange={setSignupData} type="text" name="name" placeholder="Name" />
                        <input value={signup.email} onChange={setSignupData} type="email" name="email" placeholder="Email" />
                        <input value={signup.password} onChange={setSignupData} type="password" name="password" placeholder="Password" />
                        <button onClick={(event)=>{
                            event.preventDefault(); user = Signup(signup.name,signup.email,signup.password);
                        }}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <input onChange={setLoginData} value={login.email} type="email" name="email"  placeholder="Email" />
                        <input onChange={setLoginData} value={login.password} type="password" name="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={(event)=>{event.preventDefault(); user = authenticate(login.email,login.password);console.log(user)}}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal details
                            </p>
                            <button onClick={clickedLogin} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hi There!</h1>
                            <p>Enter your personal details to open an account with us</p>
                            <button onClick={clickedSignUp} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;