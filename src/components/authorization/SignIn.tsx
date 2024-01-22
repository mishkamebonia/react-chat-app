import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const signIn = () => {
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

  const handleSignUp = () => {
    signIn();
  };

  return (
    <div>
      <TextField
        value={signInEmail}
        onChange={(e) => setSignInEmail(e.target.value)}
        type="email"
        placeholder="email..."
        size="small"
      />
      <TextField
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
        type="password"
        placeholder="password..."
        size="small"
      />
      <Button variant="contained" size="small" onClick={handleSignUp}>
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
