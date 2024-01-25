import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useAuthContext } from "../../providers/auth";

const SignUpForm = () => {
  const { signUp } = useAuthContext();

  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");

  return (
    <div>
      <TextField
        sx={{ mb: 2.5 }}
        value={signUpEmail}
        onChange={(e) => setSignUpEmail(e.target.value)}
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoFocus
        type="email"
      />
      <TextField
        sx={{ mb: 2.5 }}
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
        required
        fullWidth
        label="Password"
        autoComplete="current-password"
        type="password"
      />
      <Button
        sx={{ mb: 3.5 }}
        fullWidth
        variant="contained"
        onClick={() => signUp(signUpEmail, signUpPassword)}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpForm;
