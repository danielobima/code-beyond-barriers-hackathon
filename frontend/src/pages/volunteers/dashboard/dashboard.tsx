import { MarkChatUnread, Notifications, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CardBase from "../../sharedComponents/cardBase";
import map from "../../../assets/map.png";

const VolunteersDashboard = () => {
  const theme = useTheme();
  return (
    <Fade in>
      <Stack pr={3}>
        <Stack
          direction="row"
          sx={{ py: 2, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6">Dashboard</Typography>
          <Stack direction="row" spacing={3}>
            <IconButton size="small">
              <MarkChatUnread fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Notifications fontSize="small" />
            </IconButton>
            <Avatar>D</Avatar>
          </Stack>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Stack direction="row" spacing={2}>
              <CardBase sx={{ width: "50%" }}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "stretch", mb: 2 }}
                  spacing={2}
                >
                  <Box
                    sx={{
                      width: "1px",
                      bgcolor: "#9F141B",
                    }}
                  />
                  <Stack>
                    <Typography
                      variant="h6"
                      color="#9F141B"
                      sx={{ fontWeight: "bold" }}
                    >
                      Flood crisis at Lodwar
                    </Typography>
                    <Typography color="primary" sx={{ mb: 1 }}>
                      Urgent help required
                    </Typography>
                    <Typography>
                      Task: Assisting with the distribution of emergeny supplies
                    </Typography>
                    <Typography color="#444" variant="body2" mb={1}>
                      4/12 volunteers registered
                    </Typography>
                    <Button sx={{ width: "fit-content" }}>View details</Button>
                  </Stack>
                </Stack>
                <Box
                  component="img"
                  src={map}
                  alt="map"
                  sx={{
                    width: "100%",
                    height: "45vh",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </CardBase>
              <Stack spacing={2} sx={{ width: "50%" }}>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Tasks
                  </Typography>
                  <Button>See more</Button>
                </Stack>
                <CardBase>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "stretch" }}
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: "1px",
                        bgcolor: "#9F141B",
                      }}
                    />
                    <Stack spacing={1}>
                      <Typography color="#9F141B" sx={{ fontWeight: "bold" }}>
                        Assisting with the distribution of emergeny supplies
                      </Typography>
                      <Stack
                        direction={"row"}
                        sx={{ color: theme.palette.primary.main }}
                        alignItems="center"
                      >
                        <Place />
                        <Typography>Lodwar</Typography>
                      </Stack>
                      <Typography color="#444" variant="body2" mb={1}>
                        4/12 volunteers registered
                      </Typography>
                      <Button sx={{ width: "fit-content" }}>
                        View details
                      </Button>
                    </Stack>
                  </Stack>
                </CardBase>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <CardBase>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Your tasks
              </Typography>
              <Stack spacing={1}>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={2}
                >
                  <Box
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: "5px",
                      borderRadius: "50px",
                      height: "5px",
                    }}
                  />
                  <Stack spacing={1}>
                    <Typography sx={{ color: "#9F141B" }}>
                      Providing emotional and psychological support
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Ongoing
                    </Typography>
                  </Stack>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={2}
                >
                  <Box
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: "5px",
                      borderRadius: "50px",
                      height: "5px",
                    }}
                  />
                  <Stack spacing={1}>
                    <Typography sx={{ color: "#9F141B" }}>
                      Providing emotional and psychological support
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Ongoing
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardBase>
          </Grid>
        </Grid>
      </Stack>
    </Fade>
  );
};

export default VolunteersDashboard;
