import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import VolunteersSideNav from "./components/sideNav";

const VolunteersLayout = () => {
  return (
    <Stack sx={{ width: "100vw", minHeight: "100vh" }} direction="row">
      <VolunteersSideNav />
      <Stack sx={{ flexGrow: 1 }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default VolunteersLayout;
