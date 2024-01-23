import { User } from "firebase/auth";
import NavBar from "../components/NavBar";

interface Props {
  user: User | null;
}

const MainPage = (props: Props) => {
  const { user } = props;
  console.log(user);

  return (
    <div>
      <NavBar />
      <h1>main page</h1>
    </div>
  );
};

export default MainPage;
