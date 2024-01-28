import { Box, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../providers/auth";

const SideBar = (props) => {
  const { users } = props;
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onClickUserBtn = (id: string) => {
    navigate(`${id}`);
    console.log(id);
  };

  return (
    <Grid item xs={3} sx={{ bgcolor: "#B9B4C7" }}>
      {users.map((perUser) => {
        if (user.email !== perUser.email) {
          return (
            <Box key={perUser.uid} sx={{ p: 4 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => onClickUserBtn(perUser.uid)}
              >
                {perUser.email}
              </Button>
            </Box>
          );
        }
      })}
    </Grid>
  );
};

export default SideBar;
