import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="registerFormLabel">UserName</label>
        <input
          type="text"
          className="registerFormInput"
          placeholder="Enter your username"
        />
        <label className="registerFormLabel">Email</label>
        <input type="text" className="registerFormInput" />
        <label className="registerFormLabel">Password</label>
        <input type="password" className="registerFormInput" />
        <button className="registerFormSubmit">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
