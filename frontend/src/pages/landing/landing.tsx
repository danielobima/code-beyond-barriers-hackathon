import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LandingPageNavBar from "./components/navbar";
import girl from "../../assets/girl.png";
import hands from "../../assets/hands.png";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ width: "100%" }}>
      <LandingPageNavBar />
      <Stack direction="row" sx={{ height: "65vh", width: "100%" }}>
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              alignItems: "start",
              height: "fit-content",
              width: "fit-content",
              maxWidth: "65%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Inter", fontWeight: "bold" }}
            >
              Disaster relief platform
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Join the effort to provide aid and support to those affected by
              natural disasters. Donate now and make a difference in the lives
              of those in need.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Donate now</Button>
              <Button>Learn more</Button>
            </Stack>
          </Stack>
        </Stack>
        <Box
          component="img"
          src={girl}
          alt="girl"
          sx={{ width: "50%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#EEEEEE",
          height: "40vh",
        }}
      >
        <Stack sx={{ width: "60%", alignItems: "center" }}>
          <Typography color="primary" variant="h4" sx={{ fontWeight: 700 }}>
            Join the volunteer program
          </Typography>
          <Typography sx={{ textAlign: "center", mb: 2 }}>
            Be the change you want to see in the world. Sign up to volunteer
            with our disaster relief organization and help make a positive
            impact in the lives of those affected by natural disasters.
          </Typography>
          <Button variant="contained">Register</Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        id="OurMission"
        sx={{ minHeight: "60vh", width: "100%" }}
      >
        <Box
          component="img"
          src={hands}
          alt="hands"
          sx={{ width: "50%", height: "100%", objectFit: "cover" }}
        />
        <Stack
          sx={{
            width: "50%",
            minHeight: "60vh",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: theme.palette.primary.main,
            color: "white",
          }}
        >
          <Stack
            sx={{
              alignItems: "start",
              height: "fit-content",
              width: "fit-content",
              maxWidth: "80%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Inter", fontWeight: "bold" }}
            >
              Our mission
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Our mission is to revolutionize disaster relief efforts by
              leveraging the power of blockchain technology. By implementing
              transparent and secure blockchain systems, we aim to improve
              accountability and efficiency in the distribution of aid, while
              also empowering local communities to take control of their own
              recovery
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: theme.palette.primary.main }}
              >
                Donate now
              </Button>
              <Button>Learn more</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ bgcolor: "#40080B", py: 4, color: "white" }}>
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Reach out to us
            </Typography>
            <Typography
              component="a"
              href="mailto:mail@mail.com"
              sx={{ color: "white", textDecoration: "none" }}
            >
              mail@mail.com
            </Typography>
            <Typography
              component="a"
              href="tel:+254712345678"
              sx={{ color: "white", textDecoration: "none", mb: 2 }}
            >
              +254712345678
            </Typography>
            <Divider sx={{ borderColor: "white", mb: 2, width: "100%" }} />
            <Typography
              component="a"
              href="#OurMission"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Our mission
            </Typography>
            <Typography
              component="a"
              href="#OurMission"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Volunteer
            </Typography>
            <Typography
              component="a"
              href="#OurMission"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Donate
            </Typography>
            <Typography
              component="a"
              href="#OurMission"
              sx={{ color: "white", textDecoration: "none" }}
            >
              FAQ
            </Typography>
            <Typography
              component="a"
              href="#OurMission"
              sx={{ color: "white", textDecoration: "none", mb: 2 }}
            >
              Terms and conditions
            </Typography>
            <Typography sx={{ fontWeight: 300 }}>@ Copyright 2023</Typography>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
