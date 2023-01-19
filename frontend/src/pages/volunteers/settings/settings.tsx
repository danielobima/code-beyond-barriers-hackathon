import { MarkChatUnread, Notifications } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Fade,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const VolunteersSettings = () => {
  const theme = useTheme();
  return (
    <Fade in>
      <Stack pr={3}>
        <Stack
          direction="row"
          sx={{ py: 2, justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h6">Settings</Typography>
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
        <Grid container spacing={3}></Grid>
      </Stack>
    </Fade>
  );
};

export default VolunteersSettings;
