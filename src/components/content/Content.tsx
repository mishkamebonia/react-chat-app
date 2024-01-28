import { TextField, Grid, Button } from "@mui/material";

const Content = () => {
  return (
    <Grid item xs={9} sx={{ bgcolor: "#fff" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        sx={{ p: 4, height: "100%" }}
      >
        <Grid item xs={5}>
          <p>123</p>
          <p>123</p>
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
  );
};

export default Content;
