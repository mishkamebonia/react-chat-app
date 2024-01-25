import NavBar from "../components/NavBar";

import { TextField, Box, Grid, Button } from "@mui/material";
import { useAuthContext } from "../providers/auth";

const MainPage = () => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <div>
      <NavBar />
      <Grid
        sx={{ height: "94vh" }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={2} sx={{ bgcolor: "#B9B4C7" }}>
          <Box sx={{ p: 4 }}>12</Box>
          <Box sx={{ p: 4 }}> 34</Box>
        </Grid>
        <Grid item xs={10} sx={{ bgcolor: "#fff" }}>
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
