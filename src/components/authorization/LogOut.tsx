import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const LogOut = () => {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log(auth);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Button variant="contained" size="small" onClick={() => handleLogOut()}>
      Log Out
    </Button>
  );
};

export default LogOut;
