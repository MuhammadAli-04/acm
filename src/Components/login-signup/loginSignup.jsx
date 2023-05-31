import React from "react";
import './loginSignup.css';


function LoginSignup(){

    function clickedLogin(){
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    }

    function clickedSignUp(){
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");
    }


    return (
        <div className="parent">
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form  method = 'post'>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <button >Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form method= 'post'>
                        <h1>Sign in</h1>
                        <input type="email" name="email"  placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button >Sign In</button>
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