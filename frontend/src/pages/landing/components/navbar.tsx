import { Box, Stack, Typography } from "@mui/material";
import LandingPageNavButton from "./headerButton";

const LandingPageNavBar: React.FC = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          px: 3,
          bgcolor: "white",
          height: "10vh",
          width: "100%",
          top: 0,
          position: "fixed",
          zIndex: 5,
          left: 0,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          justifyContent: "space-between",
          alignItems: "center",
        }}
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
          }}
        >
          logo
        </Box>
        <Stack direction="row" sx={{ height: "100%" }}>
          <LandingPageNavButton isLink={false}>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Our mission
            </Typography>
          </LandingPageNavButton>
          <LandingPageNavButton isLink={false}>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Register
            </Typography>
          </LandingPageNavButton>
          <LandingPageNavButton isLink={false}>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              Contact us
            </Typography>
          </LandingPageNavButton>
          <LandingPageNavButton isLink={false}>
            <Typography variant="body2" sx={{ fontFamily: "Inter" }}>
              FAQ
            </Typography>
          </LandingPageNavButton>
          <LandingPageNavButton isLink={true} href="/volunteers">
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Inter",
              }}
            >
              Sign in
            </Typography>
          </LandingPageNavButton>
        </Stack>
      </Stack>
      <Box sx={{ height: "10vh" }} />
    </>
  );
};

export default LandingPageNavBar;

// withdraw after the evnt
// withdraw fixed percentage if it is before the event
// Charge event organisers who withdraw before the event
// withdraw to mpesa directly
// verify event organiser account
// on ground payment?
// add email before payment
