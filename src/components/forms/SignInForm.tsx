import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useAuthContext } from "../../providers/auth";

const SignInForm = () => {
  const { signIn } = useAuthContext();

  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");

  return (
    <div>
      <TextField
        sx={{ mb: 2.5 }}
        value={signInEmail}
        onChange={(e) => setSignInEmail(e.target.value)}
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoFocus
        type="email"
      />
      <TextField
        sx={{ mb: 2.5 }}
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
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
        onClick={() => signIn(signInEmail, signInPassword)}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignInForm;
