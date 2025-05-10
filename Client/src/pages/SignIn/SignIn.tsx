import { useState } from "react";
import { SignInTextInput } from "./components/SignInTextInput";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useRegisterMutation,
  useSignInMutation,
} from "../../api/backend/authApiEndpoints";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials } from "../../app/userSlice";

export const SignIn = () => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
  const [err, setErr] = useState<any>({});
  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const [signIn] = useSignInMutation();

  async function LogIn(e: any) {
    e.preventDefault();
    const checkData = {
      email: checkEmail,
      password: checkPassword,
    };

    try {
      const res = await signIn(checkData).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
      navigate("/");
    } catch (err: any) {
      console.log(err.data);
      setLoginErr(err.data.error);
    }
  }

  async function Register(e: any) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsDoNotMatch(true);
      return;
    } else setPasswordsDoNotMatch(false);

    const registerData = {
      firstName,
      username,
      email,
      password,
    };

    try {
      const res = await register(registerData).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
      navigate("/");
    } catch (err: any) {
      setErr(err.data.errors);
    }
  }

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
          <SignInTextInput
            value={checkEmail}
            onValueChanged={setCheckEmail}
            placeHolder="Email"
            err={"none"}
          />

          <SignInTextInput
            value={checkPassword}
            onValueChanged={setCheckPassword}
            placeHolder="Password"
            err={"none"}
          />
          <div>{loginErr}</div>
          <button onClick={LogIn} className="signIn__footer-buttons">
            Sign In
          </button>
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
          <SignInTextInput
            value={firstName}
            onValueChanged={setFirstName}
            placeHolder="First Name"
            err={err.hasOwnProperty("firstName") ? err.firstName : "none"}
          />
          <SignInTextInput
            value={username}
            onValueChanged={setUsername}
            placeHolder="User Name"
            err={err.hasOwnProperty("username") ? err.username : "none"}
          />

          <SignInTextInput
            value={email}
            onValueChanged={setEmail}
            placeHolder="Email"
            err={err.hasOwnProperty("email") ? err.email : "none"}
          />
          <SignInTextInput
            value={password}
            onValueChanged={setPassword}
            placeHolder="Password"
            err={err.hasOwnProperty("password") ? err.password : "none"}
          />
          <SignInTextInput
            value={confirmPassword}
            onValueChanged={setConfirmPassword}
            placeHolder="Confirm Password"
            err={passwordsDoNotMatch ? "Passwords Dont Match" : "none"}
          />

          <button onClick={Register} className="signIn__footer-buttons">
            Sign Up !
          </button>
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
