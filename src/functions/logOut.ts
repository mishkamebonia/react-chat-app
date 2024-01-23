import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const logOut = () => {
  signOut(auth)
  .then(() => {
    cookies.remove("auth-token")
  })
  .catch((error) => {
    console.log(error);
  });
}