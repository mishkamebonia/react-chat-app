import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const signIn = (signInEmail: string, signInPassword: string) => {
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      cookies.set("auth-token", user.refreshToken)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};