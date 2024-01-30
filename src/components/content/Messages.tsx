import {
  TextField,
  Grid,
  Button,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

const Messages = (props) => {
  const { chatLink } = props;
  console.log("chatLink in messages: ", chatLink);

  return (
    <Grid item xs={9} sx={{ bgcolor: "#fff" }}>
      {chatLink ? (
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
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100vh"
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MessageIcon />
          </Avatar>
          <Typography variant="h5" sx={{ m: 1 }}>
            Your messages
          </Typography>
          <p>Send private messages to a friend</p>
        </Box>
      )}
    </Grid>
  );
};

export default Messages;
