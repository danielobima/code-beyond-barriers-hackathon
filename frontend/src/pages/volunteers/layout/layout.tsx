import { Stack } from "@mui/material";
import VolunteersSideNav from "./components/sideNav";

const VolunteersLayout = () => {
  return (
    <Stack sx={{ width: "100vw", minHeight: "100vh" }} direction="row">
      <VolunteersSideNav />
    </Stack>
  );
};

export default VolunteersLayout;
