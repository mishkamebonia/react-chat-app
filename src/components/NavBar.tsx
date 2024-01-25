import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";
import { useAuthContext } from "../providers/auth";

export default function ButtonAppBar() {
  const { logOut } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          <Button color="inherit" onClick={logOut}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
