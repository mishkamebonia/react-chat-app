import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const SignIn = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const signUpWithEmailAndPassword = () => {
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

  const handleSignUp = () => {
    signUpWithEmailAndPassword();
  };

  return (
    <div>
      <TextField
        value={signUpEmail}
        onChange={(e) => setSignUpEmail(e.target.value)}
        type="email"
        placeholder="email..."
        size="small"
      />
      <TextField
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
        type="password"
        placeholder="password..."
        size="small"
      />
      <Button variant="contained" size="small" onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignIn;
