import NavBar from "../components/NavBar";
import { TextField, Box, Grid, Button } from "@mui/material";
import { useAuthContext } from "../providers/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // console.log(user);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/fir-chat-app-a2fa1/us-central1/users")
        .then((res) => res.json())
        .then((data) => {
          console.log("users ", data);
          setUsers(data);
        });
    }
  }, [user]);

  const onClickUserBtn = (id: string) => {
    navigate(`${id}`);
    console.log(id);
  };

  return (
    <div>
      <NavBar />
      <Grid
        sx={{ height: "100vh" }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={3} sx={{ bgcolor: "#B9B4C7" }}>
          {users.map((perUser) => {
            if (user.email !== perUser.email) {
              return (
                <Box key={perUser.uid} sx={{ p: 4 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => onClickUserBtn(perUser.uid)}
                  >
                    {perUser.email}
                  </Button>
                </Box>
              );
            }
          })}
        </Grid>
        <Grid item xs={9} sx={{ bgcolor: "#fff" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ p: 4, height: "100%" }}
          >
            <Grid item xs={5}>
              text
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Type a message"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button fullWidth color="primary" variant="contained">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
