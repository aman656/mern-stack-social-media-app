import "./SignIn.css";
import { useRef, useContext } from "react";
import { loggingIn } from "../../servercontact";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

function SignIn() {
  const emailRef = useRef();
  const passRef = useRef();
  const { user, dispatch, fetching } = useContext(AuthContext);
  const submitHandler = (event) => {
    loggingIn(
      { email: emailRef.current.value, password: passRef.current.value },
      dispatch
    );
    event.preventDefault();
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MetaUp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Meta Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={submitHandler}>
            <input
              placeholder="Email"
              type="email"
              ref={emailRef}
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              ref={passRef}
              minLength={6}
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              {fetching ? "Loading..." : "Login"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
