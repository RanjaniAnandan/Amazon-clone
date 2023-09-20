import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth }  from './firebase';
import Maskqueen from "./Maskqueen.png"


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = (event) => {
        event.preventDefault();  //this stops the refresh!!!
        // do the login logic...

      auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged In, redirect to homepage...
        navigate("/");
      })
      .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();  //this stops the refresh!!!
        // do the login logic...

      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
    };


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={Maskqueen} 
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input value={email} onChange = {e => setEmail(e.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange = {e => setPassword(e.target.value)} type="password" />
            <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
            By signing-in you agree to MaskQueen Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest. Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create your MaskQueen Account</button>
      </div>

      
    </div>
  )
}

export default Login