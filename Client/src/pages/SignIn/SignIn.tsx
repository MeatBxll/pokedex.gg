import { useState } from "react";
import { SignInTextInput } from "./components/SignInTextInput";
import "./SignIn.css";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  return (
    <div className="signIn__wrap">
      <header className="signIn__head">
        <button
          className={
            isOnLogin
              ? "signIn__selected-head-button"
              : "signIn__idle-head-button"
          }
          onClick={() => setIsOnLogin(true)}
        >
          Login
        </button>
        <button
          className={
            isOnLogin
              ? "signIn__idle-head-button"
              : "signIn__selected-head-button"
          }
          onClick={() => setIsOnLogin(false)}
        >
          Register
        </button>
      </header>

      <div className="signIn__body">
        <div
          className="signIn__body-content"
          style={isOnLogin ? {} : { display: "none" }}
        >
          <SignInTextInput placeHolder="Username" />
          <SignInTextInput placeHolder="Password" />
          <button className="signIn__footer-buttons">Sign In</button>
          <img
            className="signIn__img1"
            src="https://www.pngplay.com/wp-content/uploads/12/Snorlax-Pokemon-PNG-Images-HD.png"
          />
        </div>

        <div
          className="signIn__body-content"
          style={isOnLogin ? { display: "none" } : {}}
        >
          <img
            className="signIn__img1"
            src="https://www.pngplay.com/wp-content/uploads/11/Gengar-Free-PNG.png"
            alt="img"
          />
          <SignInTextInput placeHolder="FirstName" />
          <SignInTextInput placeHolder="Email" />
          <SignInTextInput placeHolder="Password" />
          <SignInTextInput placeHolder="Confirm Password" />
          <button className="signIn__footer-buttons">Sign Up !</button>
        </div>
      </div>

      <footer className="signIn__footer">
        <button className="signIn__footer-buttons">Sign In With Google</button>
        <Link className="signIn__footer-buttons" to="/">
          Continue Without Signing In
        </Link>
      </footer>
    </div>
  );
};
