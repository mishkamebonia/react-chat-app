import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const signIn = (signInEmail: string, signInPassword: string) => {
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};