import "./App.css";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./providers/auth";

function App() {
  const { user } = useAuthContext();

  // console.log({ user });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          index
          element={user ? <MainPage /> : <Navigate to="/signIn" />}
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
