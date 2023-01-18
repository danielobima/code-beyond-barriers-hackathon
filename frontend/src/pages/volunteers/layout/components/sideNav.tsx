import { HomeRounded } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import VolunteersSideNavButton from "./sideNavButton";

const VolunteersSideNav = () => {
  return (
    <>
      <Stack
        sx={{
          width: "120px",
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
            height: "calc(100% - 32px)",
            width: "calc(100% - 32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          spacing={2}
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
            page="/volunteers/dashboard"
            text="Dashboard"
          />
          <VolunteersSideNavButton
            icon={<HomeRounded />}
            page="/volunteers/tasks"
            text="Tasks"
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
