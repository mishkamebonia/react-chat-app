import SignUp from "../components/authorization/SignUp";
import SignIn from "../components/authorization/SignIn";
import LogOut from "../components/authorization/LogOut";

import { auth } from "../config/firebase";

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user logged in: ", user.email);
  } else {
    console.log("user logged out");
  }
});

const Authorization = () => {
  return (
    <div>
      <h1>sign up</h1>
      <SignUp />
      <h1>sign in</h1>
      <SignIn />
      <h1>log ouy</h1>
      <LogOut />
    </div>
  );
};

export default Authorization;
