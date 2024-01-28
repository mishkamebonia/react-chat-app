import NavBar from "../components/content/NavBar";
import { Grid } from "@mui/material";
import { useAuthContext } from "../providers/auth";
import { useEffect, useState } from "react";
import SideBar from "../components/content/SideBar";
import Content from "../components/content/Content";

const MainPage = () => {
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);

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
        <SideBar users={users} />
        <Content />
      </Grid>
    </div>
  );
};

export default MainPage;
