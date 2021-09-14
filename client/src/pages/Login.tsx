import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import { AnyType } from "../components/Post";
import "./login.css";

export default function Login() {
  const userRef = useRef<AnyType>();
  const passwordRef = useRef<AnyType>();
  // const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("/auth/login", {
    //     username: userRef.current?.value,
    //     password: passwordRef.current?.value,
    //   });
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    // }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button
          className="loginButton"
          type="submit"
          // disabled={isFetching}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
