import { MarkChatUnread, Notifications, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Collapse,
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
import { useState } from "react";

const VolunteersTasks = () => {
  const theme = useTheme();
  const [taskOpen, setTaskOpen] = useState(false);
  return (
    <Fade in>
      <Stack pr={3}>
        <Stack
          direction="row"
          sx={{ py: 2, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6">Tasks</Typography>
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
          <Grid item xs={7}>
            <Stack spacing={2}>
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Your tasks
                </Typography>
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
                    <Button
                      sx={{ width: "fit-content" }}
                      onClick={() => setTaskOpen(!taskOpen)}
                    >
                      View details
                    </Button>
                  </Stack>
                </Stack>
              </CardBase>
            </Stack>
          </Grid>

          <Grid item xs={5}>
            <Collapse in={taskOpen}>
              <CardBase>
                <Stack spacing={2}>
                  <Typography color="#9F141B" sx={{ fontWeight: "bold" }}>
                    Assisting with the distribution of emergeny supplies
                  </Typography>
                  <Box
                    component="img"
                    src={map}
                    alt="map"
                    sx={{
                      width: "100%",
                      height: "40vh",
                      objectFit: "cover",
                      borderRadius: "14px",
                    }}
                  />
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{ color: theme.palette.primary.main }}
                      alignItems="center"
                    >
                      <Place />
                      <Typography>Lodwar</Typography>
                    </Stack>
                    <Typography>25/01/2023</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "stretch", width: "100%" }}
                    spacing={2}
                  >
                    <Box
                      sx={{
                        width: "1px",
                        bgcolor: "#9F141B",
                      }}
                    />
                    <Typography sx={{ maxWidth: "calc(100% - 17px)" }}>
                      Loading and unloading of emergency supplies, such as food,
                      water, and hygiene kits, from a delivery truck.
                      Distribution of these supplies to members of the community
                      at the designated location. Setting up a distribution
                      area, organizing the supplies, and assisting community
                      members as they come to collect them. Keeping track of the
                      number of supplies distributed and reporting this
                      information to the coordinators.
                    </Typography>
                  </Stack>
                </Stack>
              </CardBase>
            </Collapse>
          </Grid>
        </Grid>
      </Stack>
    </Fade>
  );
};

export default VolunteersTasks;
