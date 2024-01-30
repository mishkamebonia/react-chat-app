import NavBar from "../components/content/NavBar";
import SideBar from "../components/content/SideBar";
import MessagesBox from "../components/content/Messages";
import { Grid } from "@mui/material";
import { useAuthContext } from "../providers/auth";
import { useEffect, useState } from "react";

const Chat = () => {
  const { user } = useAuthContext();

  return <MessagesBox />;
};

export default Chat;
