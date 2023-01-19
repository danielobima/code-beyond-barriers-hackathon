import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import VolunteersSideNav from "./components/sideNav";

const VolunteersLayout = () => {
  return (
    <Stack sx={{ width: "100vw", minHeight: "100vh" }} direction="row">
      <VolunteersSideNav />
      <Stack sx={{ width: "calc(100% - 120px)" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default VolunteersLayout;
