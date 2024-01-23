import SignUpForm from "../components/forms/SignUpForm";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const SignIn = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box>
            <SignUpForm />
            <Grid container direction="row" justifyContent="flex-end">
              <Link to="/signIn">{"You have already an account? Sign In"}</Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
