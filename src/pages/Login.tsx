import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className="loginFormLabel">Email</label>
        <input type="text" className="loginFormInput" />
        <label className="loginFormLabel">Password</label>
        <input type="password" className="loginFormInput" />
        <button className="loginFormSubmit">Login</button>
      </form>
      <button className="loginFormRegister">Register</button>
    </div>
  );
};

export default Login;
