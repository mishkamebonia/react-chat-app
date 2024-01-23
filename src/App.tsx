import "./App.css";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <MainPage user={user} /> : <Navigate to="/signIn" />}
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
    </BrowserRouter>
  );
}

export default App;
