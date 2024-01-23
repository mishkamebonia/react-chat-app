import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const signUp = (signUpEmail: string, signUpPassword: string) => {
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
};