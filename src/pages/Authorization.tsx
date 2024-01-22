import SignUp from "../components/authorization/SignUp";
import SignIn from "../components/authorization/SignIn";
import LogOut from "../components/authorization/LogOut";

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
