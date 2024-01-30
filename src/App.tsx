import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./providers/auth";
import NavBar from "./components/content/NavBar";
import SideBar from "./components/content/SideBar";
import Content from "./components/content/Content";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Messages from "./components/content/Messages";

function App() {
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [chatLink, setChatLink] = useState("");

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
    <Router>
      {user ? (
        <div>
          <NavBar></NavBar>
          <Grid
            sx={{ height: "100vh" }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <SideBar
              users={users}
              chatLink={chatLink}
              setChatLink={setChatLink}
            />
            <Messages chatLink={chatLink} />
          </Grid>
        </div>
      ) : null}
      <Routes>
        <Route
          path="/"
          index
          element={user ? <Navigate to="/" /> : <Navigate to="/signIn" />}
        />
        <Route
          path="/signIn"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signUp"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
