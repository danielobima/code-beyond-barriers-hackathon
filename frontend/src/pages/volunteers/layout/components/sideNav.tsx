import {
  Category,
  FactCheck,
  HomeRounded,
  ListAlt,
  Settings,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import VolunteersSideNavButton from "./sideNavButton";

const VolunteersSideNav = () => {
  return (
    <>
      <Stack
        sx={{
          width: "110px",
          height: "100%",
          position: "fixed",
          p: 2,
        }}
        direction="row"
      >
        <Stack
          sx={{
            bgcolor: "#9F141B",
            boxShadow: " 0px 10px 25px 5px rgba(0, 0, 0, 0.15)",
            borderRadius: "14px",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          spacing={4}
        >
          <Box
            sx={{
              width: "fit-content",
              aspectRatio: "1/1",
              borderRadius: "500px",
              bgcolor: "#d9d9d9",
              p: 1,
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: "16px",
              left: "50%",
              transform: "translate(-50%,0%)",
            }}
          >
            logo
          </Box>
          <VolunteersSideNavButton
            icon={<HomeRounded />}
            page="/volunteers"
            text="Dashboard"
          />
          <VolunteersSideNavButton
            icon={<FactCheck />}
            page="/volunteers/tasks"
            text="Tasks"
          />
          <VolunteersSideNavButton
            icon={<Category />}
            page="/volunteers/resources"
            text="Resources"
          />
          <VolunteersSideNavButton
            icon={<ListAlt />}
            page="/volunteers/reports"
            text="Reports"
          />
          <VolunteersSideNavButton
            icon={<Settings />}
            page="/volunteers/settings"
            text="Settings"
          />
        </Stack>
      </Stack>
      <Box
        sx={{
          width: "120px",
        }}
      />
    </>
  );
};

export default VolunteersSideNav;
