import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //console.log(result);
        //console.log(result.additionalUserInfo.profile.picture);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user.displayName,
          picture: result.additionalUserInfo.profile.picture,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://img.icons8.com/cute-clipart/64/000000/speech-bubble-with-dots.png" />

        <div className="login__text">
          <h1>Join the chat</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
